export enum UserTypes {
  LS_USER = '@user/LS',
  LOGIN_REQUEST = '@user/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@user/LOGIN_FAILURE',
}

export interface UserState {
  pk: number;
  username: string;
  status: boolean;
  readonly isFetching: boolean;
  readonly error: boolean;
}

interface RequestUserLoginActionType {
  type: typeof UserTypes.LOGIN_REQUEST;
  payload: string;
}

interface SuccessUserLoginActionType {
  type: typeof UserTypes.LOGIN_SUCCESS;
  payload: UserState;
}

interface FailureUserLoginActionType {
  type: typeof UserTypes.LOGIN_FAILURE;
  payload: string;
}

export type UserActionTypes = RequestUserLoginActionType |
  SuccessUserLoginActionType |
  FailureUserLoginActionType;
