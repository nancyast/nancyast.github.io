import React, { useState } from 'react';
import Thumbnail from 'components/Thumbnail';
import './styles.scss';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Modal from 'components/Modal';
import EditForm from './EditForm';

const AuthorRow = props => {
  return (
    <div className='authorRow'>
      <div>{props.name}</div>
      <div>{props.date}</div>
    </div>
  );
};

const ThumbnailCard = ({
  item,
  addToFavorite,
  submitEditItem,
  submitDeleteItem
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = isOpen => () => setIsOpen(isOpen);
  const handleSubmit = item => {
    setIsOpen(false);
    submitEditItem(item);
  };

  if (item) {
    return (
      <div className='thumbnailCard'>
        <Thumbnail href={item.href} />
        <AuthorRow name={item.photographer} date={item.date_created} />
        <div className='title'>{item.title}</div>
        <p className='description'>{item.description}</p>
        <div className='actionButtons'>
          <Button
            type='action'
            icon={
              item.favorite ? (
                <Icon name='heartFilled' />
              ) : (
                <Icon name='heart' />
              )
            }
            onClick={() => addToFavorite(item.nasa_id)}
          />
          <Button
            type='action'
            icon={<Icon name='trashBin' />}
            onClick={() => submitDeleteItem(item.nasa_id)}
          />
          <Button
            type='action'
            icon={<Icon name='pen' />}
            onClick={openModal(true)}
          />
        </div>
        <Modal isOpen={isOpen} onClose={openModal(false)}>
          <EditForm onSubmit={handleSubmit} item={item} />
        </Modal>
      </div>
    );
  }

  return null;
};

export default ThumbnailCard;
