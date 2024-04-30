import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AlertMessage } from 'components/AlertMessage';
import { InputField } from 'components/hook-form-components/InputField';
import { API_BASED_ERROR_MESSAGE, REQUIRED_FIELD_TEXT } from 'constants';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { changeUserPassword } from 'services/userAccount';
import * as yup from 'yup';

export const ChangePassword = (props) => {
  const { userData, tempPassword, onLogInSuccess } = props;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ show: true, text: 'Please change your password for continued access and security', type: 'info' });
  const [isPasswordAsText, setIsPasswordAsText] = useState({
    password: false,
    newPassword: false,
    reEnteredNewPassword: false,
  });

  const initialValues = {
    username: userData?.userDetails?.username,
    email: userData?.userDetails?.email,
    password: tempPassword,
    newPassword: '',
    reEnteredNewPassword: '',
  };

  const validationSchema = yup.object({
    username: yup.string().required(REQUIRED_FIELD_TEXT),
    email: yup.string().required(REQUIRED_FIELD_TEXT),
    password: yup.string().required(REQUIRED_FIELD_TEXT),
    newPassword: yup.string().required(REQUIRED_FIELD_TEXT),
    reEnteredNewPassword: yup
      .string()
      .required(REQUIRED_FIELD_TEXT)
      .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
  });

  const hookForm = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const setPasswordToVisible = (field, isVisible) => {
    setIsPasswordAsText((ps) => {
      ps[field] = isVisible;
      return { ...ps };
    });
  };

  const onSubmit = async (data) => {
    setMessage({ show: false, text: null, type: null });
    setLoading(true);
    changeUserPassword(userData?.userDetails?.username, userData?.userDetails?.email, data.password, data.newPassword, data.reEnteredNewPassword)
      .then((res) => {
        if (res?.responseHeader?.responseDesc === 'Success') {
          setMessage({ show: true, text: res?.responseHeader?.displayDesc, type: 'success' });
          onLogInSuccess(userData);
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
    <Box component="form" noValidate>
      <Typography component="h1" variant="h5" color={'text.primary'}>
        Change Password
      </Typography>
      <InputField control={hookForm.control} margin="normal" id="username" label="Username" name="username" fullWidth disabled />
      <InputField control={hookForm.control} margin="normal" name="email" label="Email" id="email" fullWidth disabled />
      <InputField
        control={hookForm.control}
        margin="normal"
        name="password"
        label="Temporary Password"
        type={isPasswordAsText.password ? 'text' : 'password'}
        id="password"
        InputProps={{
          autoComplete: 'off',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                aria-label="toggle password visibility"
                onMouseDown={() => setPasswordToVisible('password', true)}
                onMouseUp={() => setPasswordToVisible('password', false)}
                onMouseLeave={() => setPasswordToVisible('password', false)}
                edge="end"
              >
                {isPasswordAsText.password ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <InputField
        control={hookForm.control}
        margin="normal"
        name="newPassword"
        label="New Password"
        type={isPasswordAsText.newPassword ? 'text' : 'password'}
        id="newPassword"
        InputProps={{
          autoComplete: 'off',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                aria-label="toggle password visibility"
                onMouseDown={() => setPasswordToVisible('newPassword', true)}
                onMouseUp={() => setPasswordToVisible('newPassword', false)}
                onMouseLeave={() => setPasswordToVisible('newPassword', false)}
                edge="end"
              >
                {isPasswordAsText.newPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <InputField
        control={hookForm.control}
        margin="normal"
        name="reEnteredNewPassword"
        label="Re Enter New Password"
        type={isPasswordAsText.reEnteredNewPassword ? 'text' : 'password'}
        id="reEnteredNewPassword"
        onKeyDown={(ev) => {
          if (ev.key === 'Enter') hookForm.handleSubmit(onSubmit, onError)();
        }}
        InputProps={{
          autoComplete: 'off',
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                disableRipple
                aria-label="toggle password visibility"
                onMouseDown={() => setPasswordToVisible('reEnteredNewPassword', true)}
                onMouseUp={() => setPasswordToVisible('reEnteredNewPassword', false)}
                onMouseLeave={() => setPasswordToVisible('reEnteredNewPassword', false)}
                edge="end"
              >
                {isPasswordAsText.reEnteredNewPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        fullWidth
      />
      <LoadingButton
        loading={loading}
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
        onClick={() => hookForm.handleSubmit(onSubmit, onError)()}
      >
        Change Password & Sign In
      </LoadingButton>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="body2">Version {process.env.REACT_APP_VERSION}</Typography>
      </Box>
      <AlertMessage sx={{ mt: 3 }} show={message.show} message={message.text} type={message.type} onClose={() => setMessage({ show: false, text: null, type: null })} />
    </Box>
  );
};
