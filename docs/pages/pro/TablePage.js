import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody, DataTable } from 'mdbreact';

const data = [];
for (let i = 1; i <= 50; i++) {
  data.push({
    'id': i,
    'name': 'Item name ' + i,
    'price': Math.round(Math.random()*10000)/100
  })
}

const columns = [{
  dataField: 'id',
  text: 'Product ID',
  sort: true
}, {
  dataField: 'name',
  text: 'Product Name',
  sort: true,
  search: true
}, {
  dataField: 'price',
  text: 'Product Price',
  sort: true
}];

const config = {
  prePageText: 'Previous',
  nextPageText: 'Next',
  firstPageText: 'First',
  lastPageText: 'Last',
  alwaysShowAllBtns: true,
  showTotal: true,
  hideSizePerPage: false,
};

const TablePagePro = (props) => {
  return(
    <Container className="mt-3">
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardHeader tag="h3" className="text-center font-weight-bold text-uppercase py-4">
              Table Sort
            </CardHeader>
            <CardBody>
              <DataTable keyField='id' data={data} columns={columns} config={config} striped search />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Container>
  );
};

export default TablePagePro;