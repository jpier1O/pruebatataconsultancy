import React from 'react';
import { includes } from 'lodash';
import SubHeader from '../../components/organisms/subheader/SubHeader';
import SharedTemplate from '../../components/templates/sharedtemplate/SharedTemplate';
import FormAdd from '../../components/organisms/formadd/FormAdd';

import './styles.scss';

export type InformationProps = {
  location: any
};

const Information = (props: InformationProps) => {
  const { location } = props;

  return (
    <SharedTemplate>
      <div className='add-relatives__body'>
        <SubHeader
          step='1'
          description={includes(location.search, 'fetch=false') ?
            'Cuéntanos un poco sobre ti' :
            'Valida que los datos sean correctos.'
          }
          title={
            `Hola, <span>Luisa</span>`
          }
        />
        <div className='add-relatives__form'>
          <FormAdd {...props} />
        </div>
      </div>
    </SharedTemplate>
  );
};

export default Information;
