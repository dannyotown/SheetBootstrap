import React from 'react';
import { MDBContainer, MDBGallery, MDBGalleryList } from 'mdbreact';
import DocsLink from './../../components/docsLink';
import SectionContainer from './../../components/sectionContainer';

const TimelinePage = () => {
  return (
    <MDBContainer>
      <DocsLink
        title='Timeline'
        href='https://mdbootstrap.com/plugins/react/timeline/'
      />

      <SectionContainer
        tag='section'
        header='Basic example'
        className='p-5'
      ></SectionContainer>
    </MDBContainer>
  );
};

export default TimelinePage;
