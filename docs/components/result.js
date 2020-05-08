import React from 'react';
import { MDBContainer } from 'mdbreact';
import classNames from 'classnames';
import './components.css';

const Result = ({ children }) => {
  return (
    <div className='result-demo'>
      <div>{children}</div>
    </div>
  );
};

export default Result;
