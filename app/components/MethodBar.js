import React from 'react';

import Button from 'react-bootstrap/lib/Button';

const MethodBar = ({ method, summary, path, bsStyle }) => (
  <div>
    <Button bsStyle={bsStyle}>{method}</Button>
    <strong>{path}</strong> {summary}
  </div>
);

export default MethodBar;
