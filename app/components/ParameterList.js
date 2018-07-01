import React from 'react';

import Table from './Table';

const ParametersList = ({ parameters }) => {
  const rows = _.map(parameters, param => {
    return [param.name, 'example'];
  });
  return (
    <div>
      <div>Parameters</div>
      <Table headers={['Name', 'Description']} rows={rows} />
    </div>
  );
};

export default ParametersList;
