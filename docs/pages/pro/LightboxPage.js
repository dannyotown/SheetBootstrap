import React from 'react';
import { Button } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
require ('./Lightbox.css');

const images = [
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
];

class LightboxPage extends React.Component  {
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    return(
      <div className="container mt-5">
        <Button color="primary" onClick={() => this.setState({ isOpen: true })}>
          Open Lightbox
        </Button>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + '/' + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
};

export default LightboxPage;
