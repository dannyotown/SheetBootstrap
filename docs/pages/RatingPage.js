import React, { useState } from 'react';
import { MDBContainer, MDBRating } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const RatingPage = () => {
  const [basic] = useState([
    {
      tooltip: 'Very Bad'
    },
    {
      tooltip: 'Poor'
    },
    {
      tooltip: 'Ok',
      choosed: true
    },
    {
      tooltip: 'Good'
    },
    {
      tooltip: 'Excellent'
    }
  ]);
  return (
    <MDBContainer>
      <DocsLink title='Rating' href='https://mdbootstrap.com/docs/react/components/progress-bar/' />

      <SectionContainer header='Basic Example' flexCenter>
        <MDBRating icons={basic} iconSize='3x' />
      </SectionContainer>
      {/* 
      <SectionContainer header='Empty five stars' flexCenter>
        <MDBRating tooltips={["Very bad", "Poor", "Ok", "Good", "Excellent"]} iconSize="3x" far />
      </SectionContainer>

      <SectionContainer header='Faces rating' flexCenter>
        <MDBRating tooltips={["Very bad", "Poor", "Ok", "Good", "Excellent"]} iconFaces iconSize="3x" far />
      </SectionContainer> */}
    </MDBContainer>
  );
};

export default RatingPage;
