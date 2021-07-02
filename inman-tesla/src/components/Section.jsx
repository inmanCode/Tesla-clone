import React from 'react';
import '../styles/section.css';
import Fade from 'react-reveal/Fade';

const Section = ({ title, bgImg, description, filterApplication }) => {
  return (
    <div
      className='section-container'
      style={{
        backgroundImage: `url(/images/${bgImg})`,
        filter: filterApplication ? `blur(4px)` : `blur(0px)`,
      }}
    >
      <div className='car-info'>
        <Fade bottom>
          <h1>{title}</h1>
          <p>{description}</p>
        </Fade>
      </div>
      <div className='btns'>
        <Fade left>
          <div className='left-btn'>Costum order</div>
        </Fade>
        <Fade right>
          <div className='right-btn'>Existing inventory</div>
        </Fade>
      </div>
      <img src='/images/down-arrow.svg' alt={title} className='down-arrow' />
    </div>
  );
};

export default Section;
