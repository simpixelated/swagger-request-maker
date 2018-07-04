import React from 'react';
import Badge from 'react-bootstrap/lib/Badge';

const Header = ({ title, version, host, description }) => (
  <div>
    <h3>
      {title}
      <Badge>{version}</Badge>
    </h3>
    <p>[ Base URL: {host}]</p>
    <p>{description}</p>
  </div>
);

export default Header;
