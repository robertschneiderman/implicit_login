import {connect} from 'react-redux';
import * as ACTIONS from '../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = state => ({
  items: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    login: items => dispatch(ACTIONS.login(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
