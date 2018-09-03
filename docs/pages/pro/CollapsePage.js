import React, { Component } from 'react';
import { Container, Collapse, Card, CardBody, CollapseHeader, Row, Fa } from 'mdbreact';

class CollapsePage extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.state = {
      collapseID: ''
    };
  }

  toggleCollapse = collapseID => () => 
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));

  render() {
    const {accordion} = this.state;
    return (
      <Container>
        <Row className="align-items-center mt-5">
          <h4 className="grey-text" style={{margin: "0px"}}>
            <strong>Accordion PRO</strong>
          </h4>
          <a className="border grey-text px-2 border-light rounded ml-2" target="_blank"  href="https://mdbootstrap.com/react/advanced/collapse/#accordion"><Fa icon="graduation-cap" className="mr-2"/>Docs</a>
        </Row>
        <hr className="mb-5" />
        <Container className="accordion mt-5">
          <Card className="mt-3">
            <CollapseHeader onClick={this.toggleCollapse('collapse1')}>Collapsible Group Item #1
              <i className={accordion === 1 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
            <Collapse id="collapse1" isOpen={this.state.collapseID}>
              <CardBody>
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
          </Card>

          <Card>
            <CollapseHeader onClick={this.toggleCollapse('collapse2')}>Collapsible Group Item #2
              <i className={accordion === 2 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
            <Collapse id="collapse2" isOpen={this.state.collapseID}>
              <CardBody>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
              </CardBody>
            </Collapse>
          </Card>

          <Card>
            <CollapseHeader onClick={this.toggleCollapse('collapse3')}>Collapsible Group Item #3
              <i className={accordion === 3 ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-down'}></i>
            </CollapseHeader>
              <Collapse id="collapse3" isOpen={this.state.collapseID}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,
                  non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                  moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch
                  et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                  Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                  synth nesciunt you probably haven&apos;t heard of them accusamus labore sustainable VHS.
                </CardBody>
              </Collapse>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default CollapsePage;
