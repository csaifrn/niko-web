import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { useContext } from 'react';
import React from 'react';
import { useAuthUser, useIsAuthenticated } from 'react-auth-kit';

const Auth = (props: any) => {
  const auth = useAuthUser();
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  if (props.allowedRoles.length === 0) {
    return <Outlet />;
  }

  return auth()?.role.some((role: any) => props.allowedRoles.includes(role)) ? (
    <Outlet />
  ) : isAuthenticated() ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default Auth;
