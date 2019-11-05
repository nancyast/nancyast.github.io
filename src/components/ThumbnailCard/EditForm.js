import React, { useState } from 'react';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Input from 'components/Input';

const EditForm = ({ onSubmit, item, ...props }) => {
  const [formItems, setFormItems] = useState({});

  const handleSubmit = () => {
    const isValidated = true;

    if (isValidated && typeof onSubmit === 'function') {
      onSubmit({ ...item, ...formItems });
    }
  };

  const onChangeKey = key => value => {
    setFormItems(state => ({ ...state, [key]: value }));
  };

  return (
    <div className='editForm'>
      <div className='row'>
        <Input
          title='Title'
          value={item.title}
          onChange={onChangeKey('title')}
        />
      </div>
      <div className='row'>
        <Input
          type='textarea'
          title='Description'
          value={item.description}
          onChange={onChangeKey('description')}
        />
      </div>
      <div className='row'>
        <Input
          title='Type'
          value={item.media_type}
          onChange={onChangeKey('media_type')}
        />
      </div>
      <div className='row'>
        <Input
          title='Link preview image url'
          required={true}
          value={item.href}
          onChange={onChangeKey('href')}
        />
      </div>
      <div className='row'>
        <Input title='Link file url' required={true} value={item.href} />
      </div>
      <div className='footer'>
        <Button
          type='primary'
          icon={<Icon name='check' />}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditForm;
