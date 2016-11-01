import { applyMiddleware } from 'redux';
import logger from 'redux-logger';
import sessionMiddleware from './session_middleware';

export default applyMiddleware(sessionMiddleware, logger());