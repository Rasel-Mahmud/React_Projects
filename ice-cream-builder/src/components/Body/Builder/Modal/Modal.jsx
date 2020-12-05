import React from 'react';
import classes from './Modal.module.css';

function Modal({ Children }) {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modalBody}>{Children}</div>
    </div>
  );
}

export default Modal;
