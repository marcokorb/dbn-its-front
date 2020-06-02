export enum QuestionTypes {
  ANSWER_REQUEST = '@question/ANSWER_REQUEST',
  ANSWER_SUCCESS = '@question/ANSWER_SUCCESS',
  ANSWER_FAILURE = '@question/ANSWER_FAILURE',
  GET_REQUEST = '@question/GET_REQUEST',
  GET_SUCCESS = '@question/GET_SUCCESS',
  GET_FAILURE = '@question/GET_FAILURE',
}

export interface AlternativeState {
  readonly pk: number;
  readonly number: string;
  readonly content: string;
  readonly status: boolean;
}

export interface AnswerSubmitState {
  readonly alternativeId: string;
  readonly questionId: number;
}

export interface AnswerSubmitResponseState {
  readonly alternative_status: boolean;
}

export interface QuestionState {
  readonly pk: number;
  readonly number: number;
  readonly content: string;
  readonly alternatives: [AlternativeState];
  readonly isFetching: boolean;
  readonly error: boolean;
}

interface RequestQuestionActionType {
  type: typeof QuestionTypes.GET_REQUEST;
  payload: string;
}

interface SuccessQuestionActionType {
  type: typeof QuestionTypes.GET_SUCCESS;
  payload: QuestionState;
}

interface FailureQuestionActionType {
  type: typeof QuestionTypes.GET_FAILURE;
  payload: string;
}

export type QuestionActionTypes = RequestQuestionActionType | 
  SuccessQuestionActionType | 
  FailureQuestionActionType;
