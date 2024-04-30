import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

/**
 * @description Confirmation Dialog Component.
 * @param {*} props Input props
 * @returns {Node} HTML Template.
 */
export const DialogModalPopUp = (props) => {
  const {
    title,
    content,
    actions,
    customStyle,
    handleClose,
    open,
    size,
    showCloseIcon,
    fullWidth,
  } = props;

  return (
    open && (
      <Dialog
        maxWidth={size}
        fullWidth={fullWidth}
        open={open}
        onClose={handleClose}
        sx={{ ...Styles.confirmationDialog, ...customStyle }}
      >
        {showCloseIcon && (
          <DialogActions>
            <CloseIcon
              id="close-icon"
              fontSize="small"
              className="closeIcon"
              sx={Styles.closeIcon}
              onClick={handleClose}
            />
          </DialogActions>
        )}
        {title && (
          <DialogTitle sx={Styles.titleContainer} className="titleContainer">
            <Typography id={title} fontSize="1.25rem" fontWeight={500}>{title}</Typography>
          </DialogTitle>
        )}
        <DialogContent
          sx={Styles.contentContainer}
          className="contentContainer"
          id={content}
        >
          {content}
        </DialogContent>
        {actions?.length > 0 && (
          <DialogActions
            sx={Styles.actionContainer}
            className="actionContainer"
          >
            {actions?.map((action) => (
              <Button
                key={action?.label}
                variant={action?.variant}
                id={action?.id}
                onClick={action?.handler}
                {...action}
              >
                {action?.label}
              </Button>
            ))}
          </DialogActions>
        )}
      </Dialog>
    )
  );
};

DialogModalPopUp.propTypes = {
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
};
const Styles = {
  confirmationDialog: {
    ".actionContainer": {
      justifyContent: "center",
      button: {
        mx: 1,
      },
    },
    ".titleContainer": {
      color: "text.secondary",
    },
    ".contentContainer": {
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
    pt: 3,
  },
  closeIcon: {
    cursor: "pointer",
  },
};
DialogModalPopUp.defaultProps = {
  title: "",
  content: "",
  customStyle: {},
  open: false,
  actions: [],
  handleClose: () => {},
  size: "sm",
  showCloseIcon: true,
  fullWidth: false,
};
