import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const LoadingMessage = ({ isloading, message }) => {
  const [showLoadinMessage, setShowLoadingMessage] = useState(false);

  useEffect(() => {
    let delayLoadingMessage;

    if (isloading) {
      delayLoadingMessage = setTimeout(() => {
        setShowLoadingMessage(true);
      }, 1000);
      console.log('1000 sec');
    }

    // cleartimeout kora laglo kano?
    return () => {
      clearTimeout(delayLoadingMessage);
      setShowLoadingMessage(false);
      console.log('clear timeout');
    };
  }, [isloading]);

  return showLoadinMessage ? <p className="loading">{message}</p> : null;
};

LoadingMessage.propTypes = {
  isloading: PropTypes.bool,
  message: PropTypes.string.isRequired,
};

export default LoadingMessage;
