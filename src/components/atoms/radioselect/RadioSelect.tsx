import React from 'react';
import { map } from 'lodash';
import './styles.scss';

export type RadioSelectProps = {
  title?: string,
  data: any,
  value: any,
  onChange: (data: any) => void,
};


const RadioSelect = (props: RadioSelectProps) => {
  const { title, data, onChange, value } = props;

  return (
    <div className='container-radio-group'>
      <span className='container-radio-group__title'>
        { title }
      </span>

      <form>
        { map(data, ({ name, id }) => {
          return (
            <div key={id} className='container-radio-group__item'>
              <input
                onChange={({ target }) => onChange(target.value)}
                type='radio'
                name={title}
                checked={id === value}
                id={id}
                value={id}
              />
              <label className='container-radio-group__label' htmlFor={id}>
                <span />
                { name }
              </label>
            </div>
          )
        }) }
      </form>
    </div>
  );
};

export default RadioSelect;
