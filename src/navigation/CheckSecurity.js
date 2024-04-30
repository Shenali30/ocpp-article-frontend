import { LinearProgress } from '@mui/material';
import { LoadCommonData } from 'components/LoadCommonData';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectAuthData, setAuthFailAndLogout, setAuthSuccess } from 'redux/userSlice';
import { checkAuthRefreshToken } from 'services/userAuth';
import { getRefreshToken } from 'utils';
import HeaderWithDrawer from '../components/HeaderWithDrawer';
import Login from '../pages/LogIn';
import { ROOT } from './Routes';

export const CheckSecurity = () => {
  const location = useLocation();
  const { isAuthenticated, user, isLoading } = useSelector(selectAuthData);
  const path = location.pathname;
  const isMainRoot = path === ROOT;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refreshToken = getRefreshToken();

  useEffect(() => {
    if (refreshToken) {
      checkAuthRefreshToken(refreshToken?.token, refreshToken?.username)
        .then((res) => {
          console.log('token response => ', res);
          if (res) {
            const user = { ...res.userDetails, permissions: res.permissions };
            const tokens = res.tokenDto;
            dispatch(setAuthSuccess({ user, tokens }));
          } else {
            dispatch(setAuthFailAndLogout());
            navigate('/');
          }
        })
        .catch((err) => {
          console.log('error validate token', err);
        })
        .finally(() => {});
    } else {
      dispatch(setAuthFailAndLogout());
      navigate('/');
    }
  }, []);

  return (
    <>
      {isMainRoot ? (
        <Login />
      ) : (
        <>
          {isAuthenticated ? (
            <>
              <LoadCommonData />
              <HeaderWithDrawer />
            </>
          ) : (
            <LinearProgress />
          )}
        </>
      )}
    </>
  );
};
