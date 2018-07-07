import React from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Schemes from '../components/Schemes';
import PathList from '../components/PathList';
import style from './App.css';

class App extends React.Component {
  render() {
    const { swagger } = this.props;
    return (
      <div className={style.App}>
        <h1>Request Maker</h1>

        <Header host={swagger.host} {...swagger.info} />
        <Schemes schemes={swagger.schemes} />
        <PathList paths={swagger.paths} />

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
