import React, { ReactNode, useState } from 'react';
import cn from 'classnames';
import { map } from 'lodash';

import rMobileSvg from '../../../assets/gl_mobile.png';
import rShieldSvg from '../../../assets/gl_shield.png';

// import illustrationSvg from '../../../assets/Base.svg';
import illustrationDesktopSvg from '../../../assets/Illustration_center.png';

// import safeSvg from 'images/ic_shield.svg';
// import phoneSvg from 'images/ic_mobile.svg';
// import moneySvg from 'images/gl_money.svg';
// import clinicSvg from 'images/gl_clinic.svg';

import prevSvg from '../../../assets/back.svg';
import nextSvg from '../../../assets/next.svg';

import './styles.scss';

const data = [
  { image: rShieldSvg, content: 'Cómpralo de manera fácil y rápida' },
  { image: rMobileSvg, content: 'Cotiza y compra tu seguro 100% digital' },
  { image: rShieldSvg, content: 'Hasta S/.12 millones de cobertura anual' },
  { image: rMobileSvg, content: 'Más de 300 clínicas en todo el Perú' }
];

export type HomeTemplateProps = {
  children: ReactNode,
};

const HomeTemplate = (props: HomeTemplateProps) => {
  const { children } = props;
  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <div className='container-sidebar-home'>
      <div className='container-sidebar-home__sidebar'>
        <div className='header'/>
        {/* <img
          className='container-sidebar-home__bg-mobile'
          src={rMobileSvg}
          alt='r-mobile'
        /> */}
        {/* <img
          className='container-sidebar-home__person-mobile'
          src={illustrationSvg}
          alt='person'
        /> */}
        <img
          className='container-sidebar-home__person-desktop'
          src={illustrationDesktopSvg}
          alt='person'
        />

        <div className='container-sidebar-home__content'>
          <div className='container-sidebar-home__content-title'>
            Seguro de <br /> <span>Salud</span>
          </div>

          <div className='container-sidebar-home__content-list'>
            { map(data, ({ image, content }, index) => {
              return (
                <div key={index}>
                  <img src={image} alt='content' />
                  <span>{ content }</span>
                </div>
              )
            }) }
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <span>
              © 2021 :y Company
            </span>
          </div>

          <div className='container-sidebar-home__content-body'>
            <img
              src={data[optionSelected].image}
              alt='safe'
            />
            <p>
              { data[optionSelected].content }
            </p>
            
          </div>

          <div className='container-sidebar-home__content-footer'>
            <img
              src={optionSelected >= 1 ? nextSvg : prevSvg}
              alt='prev'
              className={cn({ rotateLeft: optionSelected >= 1 })}
              onClick={() => {
                if (optionSelected === 0) return;

                setOptionSelected(optionSelected - 1)
              }}
            />
            <div>
              <span>0{ optionSelected + 1 }</span>
              <span>/</span>
              <span>04</span>
            </div>
            <img
              src={optionSelected === 3 ? prevSvg : nextSvg}
              alt='next'
              className={cn({ rotateRight: optionSelected === 3 })}
              onClick={() => {
                if (optionSelected === 3) return;

                setOptionSelected(optionSelected + 1)
              }}
            />
          </div>
        </div>
      </div>
      <div className='container-sidebar-home__body'>
        { children }
      </div>
      <br/>
    </div>
  );
};

export default HomeTemplate;
