import React, { Component } from "react";
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBIcon,   MDBBadge, MDBCol, MDBTable, MDBTableBody, MDBTableHead,
  // PRO-START
  MDBSelect,
  MDBSelectOption,
  MDBSelectOptions,
  MDBSelectInput,
  MDBCollapseHeader,
  MDBCard,
  MDBCollapse,
  MDBCardBody,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBInput
  // PRO-END
} from "mdbreact";
import "./ModalExamplesPage.css";
import DocsLink from "./../components/docsLink";

class ModalExamplesPage extends Component {

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal10: false,
    modal11: false,
    modal12: false,
    // PRO-START
    accordion: 1,
    modal9: false,
    modal13: false
    // PRO-END
  }

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      ...this.state,
      [modalNumber]: !this.state[modalNumber]
    });
  }

  onClick = number => () => {
    let state;
    if (this.state.accordion !== number) {
      state = number;
    } else {
      state = false;
    }

    this.setState({
      ...this.state,
      accordion: state
    });
  };

  render() {
    // PRO-START
    let { accordion } = this.state;
    // PRO-END
    return (
      <MDBContainer>
        <DocsLink
          title="Modal Templates & Examples"
          href="https://mdbootstrap.com/docs/react/modals/basic/"
        />
        <h4 className="mt-4">Modal Cookies</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(1)}>Launch Modal</MDBBtn>
          <MDBModal
            position="top"
            backdrop={false}
            frame
            isOpen={this.state.modal1}
            toggle={this.toggle(1)}
          >
            <MDBModalBody>
              <MDBRow className="justify-content-center align-items-center">
                <p className="pt-3 pr-2">
                  We use cookies to improve your website experience
                </p>
                <MDBBtn color="primary" onClick={this.toggle(1)}>
                  Learn more
                  <MDBIcon icon="book" className="ml-1" />
                </MDBBtn>
                <MDBBtn color="primary" outline onClick={this.toggle(1)}>
                  Ok, thanks
                </MDBBtn>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Coupon</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(2)}>Launch Modal</MDBBtn>
          <MDBModal
            position="bottom"
            backdrop={false}
            frame
            isOpen={this.state.modal2}
            toggle={this.toggle(2)}
          >
            <MDBModalBody>
              <MDBRow className="justify-content-center align-items-center">
                <h3>
                  <MDBBadge color="success">v52gs1</MDBBadge>
                </h3>
                <p className="pt-3 mx-4">
                  We have a gift for you! Use this code to get a{" "}
                  <strong>10% discount</strong>.
                </p>
                <MDBBtn color="success" onClick={this.toggle(2)}>
                  Learn more
                  <MDBIcon icon="book" className="ml-1" />
                </MDBBtn>
                <MDBBtn color="success" outline onClick={this.toggle(2)}>
                  No, thanks
                </MDBBtn>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Discount</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(3)}>Launch Modal</MDBBtn>
          <MDBModal
            size="lg"
            className="modal-notify modal-danger text-white"
            side
            position="bottom-right"
            backdrop={false}
            isOpen={this.state.modal3}
            toggle={this.toggle(3)}
          >
            <MDBModalHeader tag="p" toggle={this.toggle(3)}>
              Discount offer: <strong>10% off</strong>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol
                  size="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <MDBIcon size="4x" icon="gift" className="ml-1" />
                </MDBCol>
                <MDBCol size="9">
                  <p>
                    Sharing is caring. Therefore, from time to time we like to
                    give our visitors small gifts. Today is one of those days.
                  </p>
                  <p>
                    <strong>
                      Copy the following code and use it at the checkout. It's
                      valid for <u>one day</u>.
                    </strong>
                  </p>
                  <h3>
                    <MDBBadge color="danger">v52gs1</MDBBadge>
                  </h3>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="danger" onClick={this.toggle(3)}>
                Get it now
                <MDBIcon icon="diamond" className="ml-1 white-text" />
              </MDBBtn>
              <MDBBtn color="danger" outline onClick={this.toggle(3)}>
                No, thanks
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Related content</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(4)}>Launch Modal</MDBBtn>
          <MDBModal
            className="modal-notify modal-info text-white"
            side
            position="bottom-right"
            backdrop={false}
            isOpen={this.state.modal4}
            toggle={this.toggle(4)}
          >
            <MDBModalHeader tag="p" toggle={this.toggle(4)}>
              Related article
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol size="5">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(55).jpg"
                    className="img-fluid"
                    alt=""
                  />
                </MDBCol>
                <MDBCol size="7">
                  <p>
                    <strong>My travel to paradise</strong>
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit...
                  </p>
                  <MDBBtn
                    color="primary"
                    size="md"
                    outline
                    onClick={this.toggle(4)}
                  >
                    Read more
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Abandoned cart</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(5)}>Launch Modal</MDBBtn>
          <MDBModal
            className="modal-notify modal-info text-white"
            side
            position="top-right"
            backdrop={false}
            isOpen={this.state.modal5}
            toggle={this.toggle(5)}
          >
            <MDBModalHeader tag="p" toggle={this.toggle(5)}>
              Product in the cart
            </MDBModalHeader>
            <MDBModalBody>
              <MDBRow>
                <MDBCol
                  size="3"
                  className="d-flex justify-content-center align-items-center"
                >
                  <MDBIcon size="4x" icon="shopping-cart" className="ml-1" />
                </MDBCol>
                <MDBCol size="9">
                  <p>Do you need more time to make a purchase decision?</p>
                  <p>
                    No pressure, your product will be waiting for you in the
                    cart.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="primary" onClick={this.toggle(5)}>
                Go to cart
              </MDBBtn>
              <MDBBtn color="primary" outline onClick={this.toggle(5)}>
                Cancel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Confirm delete</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(6)}>Launch Modal</MDBBtn>
          <MDBModal
            modalStyle="danger"
            className="text-white"
            size="sm"
            side
            position="top-right"
            backdrop={false}
            isOpen={this.state.modal6}
            toggle={this.toggle(6)}
          >
            <MDBModalHeader
              className="text-center"
              titleClass="w-100"
              tag="p"
              toggle={this.toggle(6)}
            >
              Are you sure?
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBIcon icon="times" size="4x" className="animated rotateIn" />
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="danger" onClick={this.toggle(6)}>
                Yes
              </MDBBtn>
              <MDBBtn color="danger" outline onClick={this.toggle(6)}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
        {/* PRO-START */}
        <h4 className="mt-4">Modal Poll</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(9)}>Launch Modal</MDBBtn>
          <MDBModal
            fullHeight
            position="right"
            backdrop={false}
            className="modal-notify modal-info text-white"
            isOpen={this.state.modal9}
            toggle={this.toggle(9)}
          >
            <MDBModalHeader tag="p" toggle={this.toggle(9)}>
              Feedback request
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBIcon
                icon="file-text-o"
                size="4x"
                className="animated rotateIn mb-3"
              />
              <p className="font-weight-bold mb-3">Your opinion matters</p>
              <p>
                Have some ideas how to improve our product? Give us your
                feedback.
              </p>
              <hr />
              {/* Radio */}
              <p className="mb-3">Your rating</p>
              <div className="text-left">
                <MDBInput label="Very good" type="radio" id="radio1" />
                <MDBInput label="Good" type="radio" id="radio2" />
                <MDBInput label="Mediocre" type="radio" id="radio3" />
                <MDBInput label="Bad" type="radio" id="radio4" />
                <MDBInput label="Very bad" type="radio" id="radio5" />
              </div>
              {/* Textarea */}
              <p className="mb-3">What could we improve?</p>
              <MDBInput label="Your message" type="textarea" id="radio1" />
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="primary" onClick={this.toggle(9)}>
                Send
                <MDBIcon icon="paper-plane" className="ml-1" />
              </MDBBtn>
              <MDBBtn color="primary" outline onClick={this.toggle(9)}>
                Calcel
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
        {/* PRO-END */}
        <h4 className="mt-4">Modal Cart</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(10)}>Launch Modal</MDBBtn>
          <MDBModal isOpen={this.state.modal10} toggle={this.toggle(10)}>
            <MDBModalHeader toggle={this.toggle(10)}>Your cart</MDBModalHeader>
            <MDBModalBody>
              <MDBTable striped>
                <MDBTableHead>
                  <tr>
                    <th />
                    <th>Product name</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  <tr>
                    <td>1</td>
                    <td>Product 1</td>
                    <td>$100</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Product 2</td>
                    <td>1 340$</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Product 3</td>
                    <td>30$</td>
                    <td>
                      <MDBIcon icon="remove" />
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <strong>Total</strong>
                    </td>
                    <td>
                      <strong>1 470$</strong>
                    </td>
                    <td />
                  </tr>
                </MDBTableBody>
              </MDBTable>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-end">
              <MDBBtn color="primary" outline onClick={this.toggle(10)}>
                Close
              </MDBBtn>
              <MDBBtn color="primary" onClick={this.toggle(10)}>
                Checkout
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Push</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(7)}>Launch Modal</MDBBtn>
          <MDBModal
            className="modal-notify modal-info text-white"
            isOpen={this.state.modal7}
            toggle={this.toggle(7)}
          >
            <MDBModalHeader className="text-center" titleClass="w-100" tag="p">
              Be always up to date
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBIcon icon="bell" size="4x" className="animated rotateIn mb-4" />
              <p>
                Do you want to receive the push notification about the newest
                posts?
              </p>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <MDBBtn color="primary" onClick={this.toggle(7)}>
                Yes
              </MDBBtn>
              <MDBBtn color="primary" outline onClick={this.toggle(7)}>
                No
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal YouTube</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(11)}>Launch Modal</MDBBtn>
          <MDBModal
            size="lg"
            isOpen={this.state.modal11}
            toggle={this.toggle(11)}
          >
            <MDBModalBody className="mb-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe
                  className="embed-responsive-item"
                  title="This is a unique title"
                  src="https://www.youtube.com/embed/A3PDXmYoF5U"
                  allowFullScreen
                />
              </div>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <span className="mr-4">Spread the word!</span>
              <MDBBtn tag="a" size="sm" floating social="fb">
                <MDBIcon icon="facebook" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="tw">
                <MDBIcon icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="gplus">
                <MDBIcon icon="google-plus" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="li">
                <MDBIcon icon="linkedin" />
              </MDBBtn>
              <MDBBtn
                color="primary"
                outline
                rounded
                size="md"
                className="ml-4"
                onClick={this.toggle(11)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>

        <h4 className="mt-4">Modal Vimeo</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(12)}>Launch Modal</MDBBtn>
          <MDBModal
            size="lg"
            isOpen={this.state.modal12}
            toggle={this.toggle(12)}
          >
            <MDBModalBody className="mb-0 p-0">
              <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe
                  className="embed-responsive-item"
                  title="embed-responsive-item-1"
                  src="https://player.vimeo.com/video/115098447"
                  allowFullScreen
                />
              </div>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
              <span className="mr-4">Spread the word!</span>
              <MDBBtn tag="a" size="sm" floating social="fb">
                <MDBIcon icon="facebook" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="tw">
                <MDBIcon icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="gplus">
                <MDBIcon icon="google-plus" />
              </MDBBtn>
              <MDBBtn tag="a" size="sm" floating social="li">
                <MDBIcon icon="linkedin" />
              </MDBBtn>
              <MDBBtn
                color="primary"
                outline
                rounded
                size="md"
                className="ml-4"
                onClick={this.toggle(12)}
              >
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBRow>
        {/* PRO-START */}
        <h4 className="mt-4">Modal Product</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(13)}>Launch Modal</MDBBtn>
          <MDBModal
            size="lg"
            isOpen={this.state.modal13}
            toggle={this.toggle(13)}
          >
            <MDBModalBody className="d-flex">
              <MDBCol size="5" lg="5">
                {/* Carrousel */}
                <MDBCarousel
                  activeItem={1}
                  length={3}
                  showControls={true}
                  showIndicators={true}
                  thumbnails
                  className="z-depth-1"
                >
                  <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg"
                        alt="First slide"
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg"
                        alt="Second slide"
                      />
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                      <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg"
                        alt="Third slide"
                      />
                    </MDBCarouselItem>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBCol>
              <MDBCol size="7" lg="7">
                <h2 className="h2-responsive product-name">
                  <strong>Product Name</strong>
                </h2>
                <h4 className="h4-responsive">
                  <span className="green-text">
                    <strong>$49</strong>
                  </span>
                  <span className="grey-text ml-1">
                    <small>
                      <s>$89</s>
                    </small>
                  </span>
                </h4>
                {/* Accordion wrapper */}
                <div className="my-4">
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(1)}>
                      Description
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 1
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 1}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(2)}>
                      Details
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 2
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 2}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                  <MDBCard>
                    <MDBCollapseHeader onClick={this.onClick(3)}>
                      Shipping
                      <i
                        className={
                          "ml-1 " +
                          (accordion === 3
                            ? "fa fa-angle-down rotate-icon"
                            : "fa fa-angle-down")
                        }
                      />
                    </MDBCollapseHeader>
                    <MDBCollapse isOpen={accordion === 3}>
                      <MDBCardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod.
                      </MDBCardBody>
                    </MDBCollapse>
                  </MDBCard>
                </div>
                <MDBRow>
                  <MDBCol size="6">
                    <MDBSelect>
                      <MDBSelectInput />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption>White</MDBSelectOption>
                        <MDBSelectOption>Black</MDBSelectOption>
                        <MDBSelectOption>Pink</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                    <label>MDBSelect color</label>
                  </MDBCol>
                  <MDBCol size="6">
                    <MDBSelect>
                      <MDBSelectInput />
                      <MDBSelectOptions>
                        <MDBSelectOption disabled>Choose your option</MDBSelectOption>
                        <MDBSelectOption>White</MDBSelectOption>
                        <MDBSelectOption>Black</MDBSelectOption>
                        <MDBSelectOption>Pink</MDBSelectOption>
                      </MDBSelectOptions>
                    </MDBSelect>
                    <label>MDBSelect size</label>
                  </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-center">
                  <MDBBtn
                    color="secondary"
                    className="ml-4"
                    onClick={this.toggle(13)}
                  >
                    Close
                  </MDBBtn>
                  <MDBBtn
                    color="primary"
                    className="ml-4"
                    onClick={this.toggle(13)}
                  >
                    Add to Cart
                    <MDBIcon icon="cart-plus" className="ml-2" />
                  </MDBBtn>
                </MDBRow>
              </MDBCol>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>
        <h4 className="mt-4">Modal Social share</h4>
        <MDBRow>
          <MDBBtn onClick={this.toggle(8)}>Launch Modal</MDBBtn>
          <MDBModal
            cascading
            isOpen={this.state.modal8}
            toggle={this.toggle(8)}
          >
            <MDBModalHeader
              className="text-center text-white light-blue darken-3"
              titleClass="w-100"
              tag="h5"
              toggle={this.toggle(8)}
            >
              <MDBIcon icon="users" className="text-white mr-2" />
              Spreed the word!
            </MDBModalHeader>
            <MDBModalBody className="text-center">
              <MDBBtn tag="a" floating social="fb">
                <MDBIcon icon="facebook" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="tw">
                <MDBIcon icon="twitter" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="gplus">
                <MDBIcon icon="google-plus" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="li">
                <MDBIcon icon="linkedin" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="ins">
                <MDBIcon icon="instagram" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="pin">
                <MDBIcon icon="pinterest" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="yt">
                <MDBIcon icon="youtube" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="dribble">
                <MDBIcon icon="dribbble" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="vk">
                <MDBIcon icon="vk" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="so">
                <MDBIcon icon="stack-overflow" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="slack">
                <MDBIcon icon="slack" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="git">
                <MDBIcon icon="github" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="comm">
                <MDBIcon icon="comments" />
              </MDBBtn>
              <MDBBtn tag="a" floating social="email">
                <MDBIcon icon="envelope" />
              </MDBBtn>
            </MDBModalBody>
          </MDBModal>
        </MDBRow>
        {/* PRO-END */}
      </MDBContainer>
    );
  }
}

export default ModalExamplesPage;
