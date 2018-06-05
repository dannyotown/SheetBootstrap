import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, ListGroup, ListGroupItem } from 'mdbreact';
import classNames from 'classnames';


function PanelPage() {

  const panelStyle={width: '22rem'}
  return(
    <section className="m-5">
      <h2 className="mt-5"><strong>Basic example</strong></h2>
      <Card className="card-body" style={panelStyle}>
        <CardTitle>Panel Title</CardTitle>
        <CardText>
          Some quick example text to build on the panel title and make up the bulk of the panel's content.
        </CardText>
        <div className="flex-row">
          <a>Card link</a>
          <a style={{marginLeft: '1.25rem'}}>Another link</a>
        </div>
      </Card>

      <h2 className="mt-5"><strong>Body</strong></h2>

      <Card>
        <CardBody>
          This is some text within a panel body.
        </CardBody>
      </Card>

      <h2 className="mt-5"><strong>Titles, text and links</strong></h2>

      <Card style={panelStyle}>
        <CardBody>
          <CardTitle>Panel title</CardTitle>
          <CardTitle tag="h6" sub className="mb-2 text-muted">Panel title</CardTitle>    
          <CardText> Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
          <a href="#" className="card-link">Panel link</a>
          <a href="#" className="card-link">Another link</a>
        </CardBody>
      </Card>

      <h2 className="mt-5"><strong>List groups</strong></h2>

      <Card style={panelStyle}>
        <ListGroup>
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </Card>

      <h2 className="mt-5"><strong>Titles, text and links</strong></h2>

<Card style={panelStyle}>
  <CardBody>
    <CardTitle>Panel title</CardTitle>
    <CardTitle tag="h6" sub className="mb-2 text-muted">Panel title</CardTitle>    
    <CardText> Some quick example text to build on the panel title and make up the bulk of the panel's content. </CardText>
    <a href="#" className="card-link">Panel link</a>
    <a href="#" className="card-link">Another link</a>
  </CardBody>
</Card>
      
    </section>
  );

};

export default PanelPage;
