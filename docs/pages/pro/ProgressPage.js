import React from 'react';
import { Spinner, Container, Row, Fa } from 'mdbreact';


const ProgressPage = (props) => {
  return(
    <Container>
      <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Progress Bar</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/components/progress-bars/"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
      </Row>
      <hr className="mb-5" />
      <div className="container-fluid text-center">
          <div className="col-3">
            <Spinner green small />
          </div>
          <div className="col-4">
            <Spinner yellow />
          </div>
          <div className="col-5">
            <Spinner crazy big multicolor />
          </div>
      </div>
    </Container>
  );
};

export default ProgressPage;
