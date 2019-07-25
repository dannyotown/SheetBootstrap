import React from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const RatingPage = () => {
  return (
    <MDBContainer>
      <DocsLink title='Rating' href='https://mdbootstrap.com/docs/react/components/progress-bar/' />

      <SectionContainer header='Basic Example'>
        <MDBRating tooltips={["Very bad", "Poor", "Ok", "Good", "Excellent"]}/>
      </SectionContainer>
    </MDBContainer>
  );
};

export default RatingPage;
