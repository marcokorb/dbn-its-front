import { createSelector } from 'reselect';

import { ApplicationState } from '../../state';

const getQuestion = (state: ApplicationState) => state.question;

export const getQuestionState = createSelector(
  getQuestion,
  (question) => question
);

// export const isLoggedIn = createSelector(
//   getQuestion,
//   ({ status }) => status
// );
