import { createSelector } from "reselect";

import { ApplicationState } from "../../state";

const getQuestion = (state: ApplicationState) => state.question;

export const getQuestionDetailState = createSelector(
  getQuestion,
  ({ question }) => question
);

export const getQuestionFetchingState = createSelector(
  getQuestion,
  ({ isFetching }) => isFetching
);

export const getQuestionNumberState = createSelector(
  getQuestion,
  ({ number }) => number
);
