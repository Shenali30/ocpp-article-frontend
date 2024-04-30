import { Alert, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';

export const AlertMessage = ({ show, message, type, ...rest }) => {
  return (
    <>
      {show && (
        <Alert {...rest} severity={type}>{message}</Alert>
      )}
    </>
  );
};
