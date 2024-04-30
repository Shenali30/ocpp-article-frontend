import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { API_BASED_ERROR_MESSAGE } from 'constants';
import { DeviceUUID } from 'device-uuid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initiateAuth, selectAuthData, setAuthSuccess, updateTokens } from 'redux/userSlice';
import { userLogin } from 'services/userAuth';
import { useWindowSize } from 'utils';
import * as yup from 'yup';
import { HOME } from '../../navigation/Routes';

export const LoginView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [windowWidth, windowHeight] = useWindowSize();
  const authData = useSelector(selectAuthData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ show: false, text: null, type: null });
  const [showChangePassword, setShowChangePassword] = useState({ show: false, data: null });
  const [isPasswordAsText, setIsPasswordAsText] = useState(false);

  useEffect(() => {
    if (authData.isAuthenticated && authData.user && Object.keys(authData.user).length > 1) {
      navigate(HOME);
    }
  }, [authData.isAuthenticated, authData.user]);

  const initialValues = {
    userId: '',
    password: '',
  };

  const validationSchema = yup.object({
    // userId: yup.string().required(REQUIRED_FIELD_TEXT),
    // password: yup.string().required(REQUIRED_FIELD_TEXT),
  });

  const hookForm = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onLogInSuccess = (userRes) => {
    const user = { ...userRes.userDetails, permissions: userRes.permissions };
    const tokens = userRes.tokenDto;
    dispatch(setAuthSuccess({ user, tokens }));
  };

  const setPasswordToVisible = (status) => {
    setIsPasswordAsText(status);
  };

  const onSubmit = async (data) => {
    console.log('form data => ', data);

    const deviceId = new DeviceUUID().get();

    setMessage({ show: false, text: null, type: null });
    setLoading(true);
    dispatch(initiateAuth());
    userLogin(data.userId, data.password, deviceId)
      .then((res) => {
        console.log('res => ', res);
        if (res?.baseResponse?.responseHeader?.responseDesc === 'Success') {
          if (res?.userDetails?.promptPasswordChange) {
            dispatch(updateTokens({tokens: res.tokenDto}))
            setShowChangePassword({ show: true, data: res, tempPassword: data.password });
          } else {
            setMessage({ show: true, text: res?.baseResponse?.responseHeader?.displayDesc, type: 'success' });
            onLogInSuccess(res);
          }
        } else {
          setMessage({ show: true, text: res, type: 'warning' });
        }
      })
      .catch((err) => {
        setMessage({ show: true, text: API_BASED_ERROR_MESSAGE, type: 'error' });
        console.log('error user log in', err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onError = (errors) => {
    console.log(errors);
  };

  return (
    <Stack direction={'row'} alignItems={'center'} height={windowHeight}>
      <div style={{ backgroundColor: '#EEF2F6', width: '100%', maxHeight: windowHeight, overflowY: 'auto' }}>
        <Box
          sx={{
            margin: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant='h3' color={'text.primary'}>Article App</Typography>
          <div style={{ marginTop: '40px' }}>
            <Button variant='outlined' size='large' onClick={() => hookForm.handleSubmit(onSubmit, onError)()}>Go To Protal</Button>
          </div>
        </Box>
      </div>
    </Stack>
  );
};
