import React from "react";
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBCardImage,
  MDBCardText
} from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <MDBEdgeHeader color="indigo darken-3" className="sectionPage" />
        <div className="mt-3">
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md="10"
                className="mx-auto float-none white z-depth-1 py-2 px-2"
              >
                <MDBCardBody>
                  <h2 className="h2-responsive mb-4">
                    <strong className="font-weight-bold">
                      <img
                        src="https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-react-small.png"
                        className="pr-2"
                      />
                      Demo App
                    </strong>
                  </h2>
                  <MDBRow />
                  <p>React Bootstrap with Material Design</p>
                  <p className="pb-4">
                    This application shows the actual use of MDB React
                    components in the application.
                  </p>
                  <MDBRow className="d-flex flex-row justify-content-center row">
                    <a
                      className="border nav-link border-light rounded mr-1"
                      href="https://mdbootstrap.com/react/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MDBIcon icon="graduation-cap" className="mr-2" />
                      Official Documentation
                    </a>
                  </MDBRow>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12" className="mt-4">
                <h2 className="text-center my-4 font-weight-bold">
                  Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                  Google has designed a Material Design to make the web more
                  beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                  Twitter has created a Bootstrap to support you in faster and
                  easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                  We present you a framework containing the best features of
                  both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />

                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="css3"
                            brand
                            className="pink-text pr-2"
                          />
                          <strong>CSS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Animations, colours, shadows, skins and many more! Get
                          to know all our css styles in one place.
                        </MDBCardText>
                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="cubes" className="blue-text pr-2" />
                          <strong>COMPONENTS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Ready-to-use components that you can use in your
                          applications. Both basic and extended versions!
                        </MDBCardText>
                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="code" className="green-text pr-2" />
                          <strong>COMPONENTS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Advanced components such as charts, carousels,
                          tooltips and popovers. All in Material Design version.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="bars" className="pink-text pr-2" />
                          <strong>NAVIGATION</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Ready-to-use navigation layouts, navbars, breadcrumbs
                          and much more! More about our navigation components.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="edit" className="blue-text pr-2" />
                          <strong>FORMS</strong>
                        </MDBCardTitle>
                        <MDBCardText className="mb-3">
                          Inputselecst, date and time pickers. Everything in one
                          place is ready to use!
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0 mt-4"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="table" className="green-text pr-2" />
                          <strong>TABLES</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Basic and advanced tables. Responsive, datatables,
                          with sorting, searching and export to csv.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <MDBRow id="categories">
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="window-restore"
                            far
                            className="pink-text pr-2"
                          />
                          <strong>MODALS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Modals used to display advanced messages to the user.
                          Cookies, logging in, registration and much more.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon
                            icon="arrows-alt"
                            className="blue-text pr-2"
                          />
                          <strong>PLUGINS & ADDONS</strong>
                        </MDBCardTitle>
                        <MDBCardText>
                          Google Maps, Social Buttons, Pre-built Contact Forms
                          and Steppers. Find out more about our extended
                          components.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  {/* PRO-START */}
                  <MDBCol md="4">
                    <MDBCard cascade className="mb-5 grey lighten-4">
                      <MDBCardImage
                        cascade
                        className="img-fluid"
                        src="https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg"
                      />
                      <MDBCardBody cascade className="text-center">
                        <MDBCardTitle>
                          <MDBIcon icon="th" className="green-text pr-2" />
                          <strong>SECTIONS</strong>
                        </MDBCardTitle>
                        <MDBCardText className="mb-4">
                          E-commerce, contact, blog and much more sections. All
                          ready to use in seconds.
                        </MDBCardText>

                        <MDBBtn
                          rounded
                          outline
                          color="mdb-color"
                          className="m-0 mt-3"
                          size="sm"
                        >
                          More
                        </MDBBtn>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  {/* PRO-END */}
                </MDBRow>

                {/* 
              
                
              <MDBRow id="categories">
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="bars" className="pink-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">NAVIGATION</h4>
                    <p className="grey-text">
                      Ready-to-use navigation layouts, navbars, breadcrumbs and
                      much more! More about our navigation components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3 text-white"
                      to="/navigation"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="edit" className="blue-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">FORMS</h4>
                    <p className="grey-text">
                      Inputs, autocomplete, selecst, date and time pickers.
                      Everything in one place is ready to use!
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo datken-3 text-white"
                      to="/forms"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="table" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">TABLES</h4>
                    <p className="grey-text">
                      Basic and advanced tables. Responsive, datatables, with
                      sorting, searching and export to csv.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3 text-white"
                      to="tables"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
              </MDBRow>
              <MDBRow id="categories" center>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon
                      icon="window-restore"
                      className="pink-text"
                      size="2x"
                    />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">MODALS</h4>
                    <p className="grey-text">
                      Modals used to display advanced messages to the user.
                      Cookies, logging in, registration and much more.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3 text-white"
                      to="modals"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon
                      icon="arrows-alt"
                      className="blue-text"
                      size="2x"
                    />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">ADDONS</h4>
                    <p className="grey-text">
                      Google Maps, Social Buttons, Pre-built Contact Forms and
                      Steppers. Find out more about our extended components.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3 text-white"
                      to="/addons"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                {/* PRO-START */}

                {/*
                <MDBCol md="4" className="mb-5">
                  <MDBCol size="2" md="2" className="float-left">
                    <MDBIcon icon="th" className="green-text" size="2x" />
                  </MDBCol>
                  <MDBCol size="10" md="8" lg="10" className="float-right">
                    <h4 className="font-weight-bold">SECTIONS</h4>
                    <p className="grey-text">
                      E-commerce, contact, blog and much more sections. All
                      ready to use in seconds.
                    </p>
                    <MDBNavLink
                      tag="button"
                      className="btn btn-sm indigo darken-3 text-white"
                      to="sections"
                    >
                      More
                    </MDBNavLink>
                  </MDBCol>
                </MDBCol>
                {/* PRO-END */}
                {/* </MDBRow>
                 */}
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
