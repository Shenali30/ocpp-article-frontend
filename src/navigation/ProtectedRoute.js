import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectAuthData } from 'redux/userSlice';
import { UnAuthorized } from './UnAuthorized';

export const ProtectedRoute = (props) => {
  const { element: Element } = props;
  const { isAuthenticated, user } = useSelector(selectAuthData);
  const [hasAccess, setHasAccess] = useState(null);
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setHasAccess(true);
  }, [user, isAuthenticated, path]);

  return hasAccess !== null ? hasAccess ? <Element /> : <UnAuthorized loading={false} /> : <UnAuthorized loading={true} />;
};
