import * as ACTIONS from '../actions/session_actions';
import {router, hashHistory} from 'react-router';

const getUser = () => {

}

const SessionMiddleware = ({dispatch}) => next => action => {

  switch (action.type) {
    case "SIGNUP":

    if ((action.user.name === 'Chuck Norris') && (action.user.securId === 12345)) {
      let user = {
        name: 'Chuck Norris',
        balance: '$100,000,000'
      };
      dispatch(ACTIONS.receiveCurrentUser(user));
    } else {
      dispatch(ACTIONS.receiveErrors('Wrong Credentials!'));
    }    

      return next(action);      

      break;

    default:
      return next(action);
      break;
  }
}

export default SessionMiddleware;