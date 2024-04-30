import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const SnackbarMessage = (props) => {
  const { show, message, type } = props;
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    setOpen(show);
  }, [show]);

  return (
    <>
      {open && (
        <Snackbar open={open} onClose={handleClose} autoHideDuration={6000} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </>
  );
};
