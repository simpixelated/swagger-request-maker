import React from 'react';
import _ from 'lodash';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Schemes = ({ schemes }) => (
  <DropdownButton title="Schemes">
    {_.map(schemes, (scheme, key) => <MenuItem eventKey={key}>{scheme}</MenuItem>)}
  </DropdownButton>
);

export default Schemes;
