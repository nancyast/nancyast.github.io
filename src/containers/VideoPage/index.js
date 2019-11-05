import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';
import Icon from 'components/Icon';
import Button from 'components/Button';

const VideoPage = props => {
  const history = useHistory();

  return (
    <div className='videoBackground'>
      <div className='header'>
        <div className='title'>Fireworks in Seattle</div>
        <Button
          type='action'
          icon={<Icon name='close' />}
          borderless={true}
          style={{ color: 'white' }}
          onClick={() => history.push('/')}
        />
      </div>
      <div className='videoWrapper'>
        <iframe
          title='video'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/PO8t--6z9uU?start=2'
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPage;
