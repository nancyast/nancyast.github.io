import React from 'react';
import { useHistory } from 'react-router-dom';
import Icon from 'components/Icon';
import './styles.scss';

const Thumbnail = props => {
  const history = useHistory();

  return (
    <div className='aspectRatio'>
      <div className='thumbnailWrapper'>
        <div className='thumbnailContainer'>
          <img className='image' src={props.href} alt='' />
          <div
            className='circleContainer'
            onClick={() => history.push('/video/1')}
          >
            <div className='circle'>
              <span className='icon'>
                <Icon name='play' />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
