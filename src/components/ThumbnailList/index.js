import React from 'react';
import ThumbnailCard from 'components/ThumbnailCard';
import './styles.scss';

const Thumbnails = ({
  items,
  addToFavorite,
  submitEditItem,
  submitDeleteItem
}) => {
  return (
    <div className='container'>
      {items.map(item => (
        <div className='item' key={item.nasa_id}>
          <ThumbnailCard
            item={item}
            addToFavorite={addToFavorite}
            submitEditItem={submitEditItem}
            submitDeleteItem={submitDeleteItem}
          />
        </div>
      ))}
    </div>
  );
};

export default Thumbnails;
