import React from 'react';
import { useHistory } from 'react-router-dom';

import backSvg from '../../../assets/iconback.svg';

import './styles.scss';

export type SubHeaderProps = {
  title: string,
  description: string,
  step: string,
};

const SubHeader = (props: SubHeaderProps) => {
  const { title, description, step } = props;

  const history = useHistory();

  return (
    <div className='container-sub-header'>
      <div className='container-sub-header__back'>
        <img
          onClick={() => history.goBack()}
          src={backSvg}
          alt='icon-back'
        />
        <div>
          <span>PASO { step }</span> DE 7
        </div>
      </div>
      <div
        className='container-sub-header__name'
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p>{ description }</p>
    </div>
  );
};

export default SubHeader;
