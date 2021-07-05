import React from 'react';
import Footer from '../footer/Footer';

// import illustrationDesktopSvg from 'images/illustration-desktop.svg';

import './styles.scss';

const Sidebar = () => {
  return (
    <div className='container-sidebar'>
      <div className='header'/>
      <Footer/>
      {/* <img src={illustrationDesktopSvg} alt='illustration' /> */}
    </div>
  );
};

export default Sidebar;
