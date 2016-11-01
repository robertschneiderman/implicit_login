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
    case "LOGOUT":
      hashHistory.push('/');
      return merge({}, _nullUser);
    case "RECEIVE_ERRORS":
      const errors = action.errors;    
      return merge({}, _nullUser, {errors});

    default:
      return state;

  }
};

export default SessionReducer;