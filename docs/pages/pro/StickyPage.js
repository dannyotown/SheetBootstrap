import React from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import { Sticky, StickyContainer, Container, Card, CardTitle, CardBody, CardText } from 'mdbreact';

let i = 0;

class StickyPage extends React.Component {
  render() {
    return(
      <div style={{ margin: 30 }}>
        <StickyContainer
          style={{
            height: '80vh',
            overflowY: "auto",
            background: "#ddd",
            padding: "0 30px"
          }}
        >
          <div style={{ height: 1600 }}>
            <div style={{ height: 50 }} />
            <Sticky relative>
              {({
                isSticky,
                wasSticky,
                style,
                distanceFromTop,
                distanceFromBottom,
                calculatedHeight
              }) => {
                // console.log({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight });

                return (
                  <Card
                    style={{
                      ...style,
                      overflow: "auto",
                      width: '400px',
                      marginRight: '12px',
                      // marginReft: '45vh'
                    }}
                  >
                    <h3 className="card-header primary-color white-text text-center">this is something new</h3>
                    <CardBody>
                      <CardTitle>I am a Sticky</CardTitle>
                      <CardText>Let me travel with you!</CardText>
                    </CardBody>
                    <div className="card-footer text-muted primary-color white-text text-right">
                        <p className="mb-0">{i++} pixels traveled</p>
                    </div>
                  </Card>
                );
              }}
            </Sticky>

            <h2 className="text-center" style={{ marginTop: 150 }}>
              overflowing container
            </h2>
            <Container style={{height: 500}}></Container>
            <h2 className="text-center" style={{ marginTop: 150 }}>
              hi there!
            </h2>
          </div>
        </StickyContainer>
      </div>
    );
  }
};

export default StickyPage;
