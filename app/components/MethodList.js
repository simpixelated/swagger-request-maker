import React from 'react';
import _ from 'lodash';

import MethodBar from '../components/MethodBar';
import ParameterList from '../components/ParameterList';
import Panel from 'react-bootstrap/lib/Panel';
import ResponseList from '../components/ResponseList';

const bsStyle = {
  get: 'info',
  put: 'warning',
  delete: 'danger',
  post: 'success',
};

const MethodList = ({ path, url }) => {
  const methods = _.pick(path, ['get', 'put', 'post', 'delete']);
  return (
    <div>
      {_.map(methods, ({ summary, operationId, responses, ...rest }, method) => (
        <Panel bsStyle={bsStyle[method]} key={operationId}>
          <Panel.Heading>
            <Panel.Toggle>
              <MethodBar path={url} method={method} summary={summary} bsStyle={bsStyle[method]} />
            </Panel.Toggle>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <ParameterList parameters={_.compact(_.concat(path.parameters, rest.parameters))} />
              <ResponseList
                responses={_.map(responses, (response, code) => ({ ...response, code }))}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      ))}
    </div>
  );
};

export default MethodList;
