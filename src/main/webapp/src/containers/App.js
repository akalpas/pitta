import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import * as serverActions from '../actions/serverActions';

function mapStateToProps(state) {
  return {
    loading: state.loading,
    events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(serverActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);