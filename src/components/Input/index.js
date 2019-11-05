import React, { useState, useMemo } from 'react';
import './styles.scss';

const getTitleClassName = (isFocus, hasText) => {
  if (hasText || (!hasText && isFocus === 'true')) return 'titleZoomIn';
  return isFocus === 'false' ? 'titleZoomOut' : '';
};

const Input = ({
  type = 'text',
  title,
  value,
  required = false,
  onChange,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState('');
  const [innerValue, setInnerValue] = useState(value);
  const hasText = !!innerValue;

  const titleClassName = useMemo(() => getTitleClassName(isFocus, hasText), [
    isFocus,
    hasText
  ]);

  const handleChange = ({ target: { value } }) => {
    setInnerValue(value);

    if (typeof onChange === 'function') {
      onChange(value);
    }
  };

  if (type === 'text') {
    return (
      <div className='inputContainer height56'>
        <span className={titleClassName + ' inputTitle'}>
          {title} {required && <span className='asterisk'>&#42;</span>}
        </span>
        <input
          {...props}
          value={innerValue}
          className='styledInput'
          onFocus={() => setIsFocus('true')}
          onBlur={() => setIsFocus('false')}
          onChange={handleChange}
        />
      </div>
    );
  }

  if (type === 'textarea') {
    return (
      <div className='inputContainer height120'>
        <span className={titleClassName + ' inputTitle'}>
          {title} {required && <span className='asterisk'>&#42;</span>}
        </span>
        <textarea
          {...props}
          value={innerValue}
          className='styledTextArea'
          onFocus={() => setIsFocus('true')}
          onBlur={() => setIsFocus('false')}
          onChange={handleChange}
        />
      </div>
    );
  }

  return null;
};

export default Input;
