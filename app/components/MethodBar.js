import React from 'react';

import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';

const buttonStyles = {
  get: 'info',
  put: 'warning',
  delete: 'danger',
  post: 'success',
};

const MethodBar = ({ method, summary }) => (
  <Alert bsStyle={buttonStyles[method]}>
    <Button bsStyle={buttonStyles[method]}>{method}</Button>
    <span>[?]</span>
    <span>{summary}</span>
  </Alert>
);

export default MethodBar;
