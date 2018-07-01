import React from 'react';

import Table from './Table';

const ResponseList = ({ responses }) => {
  const rows = _.map(responses, ({ code, description }) => {
    return [code, description];
  });
  return (
    <div>
      <div>Responses</div>
      <Table headers={['Code', 'Description']} rows={rows} />
    </div>
  );
};

export default ResponseList;
