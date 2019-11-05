import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import './styles.scss';
import Input from 'components/Input';

const Breadcrumb = props => {
  return (
    <Link to='/'>
      <div className='breadcrumb'>
        <div className='icon'>
          <Icon name='back' />{' '}
        </div>
        <div>Search</div>
      </div>
    </Link>
  );
};

const SearchPage = props => {
  return (
    <div>
      <Breadcrumb />
      <div className='searchFromNasa'>Search from Nasa</div>
      <Input type='text' title='Type something to search...' />
      <div className="resultSummary">1 result for "Moon"</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
