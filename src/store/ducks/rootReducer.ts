import { combineReducers } from 'redux';

import { ApplicationState } from '../state';

import courses from './courses/reducers';
import question from './question/reducers';
import user from './user/reducers';

export default combineReducers<ApplicationState>({
  courses,
  question,
  user,
});
