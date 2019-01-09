import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBIcon
} from "mdbreact";
import DocsLink from "./DocsLink";

const TablePage = props => {
  const columns = [
    {
      label: "#",
      field: "id",
      sort: "asc"
    },
    {
      label: "First",
      field: "first",
      sort: "asc"
    },
    {
      label: "Last",
      field: "last",
      sort: "asc"
    },
    {
      label: "Handle",
      field: "handle",
      sort: "asc"
    }
  ];

  const rows_regular_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="purple" size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const rows_outline_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="purple" outline size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const rows_rounded_btn = [
    {
      id: 1,
      first: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      ),
      last: "Otto",
      handle: "@mdo"
    },
    {
      id: 2,
      first: "Jacob",
      last: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      ),
      handle: "@fat"
    },
    {
      id: 3,
      first: "Larry",
      last: "the Bird",
      handle: (
        <MDBBtn color="default" rounded size="sm">
          Button
        </MDBBtn>
      )
    }
  ];

  const data_checkboxes = {
    columns: [
      {
        label: "Check",
        field: "check",
        sort: "asc"
      },
      {
        label: "Lorem",
        field: "lorem",
        sort: "asc"
      },
      {
        label: "Ipusm",
        field: "ipsum",
        sort: "asc"
      },
      {
        label: "Dolor",
        field: "dolor",
        sort: "asc"
      }
    ],
    rows: [
      {
        check: <MDBInput label="Check 2" type="checkbox" id="checkbox2" />,
        lorem: "Cell1",
        ipsum: "Cell2",
        dolor: "Cell3"
      },
      {
        check: <MDBInput label="Check 3" type="checkbox" id="checkbox3" />,
        lorem: "Cell1",
        ipsum: "Cell2",
        dolor: "Cell3"
      },
      {
        check: <MDBInput label="Check 4" type="checkbox" id="checkbox4" />,
        lorem: "Cell1",
        ipsum: "Cell2",
        dolor: "Cell3"
      }
    ]
  };

  const data_icons = {
    columns: [
      {
        label: "#",
        field: "id",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Lorem"
            icon="leaf"
            className="mr-2 blue-text"
            aria-hidden="true"
          />,
          "Lorem"
        ],
        field: "lorem",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Ipsum"
            icon="leaf"
            className="mr-2 teal-text"
            aria-hidden="true"
          />,
          "Ipsum"
        ],
        field: "ipsum",
        sort: "asc"
      },
      {
        label: [
          <MDBIcon
            key="Dolor"
            icon="leaf"
            className="mr-2 indigo-text"
            aria-hidden="true"
          />,
          "Dolor"
        ],
        field: "dolor",
        sort: "asc"
      }
    ],
    rows: [
      {
        id: 1,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="gem"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="download"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="book"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      },
      {
        id: 2,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="graduation-cap"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="gift"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="image"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      },
      {
        id: 3,
        lorem: [
          <MDBIcon
            key="cell1"
            icon="magic"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell1"
        ],
        ipsum: [
          <MDBIcon
            key="cell2"
            icon="table"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell2"
        ],
        dolor: [
          <MDBIcon
            key="cell3"
            icon="edit"
            className="mr-2 grey-text"
            aria-hidden="true"
          />,
          "Cell3"
        ]
      }
    ]
  };

  const data_panel = {
    columns: [
      {
        label: <MDBInput label=" " type="checkbox" id="checkbox5" />,
        field: "check",
        sort: "asc"
      },
      {
        label: "First Name",
        field: "first",
        sort: "asc"
      },
      {
        label: "Last Name",
        field: "last",
        sort: "asc"
      },
      {
        label: "Username",
        field: "username",
        sort: "asc"
      },
      {
        label: "Username",
        field: "username2",
        sort: "asc"
      },
      {
        label: "Username",
        field: "username3",
        sort: "asc"
      },
      {
        label: "Username",
        field: "username4",
        sort: "asc"
      }
    ],
    rows: [
      {
        check: <MDBInput label=" " type="checkbox" id="checkbox6" />,
        first: "Mark",
        last: "Otto",
        username: "@mdo",
        username2: "Mark",
        username3: "Otto",
        username4: "@mdo"
      },
      {
        check: <MDBInput label=" " type="checkbox" id="checkbox7" />,
        first: "Jacob",
        last: "Thornton",
        username: "@fat",
        username2: "Jacob",
        username3: "Thornton",
        username4: "@fat"
      },
      {
        check: <MDBInput label=" " type="checkbox" id="checkbox8" />,
        first: "Larry",
        last: "the Bird",
        username: "@twitter",
        username2: "Larry",
        username3: "the Bird",
        username4: "@twitter"
      },
      {
        check: <MDBInput label=" " type="checkbox" id="checkbox9" />,
        first: "Paul",
        last: "Topolski",
        username: "@P_Topolski",
        username2: "Paul",
        username3: "Topolski",
        username4: "@P_Topolski"
      },
      {
        check: <MDBInput label=" " type="checkbox" id="checkbox10" />,
        first: "Larry",
        last: "the Bird",
        username: "@twitter",
        username2: "Larry",
        username3: "the Bird",
        username4: "@twitter"
      }
    ]
  };

  return (
    <MDBContainer className="mt-3">
      <DocsLink
        title="Tables with additional elements"
        href="https://mdbootstrap.com/docs/react/tables/additional/"
      />
      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with regular buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_regular_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_outline_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with outline buttons</h2>
              <MDBTable btn>
                <MDBTableHead columns={columns} />
                <MDBTableBody rows={rows_rounded_btn} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with checkboxes</h2>
              <MDBTable btn fixed>
                <MDBTableHead columns={data_checkboxes.columns} />
                <MDBTableBody rows={data_checkboxes.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard>
            <MDBCardBody>
              <h2 className="h2-responsive pb-4">Table with icons</h2>
              <MDBTable btn fixed>
                <MDBTableHead columns={data_icons.columns} />
                <MDBTableBody rows={data_icons.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow className="py-3">
        <MDBCol md="12">
          <MDBCard narrow>
            <MDBCardHeader className="view view-cascade gradient-card-header blue-gradient d-flex justify-content-between align-items-center py-2 mx-4 mb-3">
              <div>
                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  color="white"
                  className="px-2"
                >
                  <MDBIcon icon="th-large"/>
                </MDBBtn>
                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  color="white"
                  className="px-2"
                >
                  <MDBIcon icon="columns" />
                </MDBBtn>
              </div>
              <a href="#!" className="white-text mx-3">
                Table name
              </a>
              <div>
                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  color="white"
                  className="px-2"
                >
                  <MDBIcon icon="pencil-alt" />
                </MDBBtn>
                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  color="white"
                  className="px-2"
                >
                  <MDBIcon icon="times" />
                </MDBBtn>
                <MDBBtn
                  outline
                  rounded
                  size="sm"
                  color="white"
                  className="px-2"
                >
                  <MDBIcon icon="info-circle" />
                </MDBBtn>
              </div>
            </MDBCardHeader>
            <MDBCardBody cascade>
              <MDBTable btn fixed>
                <MDBTableHead columns={data_panel.columns} />
                <MDBTableBody rows={data_panel.rows} />
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default TablePage;
