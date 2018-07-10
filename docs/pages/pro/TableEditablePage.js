import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, DataTable } from 'mdbreact';

const data = [];
for (let i = 1; i <= 5; i++) {
  data.push({
    'id': i,
    'name': 'Item name ' + i,
    'price': Math.round(Math.random()*10000)/100,
    'remove': '<span className="table-remove"><button type="button" className="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>'
  })
}

const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}, {
  dataField: 'remove',
  text: 'Remove'
}];

const config = {
  prePageText: 'Previous',
  nextPageText: 'Next',
  firstPageText: 'First',
  lastPageText: 'Last',
  alwaysShowAllBtns: true,
  showTotal: false,
  hideSizePerPage: true,
};

const TableSort = (props) => {
  return(
    <Container className="mt-3">
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
              Table Editable
            </CardHeader>
            <CardBody>
              <DataTable keyField='id' data={data} columns={columns} config={config} striped editable pagination />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TableSort;