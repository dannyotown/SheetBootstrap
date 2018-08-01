import React from 'react';
import { Button, Container, Row, Col, Card, CardBody, Input, Table, TableBody, TableHead  } from 'mdbreact';

const TablePage = (props) => {
  const columns= [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'First',
      field: 'first',
      sort: 'asc'
    },
    {
      label: 'Last',
      field: 'last',
      sort: 'asc'
    },
    {
      label: 'Handle',
      field: 'handle',
      sort: 'asc'
    }
  ];
    
  const rows_regular_btn = [
    {
      'id': 1,
      'first': <Button color="purple" size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="purple" size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="purple" size="sm">Button</Button>
    }
  ];

  const rows_outline_btn = [
    {
      'id': 1,
      'first': <Button color="purple" outline size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="purple" outline size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="purple" outline size="sm">Button</Button>
    }
  ];

  const rows_rounded_btn = [
    {
      'id': 1,
      'first': <Button color="default" rounded size="sm">Button</Button>,
      'last': 'Otto',
      'handle': '@mdo'
    },
    {
      'id': 2,
      'first': 'Jacob',
      'last': <Button color="default" rounded size="sm">Button</Button>,
      'handle': '@fat'
    },
    {
      'id': 3,
      'first': 'Larry',
      'last': 'the Bird',
      'handle': <Button color="default" rounded size="sm">Button</Button>
    }
  ];

  const data_checkboxes = {
    columns: [
      {
        'label': 'Check',
        'field': 'check',
        'sort': 'asc'
      },
      {
        'label': 'Lorem',
        'field': 'lorem',
        'sort': 'asc'
      },
      {
        'label': 'Ipusm',
        'field': 'ipsum',
        'sort': 'asc'
      },
      {
        'label': 'Dolor',
        'field': 'dolor',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'check': <Input label="Check 2" type="checkbox" id="checkbox2" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      },
      {
        'check': <Input label="Check 3" type="checkbox" id="checkbox3" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      },
      {
        'check': <Input label="Check 4" type="checkbox" id="checkbox4" />,
        'lorem': 'Cell1',
        'ipsum': 'Cell2',
        'dolor': 'Cell3'
      }
    ]
  };

  const data_icons = {
    columns: [
      {
        'label': '#',
        'field': 'id',
        'sort': 'asc'
      },
      {
        'label': [<i key="Lorem" className="fa fa-leaf mr-2 blue-text" aria-hidden="true"></i>, 'Lorem'],
        'field': 'lorem',
        'sort': 'asc'
      },
      {
        'label': [<i key="Ipsum" className="fa fa-leaf mr-2 teal-text" aria-hidden="true"></i>, 'Ipsum'],
        'field': 'ipsum',
        'sort': 'asc'
      },
      {
        'label': [<i key="Dolor" className="fa fa-leaf mr-2 indigo-text" aria-hidden="true"></i>, 'Dolor'],
        'field': 'dolor',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'id': 1,  
        'lorem': [<i key="cell1" className="fa fa-diamond mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-download mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-book mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 2,
        'lorem': [<i key="cell1" className="fa fa-graduation-cap mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-gift mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-image mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      },
      {
        'id': 3,
        'lorem': [<i key="cell1" className="fa fa-magic mr-2 grey-text" aria-hidden="true"></i>, 'Cell1'],
        'ipsum': [<i key="cell2" className="fa fa-table mr-2 grey-text" aria-hidden="true"></i>, 'Cell2'],
        'dolor': [<i key="cell3" className="fa fa-edit mr-2 grey-text" aria-hidden="true"></i>, 'Cell3']
      }
    ]
  };

  return(
    <Container className="mt-3">
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with regular buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_regular_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_outline_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      
      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <Table btn>
                <TableHead columns={columns} />
                <TableBody rows={rows_rounded_btn} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with checkboxes</h2>
              <Table btn fixed>
                <TableHead columns={data_checkboxes.columns} />
                <TableBody rows={data_checkboxes.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="py-3">
        <Col md="12">
          <Card>
            <CardBody>
              <h2 className="h2-responsive pb-4">Table with icons</h2>
              <Table btn fixed>
                <TableHead columns={data_icons.columns} />
                <TableBody rows={data_icons.rows} />
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TablePage;