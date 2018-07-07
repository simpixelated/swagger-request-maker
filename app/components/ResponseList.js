import React from 'react';
import ValueDetail from './ValueDetail';
import Table from './Table';

const ResponseList = ({ responses }) => {
  const rows = _.map(responses, ({ code, schema, description, examples }, i) => {
    return [
      code,
      <div key={`description-${i}`}>
        <p>{description}</p>
        <ValueDetail
          example={examples && examples['application/json']}
          schema={schema}
          id={`${code}-value`}
        />
      </div>,
    ];
  });
  return (
    <div>
      <div>Responses</div>
      <Table headers={['Code', 'Description']} rows={rows} />
    </div>
  );
};

export default ResponseList;
