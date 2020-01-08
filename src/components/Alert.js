import React from "react";
import PropTypes from "prop-types";

const Alert = ({ message, theme, hideAlert }) => {
  return (
    <div className={theme}>
      {message}
      <div onClick={hideAlert} className="alert-close">
        &times;
      </div>
    </div>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  theme: PropTypes.string
};

export default Alert;
