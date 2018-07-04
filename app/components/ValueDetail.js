import React from 'react';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

const ValueDetail = ({ example, schema }) => {
  if (!example && !schema) {
    return null;
  }
  return (
    <Tabs defaultActiveKey={example ? 1 : 2}>
      {example && (
        <Tab eventKey={1} title="Example Value">
          <pre>{JSON.stringify(example, null, 4)}</pre>
        </Tab>
      )}
      {schema && (
        <Tab eventKey={2} title="Schema">
          <pre>{JSON.stringify(schema, null, 4)}</pre>
        </Tab>
      )}
    </Tabs>
  );
};

export default ValueDetail;
