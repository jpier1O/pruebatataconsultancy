import React, { useEffect, useState } from 'react';
import services from '../../../services';
import { includes, isEmpty } from 'lodash';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Dropdown from '../../atoms/dropdown/Dropdown';
import DatePicker from '../../atoms/datepicker/DatePicker';
import RadioSelect from '../../atoms/radioselect/RadioSelect';


import chevrotRightSvg from 'images/chevrot-right.svg';

import './styles.scss';

export type FormAddProps = {
  location?: any,
  history?: any,
};

const gender = [
  { name: 'Masculino', id: 'M' },
  { name: 'Femenino', id: 'F' }
];

const ensure = [
  { name: 'Solo a mí', id: 'only-me' },
  { name: 'A mí y a mi familia', id: 'me-and-family' }
];

const data = [
  { name: 'DNI', id: '1' },
  { name: 'CR', id: '2' },
];


const FormAdd = (props: FormAddProps) => {
  const { location: { search }, history: { push } } = props;
  const [addFamily, setAddFamily] = useState(false);
  const [values, setValues] = useState({
    ensure: 'only-me',
    document: 'dni',
    family: [],
    number_document: '',
    names: '',
    last_name: '',
    second_last_name: '',
    date_of_birth: new Date(),
    gender: '',
  });

  const getData = async () => {
    const { data: { data: { tercero } } } = await services();

    setValues({
      ...values,
      document: tercero.tipoDocumento,
      number_document: tercero.numDocumento,
      names: tercero.nombres,
      last_name: tercero.apellidoPaterno,
      second_last_name: tercero.apellidoMaterno,
      date_of_birth: new Date(tercero.fecNacimiento),
      gender: tercero.sexo
    });
  }

  useEffect(() => {
    if (includes(search, 'fetch=true')) {
      getData();
    }
  }, [search]);

  function buttonIsDisabled() {

    if ('me-and-family' === values.ensure && isEmpty(values.family)) return false;

    if (includes(search, 'fetch=false')) {
      return values.names;
    }

    return values.number_document &&
      values.names &&
      values.last_name &&
      values.second_last_name &&
      values.date_of_birth &&
      values.ensure &&
      values.gender;
  }

  return (
    <div className='form-add-relatives'>
      <div className='form-add-relatives__title'>
        { includes(search, 'fetch=false') ?
          'Ingresa tu nombre' :
          'Datos personales del titular'
        }
      </div>

      { includes(search, 'fetch=false') ?
          <Input
            placeholder='Nombre y apellido'
            value={values.names}
            onChange={event => setValues({ ...values, names: event.target.value })}
          /> :
          <>
            <div className='form-add-relatives__document'>
              <Dropdown
                data={data}
                value={values.document}
                onChange={event => setValues({ ...values, document: event.target.value })}
              />
              <Input
                value={values.number_document}
                maxLength={12}
                placeholder='Nro. de Documento'
                onChange={event => setValues({ ...values, number_document: event.target.value })}
              />
            </div>

            <Input
              placeholder='Nombres'
              value={values.names}
              onChange={event => setValues({ ...values, names: event.target.value })}
            />
            <Input
              value={values.last_name}
              placeholder='Apellido Paterno'
              onChange={event => setValues({ ...values, last_name: event.target.value })}
            />
            <Input
              value={values.second_last_name}
              placeholder='Apellido Materno'
              onChange={event => setValues({ ...values, second_last_name: event.target.value })}
            />
            <DatePicker
              value={values.date_of_birth}
              placeholder='Fecha de nacimiento'
              onChange={date => setValues({ ...values, date_of_birth: date })}
            />

            <RadioSelect
              value={values.gender}
              data={gender}
              title='Género'
              onChange={value => setValues({ ...values, gender: value })}
            />
          </>
      }

      <RadioSelect
        data={ensure}
        value={values.ensure}
        title='¿A quién vamos a asegurar?'
        onChange={value => {
          setAddFamily(value === 'me-and-family');
          setValues({ ...values, ensure: value })
        }}
      />

      <div className='form-add-relatives__footer'>
        <div>
          <Button
            onClick={() => push('/planes')}
            disabled={!buttonIsDisabled()}
          >
            CONTINUAR <img src={chevrotRightSvg} alt='chevrot'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormAdd;
