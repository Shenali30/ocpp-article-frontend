import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { CircularLoader } from './CircularLoader';

/**
 * @description Confirmation Dialog Component.
 * @param {*} props Input props
 * @returns {Node} HTML Template.
 */
export const DialogModalPopUpV2 = (props) => {
  const { title, content, actions, customStyle, handleClose, open, size, showCloseIcon, fullWidth, alertMessage, isLoading } = props;

  return (
    open && (
      <Dialog maxWidth={size} fullWidth={fullWidth} open={open} onClose={handleClose} sx={{ ...Styles.confirmationDialog, ...customStyle }}>
        <DialogContent sx={Styles.contentContainer} className="contentContainer" id={content}>
          <CircularLoader loading={isLoading}>
            <Stack direction="column" spacing={3}>
              {title && (
                <Typography variant="h5" textAlign="center">
                  {title}
                </Typography>
              )}
              <Box component={'div'}>{content}</Box>
              {alertMessage.show && (
                <Typography textAlign={'center'}>
                  <Alert severity={alertMessage.type}>{alertMessage.text}</Alert>
                </Typography>
              )}
              {actions?.length > 0 && (
                <Stack spacing={1} direction="row" justifyContent="center">
                  {actions?.map((action) => (
                    <Button key={action?.label} variant={action?.variant} id={action?.id} onClick={action?.handler} {...action}>
                      {action?.label}
                    </Button>
                  ))}
                </Stack>
              )}
            </Stack>
          </CircularLoader>
        </DialogContent>
      </Dialog>
    )
  );
};

DialogModalPopUpV2.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  customStyle: PropTypes.shape({}),
  open: PropTypes.bool,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      variant: PropTypes.string,
      handler: PropTypes.func,
    })
  ),
  handleClose: PropTypes.func,
  size: PropTypes.string,
  showCloseIcon: PropTypes.bool,
  fullWidth: PropTypes.bool,
  alertMessage: PropTypes.shape({}),
  isLoading: PropTypes.bool,
};
const Styles = {
  confirmationDialog: {
    '.actionContainer': {
      justifyContent: 'center',
      button: {
        mx: 1,
      },
    },
    '.titleContainer': {
      color: 'text.secondary',
    },
    '.contentContainer': {
      lineHeight: 1.5,
    },
    zIndex: 12000,
  },
  actionContainer: {
    pb: 6,
    px: 6,
  },
  titleContainer: {
    px: 6,
  },
  contentContainer: {
    px: 6,
    pb: 5,
    pt: 6,
  },
  closeIcon: {
    cursor: 'pointer',
  },
};
DialogModalPopUpV2.defaultProps = {
  title: '',
  content: '',
  customStyle: {},
  open: false,
  actions: [],
  handleClose: () => {},
  size: 'sm',
  showCloseIcon: true,
  fullWidth: false,
  alertMessage: {},
  isLoading: false,
};
