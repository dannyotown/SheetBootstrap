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
      <DocsLink
        title='Rating'
        href='https://mdbootstrap.com/docs/react/components/progress-bar/'
      />

      <SectionContainer header='Basic Example' flexCenter>
        <MDBRating data={basic} iconSize='2x' />
      </SectionContainer>

      <SectionContainer header='Empty five stars' flexCenter>
        <MDBRating iconSize='2x' iconRegular />
      </SectionContainer>

      <SectionContainer header='Faces rating' flexCenter>
        <MDBRating
          iconFaces
          fillClassName='black-text'
          iconSize='2x'
          iconRegular
        />
      </SectionContainer>

      <SectionContainer header='Fill color on hover' flexCenter>
        <MDBRating iconSize='2x' fillColors />
      </SectionContainer>

      <SectionContainer header='Custom fill colors on hover' flexCenter>
        <MDBRating
          iconFaces
          iconSize='2x'
          iconRegular
          fillColors={[
            'red-text',
            'orange-text',
            'yellow-text',
            'lime-text',
            'light-green-text'
          ]}
        />
      </SectionContainer>
    </MDBContainer>
  );
};

export default RatingPage;
