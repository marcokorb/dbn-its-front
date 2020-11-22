import produce, { Draft } from 'immer';
import { Reducer } from 'redux';
import { UserActionTypes, UserState, UserTypes } from './types';

let INITIAL_STATE: UserState = {
  pk: null,
  username: '',
  status: false,
  isFetching: false,
  error: false,
};

try {

  let storageUser = JSON.parse(localStorage.getItem(UserTypes.LS_USER) || '');

  INITIAL_STATE.pk = storageUser.pk;
  INITIAL_STATE.username = storageUser.username;
  INITIAL_STATE.status = true;

} catch(e) {}

const reducers: Reducer<UserState, UserActionTypes> = produce(
  (draft: Draft<UserState>, action: UserActionTypes) => {
    
    switch (action.type) {
      case UserTypes.LOGIN_REQUEST:
        draft.isFetching = true;
        draft.error = false;
        break;
      case UserTypes.LOGIN_SUCCESS:
        draft.pk = action.payload.pk;
        draft.username = action.payload.username;
        draft.status = true;
        break;
      case UserTypes.LOGIN_FAILURE:
        draft.isFetching = false;
        draft.error = true;
        break;
      case UserTypes.LOGOUT_REQUEST:
        break;
      case UserTypes.LOGOUT_SUCCESS:
        draft.pk = null;
        draft.username = null;
        draft.status = false;
        break;
      case UserTypes.LOGOUT_FAILURE:
          draft.error = true;
          break;
      default:
          break;
    }

    return draft;
  },
  INITIAL_STATE
);

export default reducers;
