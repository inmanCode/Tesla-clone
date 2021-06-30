import React from 'react';
//components
import Section from './Section';
const Home = ({ filterApplication }) => {
  return (
    <div>
      <Section
        title='Model S'
        description='Order online for touchless delivery'
        bgImg='model-s.jpg'
        filterApplication={filterApplication}
      />

      <Section
        title='Model X'
        description='Order online for touchless delivery'
        bgImg='model-x.jpg'
        filterApplication={filterApplication}
      />
      <Section
        title='Model 3'
        description='Order online for touchless delivery'
        bgImg='model-3.jpg'
        filterApplication={filterApplication}
      />
      <Section
        title='Model Y'
        description='Order online for touchless delivery'
        bgImg='model-y.jpg'
        filterApplication={filterApplication}
      />
    </div>
  );
};

export default Home;
