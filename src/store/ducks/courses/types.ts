export enum CoursesTypes {
  GET_REQUEST = "@courses/GET_REQUEST",
  GET_SUCCESS = "@courses/GET_SUCCESS",
  GET_FAILURE = "@courses/GET_FAILURE",
}

export interface CourseState {
  readonly pk: number;
  readonly name: string;
}

export interface CoursesState {
  readonly items: [CourseState];
  readonly isFetching: boolean;
  readonly error: boolean;
}

interface RequestCoursesActionType {
  type: typeof CoursesTypes.GET_REQUEST;
  payload: string;
}

interface SuccessCoursesActionType {
  type: typeof CoursesTypes.GET_SUCCESS;
  payload: [CourseState];
}

interface FailureCoursesActionType {
  type: typeof CoursesTypes.GET_FAILURE;
  payload: string;
}

export type CoursesActionTypes =
  | RequestCoursesActionType
  | SuccessCoursesActionType
  | FailureCoursesActionType;
