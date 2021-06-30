import React from 'react';
import '../styles/section.css';

const Section = ({ title, bgImg, description, filterApplication }) => {
  return (
    <div
      className='section-container'
      style={{
        backgroundImage: `url(/images/${bgImg})`,
        filter: filterApplication ? `blur(4px)` : ``,
      }}
    >
      <div className='car-info'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='btns'>
        <div className='left-btn'>Costum order</div>
        <div className='right-btn'>Existing inventory</div>
      </div>
      <img src='/images/down-arrow.svg' alt={title} className='down-arrow' />
    </div>
  );
};

export default Section;
