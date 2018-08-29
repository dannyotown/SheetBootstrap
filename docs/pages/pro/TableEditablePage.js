import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, TableEditable, Fa } from 'mdbreact';

const columns = [
  'Person Name', 'Age', 'Company Name', 'Country', 'City', 'Sort', 'Remove'
];

const data = [
  ['Aurelia Vega', 30, 'Deepends', 'Spain', 'Madrid'],
  ['Guerra Cortez', 45, 'Insectus', 'USA', 'San Francisco'],
  ['Guadalupe House', 26, 'Isotronic', 'Germany', 'Frankfurt am Main'],
  ['Elisa Gallagher', 31, 'Portica', 'United Kingdom', 'London']
];

const TableEditablePage = (props) => {
  return(
    <Container className="mt-3">
      <Row className="align-items-center mt-5">
        <h4 className="grey-text" style={{margin: "0px"}}>
          <strong>Table Editable</strong>
        </h4>
        <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/content/table-editable/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
              Table Editable
            </CardHeader>
            <CardBody>
              <TableEditable data={data} columns={columns} striped bordered />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TableEditablePage;
