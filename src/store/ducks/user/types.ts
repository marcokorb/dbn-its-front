export enum UserTypes {
  LS_USER = '@user/LS',
  LOGIN_REQUEST = '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@user/LOGIN_FAILURE',
  LOGOUT_REQUEST = '@user/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@user/LOGOUT_SUCCESS',
  LOGOUT_FAILURE = '@user/LOGOUT_FAILURE',
}

export interface UserState {
  pk: number | null;
  username: string | null;
  status: boolean;
  readonly isFetching: boolean;
  readonly error: boolean;
}

interface RequestUserLoginActionType {
  type: typeof UserTypes.LOGIN_REQUEST;
  payload: string;
}

interface RequestUserLogoutActionType {
  type: typeof UserTypes.LOGOUT_REQUEST;
  payload: string;
}

interface SuccessUserLoginActionType {
  type: typeof UserTypes.LOGIN_SUCCESS;
  payload: UserState;
}

interface SuccessUserLogoutActionType {
  type: typeof UserTypes.LOGOUT_SUCCESS;
  payload: string;
}

interface FailureUserLoginActionType {
  type: typeof UserTypes.LOGIN_FAILURE;
  payload: string;
}

interface FailureUserLogoutActionType {
  type: typeof UserTypes.LOGOUT_FAILURE;
  payload: string;
}

export type UserActionTypes = RequestUserLoginActionType |
  RequestUserLogoutActionType |
  SuccessUserLoginActionType |
  SuccessUserLogoutActionType |
  FailureUserLoginActionType |
  FailureUserLogoutActionType;
