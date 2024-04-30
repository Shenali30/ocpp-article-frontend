import { CircularProgress, Fade, Box } from "@mui/material";
import PropTypes from "prop-types";

export const CircularLoader = (props) => {
  const { loading, children } = props;
  return (
    <Box sx={Styles.root}>
      {children}
      <Fade in={loading} unmountOnExit>
        <Box sx={Styles.loader}>
          <CircularProgress color="primary" />
        </Box>
      </Fade>
    </Box>
  );
};

CircularLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
  loading: PropTypes.any,
};

const Styles = {
  root: {
    position: "relative",
    width: "100%",
    // minHeight: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    "&>*": {
      flexGrow: 1,
    },
  },
  loader: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0px",
    left: "0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.7)",
    zIndex: 10,
    borderRadius: 4,
  },
};
