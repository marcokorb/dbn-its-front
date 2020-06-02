import { createSelector } from 'reselect';

import { ApplicationState } from '../../state';

export const getUser = (state: ApplicationState) => state.user;

export const getUsername = createSelector(
  getUser,
  ({ username }) => username
);

export const isLoggedIn = createSelector(
  getUser,
  ({ status }) => status
);
