import React from 'react';

import FormHome from '../../components/organisms/formhome/FormHome';
import HomeTemplate from '../../components/templates/hometemplate/HomeTemplate';

import './styles.scss';

const Home = () => {
  return (
    <HomeTemplate>
      <div className='container-home__body'>
        <FormHome />
      </div>
    </HomeTemplate>
  );
};

export default Home;
