import React from 'react';
import { MDBContainer, MDBGallery, MDBGalleryList } from 'mdbreact';
import DocsLink from './../../components/docsLink';
import SectionContainer from './../../components/sectionContainer';

const TimelinePage = () => {
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
    <MDBContainer>
      <DocsLink
        title='Gallery'
        href='https://mdbootstrap.com/plugins/react/gallery/'
      />

      <SectionContainer tag='section' header='Basic example' className='p-5'>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={4}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList key={i} cols={images.cols || 1}>
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
      </SectionContainer>

      <SectionContainer
        tag='section'
        header='Rounded with shadows'
        className='p-5'
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={4}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={images.cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
      </SectionContainer>
      <SectionContainer tag='section' header='With scrollbar' className='p-5'>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={4} style={{ width: '500px', height: '400px' }}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={images.cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different spacing'
        className='p-5'
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={4} spacing={0}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList key={i} cols={images.cols || 1}>
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
        <hr />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={4} spacing={30}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList key={i} cols={images.cols || 1}>
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different size of rows in gallery list'
        className='p-5'
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={3}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList key={i} cols={images.cols || 1}>
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
        <hr />
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden'
          }}
          className='my-3'
        >
          <MDBGallery cols={3}>
            {dataImg.map((images, i) => {
              return (
                <MDBGalleryList key={i} cols={images.cols || 1} rows={2}>
                  <img src={images.img} alt={images.title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </div>
      </SectionContainer>
    </MDBContainer>
  );
};

export default TimelinePage;
