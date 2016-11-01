import * as ACTIONS from '../actions/session_actions';
import {router, hashHistory} from 'react-router';

const getUser = () => {

}

const SessionMiddleware = ({dispatch}) => next => action => {

  switch (action.type) {
    case "LOGIN":

    if ((action.user.name === 'Chuck Norris') && (action.user.securId === '12345') && (action.user.time > 5)) {
      let user = {
        name: 'Chuck Norris',
        balance: '$100,000,000'
      };
      dispatch(ACTIONS.receiveCurrentUser(user));
      hashHistory.push('/home');      
    } else {
      dispatch(ACTIONS.receiveErrors('This form utilizes implicit authentication. Please fill out form correctly and in under 5 seconds'));
    }    

      return next(action);      

      break;

    default:
      return next(action);
      break;
  }
}

export default SessionMiddleware;