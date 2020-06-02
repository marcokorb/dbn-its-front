import { Middleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middlewares: Middleware[] = [thunk];

if (process.env.NODE_ENV === `development`) {
  
  middlewares.push(logger);
}

export default middlewares;
