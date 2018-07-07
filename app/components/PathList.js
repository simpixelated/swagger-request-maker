import React from 'react';
import _ from 'lodash';
import Panel from 'react-bootstrap/lib/Panel';
import MethodList from './MethodList';

const PathList = ({ paths }) => (
  <div>
    {_.map(paths, (path, url) => (
      <Panel key={url}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">{url}</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <MethodList path={path} url={url} />
        </Panel.Body>
      </Panel>
    ))}
  </div>
);

export default PathList;
