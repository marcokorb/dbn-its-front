import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { QuestionActionTypes, QuestionState, QuestionTypes } from "./types";

const INITIAL_STATE: QuestionState = {
  pk: 1,
  number: 1,
  question: {
    pk: 1,
    content: "",
    alternatives: [
      {
        pk: 1,
        number: "a",
        content: "",
        status: false,
      },
    ],
  },
  isFetching: false,
  error: false,
};

const reducers: Reducer<QuestionState, QuestionActionTypes> = produce(
  (draft: Draft<QuestionState>, action: QuestionActionTypes) => {
    switch (action.type) {
      case QuestionTypes.GET_REQUEST:
        draft.isFetching = true;
        draft.error = false;
        break;
      case QuestionTypes.GET_SUCCESS:
        draft.isFetching = false;
        draft.error = false;
        draft.pk = action.payload.pk;
        draft.number = action.payload.number;
        draft.question = action.payload.question;
        break;
      case QuestionTypes.GET_FAILURE:
        draft.isFetching = false;
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
