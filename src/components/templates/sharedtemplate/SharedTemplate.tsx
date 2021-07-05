import React, { ReactNode } from 'react';

import Sidebar from '../../organisms/sidebar/Sidebar';

import './styles.scss';

export type SharedTemplateProps = {
  children: ReactNode,
};

const SharedTemplate = (props: SharedTemplateProps) => {
  const { children } = props;

  return (
    <div className='container-sidebar-shared'>
      <div className='container-sidebar-shared__sidebar'>
        <Sidebar />
      </div>
      <div className='container-sidebar-shared__body'>
        { children }
      </div>
    </div>
  );
};

export default SharedTemplate;
