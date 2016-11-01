import merge from 'lodash/merge';
import {router, hashHistory} from 'react-router';

const _nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {

  switch (action.type) {

    case "RECEIVE_CURRENT_USER":
      const currentUser = action.currentUser;
      // router.push('/feed');
      return merge({}, _nullUser, {currentUser});
      break;
    case "LOGOUT":
      hashHistory.push('/');
      return merge({}, _nullUser);
      break;      
    case "RECEIVE_ERRORS":
      const errors = action.errors;    
      return merge({}, _nullUser, {errors});
      break;

    default:
      return state;
      break;
  }
};

export default SessionReducer;