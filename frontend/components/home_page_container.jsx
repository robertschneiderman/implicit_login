import {connect} from 'react-redux';
// import * as ACTIONS from '../../actions/session_actions';
import HomePage from './home_page';

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
)(HomePage);
