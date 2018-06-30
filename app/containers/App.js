import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Panel from 'react-bootstrap/lib/Panel';

import Header from '../components/Header';
import Schemes from '../components/Schemes';
import MethodBar from '../components/MethodBar';
import style from './App.css';

const Paths = ({ paths }) => (
  <div>
    {_.map(paths, (path, url) => {
      const methods = _.pick(path, ['get', 'put', 'post', 'delete']);
      return (
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">{url}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            {_.map(methods, ({ summary }, method) => (
              <MethodBar method={method} summary={summary} />
            ))}
          </Panel.Body>
        </Panel>
      );
    })}
  </div>
);

class App extends React.Component {
  render() {
    const { swagger } = this.props;
    return (
      <div className={style.App}>
        <h1>Request Maker</h1>

        <Header host={swagger.host} {...swagger.info} />
        <Schemes schemes={swagger.schemes} />
        <Paths paths={swagger.paths} />

        <div>Debug to show access to swagger JSON:</div>
        <pre className={style.SwaggerDebug}>
          <code>
            {JSON.stringify(swagger, null, 4)}
          </code>
        </pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { swagger: state.swagger };
}

export default connect(mapStateToProps)(App);
