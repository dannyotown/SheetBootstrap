import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBPopover,
  MDBPopoverBody,
  MDBPopoverHeader,
  MDBTooltip,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
    modal14: false,
    modal15: false,
    modal16: false,
    modal17: false,
    modal18: false,
    backdrop: false,
    mailAddress: '@mdo'
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  showFunction = () => {
    alert('This event is fired just before the modal is open.');
  };

  hideFunction = () => {
    alert('This event is fired just before the modal is hidden.');
  };

  hiddenFunction = () => {
    alert('This event is fired after the modal is closed.');
  };

  render() {
    const {
      mailAddress,
      modal1,
      modal10,
      modal11,
      modal12,
      modal13,
      modal14,
      modal15,
      modal16,
      modal17,
      modal18,
      modal2,
      modal3,
      modal4,
      modal5,
      modal6,
      modal7,
      modal8,
      modal9
    } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Modal'
          href='https://mdbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Side modal' flexCenter>
          <MDBBtn color='secondary' onClick={this.toggle(6)}>
            Top right
          </MDBBtn>
          <MDBModal
            isOpen={modal6}
            toggle={this.toggle(6)}
            side
            position='top-right'
          >
            <MDBModalHeader toggle={this.toggle(6)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(6)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='secondary' onClick={this.toggle(7)}>
            Bottom left
          </MDBBtn>
          <MDBModal
            isOpen={modal7}
            toggle={this.toggle(7)}
            side
            position='bottom-left'
          >
            <MDBModalHeader toggle={this.toggle(7)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(7)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Fluid modal' flexCenter>
          <MDBBtn color='info' onClick={this.toggle(8)}>
            Right
          </MDBBtn>
          <MDBModal
            isOpen={modal8}
            toggle={this.toggle(8)}
            fullHeight
            position='right'
          >
            <MDBModalHeader toggle={this.toggle(8)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(8)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          <MDBBtn color='info' onClick={this.toggle(9)}>
            Bottom
          </MDBBtn>
          <MDBModal
            isOpen={modal9}
            toggle={this.toggle(9)}
            fullHeight
            position='bottom'
            animation='bottom'
          >
            <MDBModalHeader toggle={this.toggle(9)}>Modal title</MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(9)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Scrolling long contetn' flexCenter>
          <MDBBtn color='primary' onClick={this.toggle(13)}>
            Modal
          </MDBBtn>
          <MDBModal isOpen={modal13} toggle={this.toggle(13)}>
            <MDBModalHeader toggle={this.toggle(13)}>
              Modal title
            </MDBModalHeader>
            <MDBModalBody>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
              sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={this.toggle(13)}>
                Close
              </MDBBtn>
              <MDBBtn color='primary'>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ModalPage;
