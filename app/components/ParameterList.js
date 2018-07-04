import React from 'react';
import Table from './Table';
import ValueDetail from './ValueDetail';
import ParameterName from './ParameterName';

const ParametersList = ({ parameters }) => {
  const rows = _.map(parameters, ({ description, ...rest }, i) => {
    let valueDetail;
    if (rest.schema) {
      const { example, ...schema } = rest.schema;
      valueDetail = <ValueDetail example={example} schema={schema} />;
    }
    return [
      <ParameterName
        key={`name-${i}`}
        name={rest.name}
        $in={rest.in}
        type={rest.type}
        required={rest.required}
      />,
      <div key={`description-${i}`}>
        <span>{description}</span>
        {valueDetail}
      </div>,
    ];
  });
  return (
    <div>
      <div>Parameters</div>
      <Table headers={['Name', 'Description']} rows={rows} />
    </div>
  );
};

export default ParametersList;
