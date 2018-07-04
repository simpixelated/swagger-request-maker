import React from 'react';
import Button from 'react-bootstrap/lib/Button';

const styles = {
  marginRight: 10,
};

const MethodBar = ({ method, summary, path, bsStyle }) => (
  <div>
    <Button bsStyle={bsStyle} style={styles}>
      <span className="text-uppercase">{method}</span>
    </Button>
    <strong>{path}</strong> {summary}
  </div>
);

export default MethodBar;
