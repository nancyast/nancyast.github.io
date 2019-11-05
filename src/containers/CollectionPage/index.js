import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header from 'components/Header';
import Button from 'components/Button';
import Icon from 'components/Icon';
import ThumbnailList from 'components/ThumbnailList';
import './styles.scss';

import * as actions from 'containers/MainLayout/actions';

const CollectionPage = props => {
  const history = useHistory();

  return (
    <div>
      <Header
        title='Nasa Collection'
        extra={
          <Button
            icon={<Icon name='add' />}
            onClick={() => history.push('/nasa-search')}
          >
            Add new item
          </Button>
        }
      />
      <div className='thumbnailList'>
        <ThumbnailList
          items={props.items}
          addToFavorite={props.addToFavorite}
          submitEditItem={props.submitEditItem}
          submitDeleteItem={props.submitDeleteItem}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    items: state.mainLayout.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: id => dispatch(actions.addFavorite(id)),
    submitEditItem: item => dispatch(actions.editItem(item)),
    submitDeleteItem: id => dispatch(actions.deleteItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CollectionPage);
