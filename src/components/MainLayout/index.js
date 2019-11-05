import React, { useEffect } from 'react';
import './styles.scss';

const MainLayout = props => {
  useEffect(() => {
    // console.log('API key: zGwm8HdopNWRdy0bXeNSKeB4TxQcSjPzizae8VdW');
    props.fetchCollection();
  }, [props]);

  return <div className='mainLayout'>{props.children}</div>;
};

export default MainLayout;
