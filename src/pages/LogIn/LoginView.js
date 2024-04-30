import { yupResolver } from '@hookform/resolvers/yup';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { LoadingButton } from '@mui/lab';
import { IconButton, InputAdornment, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AlertMessage } from 'components/AlertMessage';
import { InputField } from 'components/hook-form-components/InputField';
import { API_BASED_ERROR_MESSAGE, REQUIRED_FIELD_TEXT } from 'constants';
import { DeviceUUID } from 'device-uuid';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { initiateAuth, selectAuthData, setAuthSuccess, updateTokens } from 'redux/userSlice';
import { userLogin } from 'services/userAuth';
import { useWindowSize } from 'utils';
import * as yup from 'yup';
import EcclesiaEase from '../../assets/Logo/ecclesia-ease-transparent.png';
import LoginWallpaper from '../../assets/images/front-page-image.jpg';
import { HOME } from '../../navigation/Routes';
import { ChangePassword } from './ChangePassword';

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
    userId: yup.string().required(REQUIRED_FIELD_TEXT),
    password: yup.string().required(REQUIRED_FIELD_TEXT),
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
            alignItems: 'center',
          }}
        >
          <Typography variant='h3' color={'text.primary'}>Article App</Typography>
          <div style={{ marginTop: '40px', width: '30%' }}>
            {!showChangePassword.show ? (
              <Box component="form" noValidate>
                <Typography component="h1" variant="h5" color={'text.primary'}>
                  Sign in
                </Typography>
                <InputField control={hookForm.control} margin="normal" id="userId" label="Username or Email" name="userId" fullWidth />
                <InputField
                  control={hookForm.control}
                  margin="normal"
                  name="password"
                  label="Password"
                  type={isPasswordAsText ? 'text' : 'password'}
                  id="password"
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter') hookForm.handleSubmit(onSubmit, onError)();
                  }}
                  fullWidth
                  InputProps={{
                    autoComplete: 'off',
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          disableRipple
                          aria-label="toggle password visibility"
                          onMouseLeave={() => setPasswordToVisible(false)}
                          onMouseDown={() => setPasswordToVisible(true)}
                          onMouseUp={() => setPasswordToVisible(false)}
                          edge="end"
                        >
                          {isPasswordAsText ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <LoadingButton
                  loading={loading}
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
                  onClick={() => hookForm.handleSubmit(onSubmit, onError)()}
                >
                  Sign In
                </LoadingButton>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Typography variant="body2">Version {process.env.REACT_APP_VERSION}</Typography>
                </Box>
                <AlertMessage sx={{ mt: 3 }} show={message.show} message={message.text} type={message.type} onClose={() => setMessage({ show: false, text: null, type: null })} />
              </Box>
            ) : (
              <ChangePassword userData={showChangePassword.data} tempPassword={showChangePassword?.tempPassword} onLogInSuccess={onLogInSuccess} />
            )}
          </div>
        </Box>
      </div>

      {/* <img src={LoginWallpaper} height={'100%'} /> */}
    </Stack>
  );
};
