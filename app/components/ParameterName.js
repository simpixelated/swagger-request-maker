import React from 'react';

const ParameterName = ({ name, $in, type, required }) => (
  <ul className="list-unstyled">
    <li>
      <strong>{name}</strong>
      &nbsp;{required && <small className="text-danger">* required</small>}
    </li>
    <li className="text-muted">{type}</li>
    <li>({$in})</li>
  </ul>
);

export default ParameterName;
