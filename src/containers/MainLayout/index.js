import MainLayout from 'components/MainLayout';
import { connect } from 'react-redux';
import { fetchCollection } from './actions';

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: () => dispatch(fetchCollection())
  };
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default withConnect(MainLayout);
