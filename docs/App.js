import React, { Component } from 'react';
import { MDBGallery } from 'mdbreact';
import MDBGalleryList from '../src/components/Gallery/GalleryList/GalleryList';

class App extends Component {
  render() {
    const dataImg = [
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
        title: 'Image',
        author: 'author',
        cols: 1
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
        title: 'Image',
        author: 'author',
        cols: 2
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
        title: 'Image',
        author: 'author',
        cols: 1
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
        title: 'Image',
        author: 'author',
        cols: 2
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
        title: 'Image',
        author: 'author',
        cols: 2
      },

      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
        title: 'Image',
        author: 'author',
        cols: 1
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
        title: 'Image',
        author: 'author',
        cols: 2
      },
      {
        img:
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
        title: 'Image',
        author: 'author',
        cols: 1
      }
    ];
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden'
        }}
      >
        <MDBGallery cols={4} style={{ width: '500px', height: '450px' }}>
          {dataImg.map((images, i) => {
            return (
              <MDBGalleryList key={i} cols={images.cols || 1}>
                <img src={images.img} alt={images.title} />
              </MDBGalleryList>
            );
          })}
        </MDBGallery>
      </div>
    );
  }
}

export default App;
