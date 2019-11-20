import React from 'react';
import { MDBContainer, MDBGallery, MDBGalleryList, MDBBox } from 'mdbreact';
import DocsLink from './../../components/docsLink';
import SectionContainer from './../../components/sectionContainer';

const GalleryWrapper = ({ children }) => {
  return (
    <MDBBox
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '2px'
      }}
      className='my-3'
    >
      {children}
    </MDBBox>
  );
};

const GalleryPage = () => {
  const dataImg = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      cols: 1,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
      cols: 2,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
      cols: 1,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
      cols: 2,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
      cols: 2,
      title: 'image'
    },

    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
      cols: 1,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
      cols: 2,
      title: 'image'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
      cols: 1,
      title: 'image'
    }
  ];

  return (
    <MDBContainer>
      <DocsLink
        title='Gallery'
        href='https://mdbootstrap.com/plugins/react/gallery/'
      />

      <SectionContainer tag='section' header='Basic example' className='p-5'>
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>

      <SectionContainer
        tag='section'
        header='Rounded with shadows'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={4}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='With perfect-scrollbar'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery
            className='scrollbar '
            cols={4}
            style={{ width: '500px', height: '400px' }}
          >
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList
                  key={i}
                  cols={cols || 1}
                  titleClasses='rounded'
                  styles={{ boxShadow: '0 0 3px rgba(0,0,0, .3)' }}
                >
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different spacing'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={4} spacing={0}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
        <hr />
        <GalleryWrapper>
          <MDBGallery cols={4} spacing={30}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
      <SectionContainer
        tag='section'
        header='Different size of rows and columns in gallery list'
        className='p-5'
      >
        <GalleryWrapper>
          <MDBGallery cols={3}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
        <hr />
        <GalleryWrapper>
          <MDBGallery cols={3}>
            {dataImg.map(({ cols, img, title }, i) => {
              return (
                <MDBGalleryList key={i} cols={cols || 1} rows={2}>
                  <img src={img} alt={title} />
                </MDBGalleryList>
              );
            })}
          </MDBGallery>
        </GalleryWrapper>
      </SectionContainer>
    </MDBContainer>
  );
};

export default GalleryPage;
