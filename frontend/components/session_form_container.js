import {connect} from 'react-redux';
import * as ACTIONS from '../../actions/user_actions'
import SessionForm from './';

const mapStateToProps = state => ({
  items: state.user
});

const mapDispatchToProps = (dispatch) => {
  return {
    action: items => dispatch(ACTIONS.action(items)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
