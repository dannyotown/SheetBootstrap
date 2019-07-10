import React from "react";
import { MDBEdgeHeader, MDBContainer, MDBRow, MDBCol, MDBJumbotron, MDBIcon } from "mdbreact";
import MenuLink from "./../components/menuLink";

const TablesNavPage = () => {
  return (
    <>
      <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="8" className="mt-3 mx-auto">
            <MDBJumbotron>
              <h1 className="text-center">
                <MDBIcon icon="table" className="mr-2" style={{ color: "#283593" }} />
                Tables
              </h1>
              <ul className="list-unstyled example-components-list">
                <h6 className="mt-3 grey-text"><strong>FREE</strong> </h6>
                <MenuLink to="/tables/datatable" title="Datatable" />
                <MenuLink to="/tables/datatable-api" title="Datatable - data from API" />
                <MenuLink to="/tables/table" title="Table" />
                <MenuLink to="/tables/table-responsive" title="Table Responsive" />
                <MenuLink to="/tables/table-scroll" title="Table Scroll" />
                <MenuLink to="/tables/table-styles" title="Table Styles" />
                {/* PRO-START */}
                <h6 className="mt-3 grey-text"><strong>PRO</strong> </h6>
                <MenuLink to="/tables/pro/datatable-csv" title="Datatable - export to CSV" />
                <MenuLink to="/tables/pro/tableeditable" title="Table Editable" />
                <MenuLink to="/tables/pro/table-styles" title="Table Styles" />
                {/* PRO-END */}
              </ul>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default TablesNavPage;
