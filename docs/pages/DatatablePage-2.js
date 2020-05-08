import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBBadge, MDBDataTableV5 } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';
import Result from '../components/result';

import { testData as data } from '../../src/components/utils';

class DatatablePage extends Component {
  state = {
    checkbox1: '',
    checkbox2: '',
    multiple: '',
    data: data
  };

  showLogs1 = e => {
    this.setState({ checkbox1: e });
  };

  showLogs2 = e => {
    this.setState({ checkbox2: e });
  };

  multiPle = e => {
    this.setState({ multiple: e });
  };

  render() {
    const { data, multiple, checkbox1, checkbox2 } = this.state;

    const badgesData = {
      columns: [
        {
          label: 'ID',
          field: 'badge'
        },
        ...data.columns
      ],
      rows: [
        ...data.rows.map((row, order) => ({
          ...row,
          badge: (
            <MDBBadge pill color='primary' className='p-1 px-2' key={order} searchvalue={order}>
              ID: {order + 1}
            </MDBBadge>
          )
        }))
      ]
    };

    const widerData = {
      columns: [
        ...data.columns.map(col => {
          col.width = 200;
          return col;
        })
      ],
      rows: [...data.rows]
    };

    return (
      <MDBContainer className='mt-3'>
        <DocsLink title='Datatable' href='https://mdbootstrap.com/docs/react/tables/datatables/' />

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Basic example' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    searchTop
                    searchBottom={false}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Full pagination' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    fullPagination
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With search top and select' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    pagingTop
                    searchTop
                    searchBottom={false}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With search top' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    searchTop
                    searchBottom={false}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Search top with select reverse' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={data}
                    pagingTop
                    searchTop
                    searchBottom={false}
                    barReverse
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Without info' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover info={false} data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Without sorting' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover sortable={false} data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With sorting conponent' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    pagesAmount={4}
                    data={badgesData}
                    sortRows={['badge']}
                  />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Initial order' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover order={['age', 'desc']} data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Without searching' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover searching={false} data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Bars positioning' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 barReverse hover data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With scrollY property' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover scrollY maxHeight='300px' data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='ScrollY dynamic height' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover scrollY maxHeight='50vh' data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With scrollX property' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover scrollX data={widerData} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='With scrollX and scrollY properties' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover scrollX scrollY maxHeight='300xp' data={widerData} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

        <MDBRow className='py-3'>
          <MDBCol md='12'>
            <SectionContainer title='Without pagination' noBorder>
              <MDBCard>
                <MDBCardBody>
                  <MDBDataTableV5 hover paging={false} data={data} />
                </MDBCardBody>
              </MDBCard>
            </SectionContainer>
          </MDBCol>
        </MDBRow>

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
                  />
                </MDBCardBody>
              </MDBCard>
              <Result> {checkbox1 && <p>{JSON.stringify(delete checkbox1.checkbox && checkbox1)}</p>}</Result>
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
