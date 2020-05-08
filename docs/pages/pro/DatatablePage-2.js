import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBadge, MDBDataTableV5 } from 'mdbreact';
import DocsLink from '../../components/docsLink';
import SectionContainer from '../../components/sectionContainer';
import Result from '../../components/result';
import { testData as data } from '../../../src/components/utils';

class DatatablePage extends Component {
  state = {
    checkbox1: '',
    checkbox2: '',
    checkbox3: '',

    multiple: '',
    data: data
  };

  showLogs1 = e => {
    this.setState({ checkbox1: e });
  };

  showLogs2 = e => {
    this.setState({ checkbox2: e });
  };
  showLogs3 = e => {
    this.setState({ checkbox3: e });
  };

  multiPle = e => {
    this.setState({ multiple: e });
  };

  render() {
    const { data, multiple, checkbox1, checkbox2, checkbox3 } = this.state;

    return (
      <MDBContainer className='mt-3'>
        <DocsLink title='Datatable' href='https://mdbootstrap.com/docs/react/tables/datatables/' />

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With checkboxes' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    checkbox
                    headCheckboxID='id2'
                    bodyCheckboxID='checkboxes2'
                    getValueCheckBox={e => {
                      this.showLogs1(e);
                    }}
                    proCheckboxes
                  />
                </MDBCardBody>
              </MDBCard>
              <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With filled checkboxes' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    checkbox
                    headCheckboxID='id22'
                    bodyCheckboxID='checkboxes22'
                    getValueCheckBox={e => {
                      this.showLogs3(e);
                    }}
                    proCheckboxes
                    filledCheckboxes
                  />
                </MDBCardBody>
              </MDBCard>
              <Result> {checkbox3 && <p>{JSON.stringify(delete checkbox3.checkbox && checkbox3)}</p>}</Result>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With checkboxes on the end' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    checkbox
                    headCheckboxID='id3'
                    bodyCheckboxID='checkboxes3'
                    getValueCheckBox={e => {
                      this.showLogs2(e);
                    }}
                    checkboxFirstColumn
                    proCheckboxes
                    filledCheckboxes
                  />
                </MDBCardBody>
              </MDBCard>
              <Result> {checkbox2 && <p>{JSON.stringify(delete checkbox2.checkbox && checkbox2)}</p>}</Result>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With multiple checkboxes' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    checkbox
                    headCheckboxID='id4'
                    bodyCheckboxID='checkboxes4'
                    getValueCheckboxes={e => {
                      this.multiPle(e);
                    }}
                    getValueAllCheckBoxes={e => {
                      this.multiPle(e);
                    }}
                    multipleCheckboxes
                    proCheckboxes
                    filledCheckboxes
                  />
                </MDBCardBody>
              </MDBCard>
              <Result>
                {multiple && (
                  <p>
                    {JSON.stringify(
                      delete multiple.map(e => {
                        delete e.checkbox;
                        return e;
                      }) && multiple
                    )}
                  </p>
                )}
              </Result>
            </SectionContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default DatatablePage;
