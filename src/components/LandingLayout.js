import React from 'react';
import { node } from 'prop-types';

import landing from '../assets/images/landing.png';

function LandingLayout({ children }) {
  return (
    <div className="Landing">
      {children}
      <div className="landing-img-container">
        <img src={landing} alt="Landing" />
      </div>
    </div>
  );
}

LandingLayout.propTypes = {
  children: node.isRequired
}

export default LandingLayout;
