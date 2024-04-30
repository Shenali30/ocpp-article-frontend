import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, Box, Button, Card, CardContent, Divider, Grid, IconButton, Menu, MenuItem, Stack, Typography } from '@mui/material';
import { AlertMessage } from 'components/AlertMessage';
import { CircularLoader } from 'components/CircularLoader';
import { AutoCompleteField } from 'components/hook-form-components/AutoCompleteField';
import { DatePickerField } from 'components/hook-form-components/DatePickerField';
import { InputField } from 'components/hook-form-components/InputField';
import { API_BASED_ERROR_MESSAGE, REQUIRED_FIELD_TEXT } from 'constants';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { selectDropdownData } from 'redux/familyBookDataSlice';
import { selectAuthData } from 'redux/userSlice';
import { getUserProfile, updateUserProfile } from 'services/userAccount';
import { dropdownDataMapping, useWindowSize } from 'utils';
import { publishArticle } from 'services/article';

export const PublishArticle = () => {
  const { user } = useSelector(selectAuthData);
  const [windowWidth, windowHeight] = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ show: false, text: null, type: null });

  const [disableFields, setDisableFields] = useState({
    title: false,
    name: false,
    username: false,
    email: false,
    dateOfBirth: false,
  });

  const initialValues = {
    title: '',
    summary: '',
    details: '',
    comments: '',
  };

  const validationSchema = yup.object({
    title: yup.string().required(REQUIRED_FIELD_TEXT),
    summary: yup.string().required(REQUIRED_FIELD_TEXT),
    details: yup.string().required(REQUIRED_FIELD_TEXT),
    comments: yup.string().required(REQUIRED_FIELD_TEXT),
  });

  const hookForm = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    const updateData = {
      userEmail: user?.email,
      title: data?.title,
      categoryId: 1,
      summary: data?.summary,
      details: data?.details,
      comments: data?.comments,
    };

    setMessage({ show: false, text: null, type: null });
    setLoading(true);
    publishArticle(updateData)
      .then((userRes) => {
        if (userRes?.responseHeader?.responseDesc === 'Success') {
          setMessage({ show: true, text: userRes?.responseHeader?.displayDesc, type: 'success' });
          setTimeout(() => {
            setMessage({ show: false, text: null, type: null });
          }, 10000);
        } else {
          setMessage({ show: true, text: userRes, type: 'error' });
        }
      })
      .catch((err) => {
        setMessage({ show: true, text: API_BASED_ERROR_MESSAGE, type: 'error' });
        console.log('error update profile...', err);
      })
      .finally(() => setLoading(false));
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <>
      <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
        <CardContent sx={{ m: 2 }}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary">
                Publish Article
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary"></Typography>
            </Grid>
          </Grid>
          <br></br>
          <Divider />
          <br></br>

          <CircularLoader loading={loading}>
            <Grid container spacing={2} direction="row" justifyContent="center">
              <Grid item xs={12} md={12} lg={8} xl={6}>
                <Card variant="outlined" color="primary" sx={{ borderRadius: 5 }}>
                  <div style={{ height: windowHeight - 250, overflowY: 'auto' }}>
                    <Stack spacing={5} mt={5} pb={10} direction="column" justifyContent="center" alignItems="center">
                      <Stack spacing={2} sx={{ width: '50%' }} direction="column" justifyContent="center" alignItems="center">
                        <InputField control={hookForm.control} label="Title" name="title" id="title" fullWidth />

                        <InputField control={hookForm.control} label="Summary" name="summary" id="summary" fullWidth />

                        <InputField control={hookForm.control} label="Details" name="details" id="details" fullWidth />

                        <InputField control={hookForm.control} label="Comments" name="comments" id="comments" fullWidth />

                        <AlertMessage
                          sx={{ mt: 3 }}
                          show={message.show}
                          message={message.text}
                          type={message.type}
                          onClose={() => setMessage({ show: false, text: null, type: null })}
                        />

                        <Stack spacing={2} direction={'row'}>
                          <Button variant="contained" onClick={() => hookForm.handleSubmit(onSubmit, onError)()}>
                            Publish
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </CircularLoader>
        </CardContent>
      </Card>
    </>
  );
};
