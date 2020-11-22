import produce, { Draft } from "immer";
import { Reducer } from "redux";
import { CoursesActionTypes, CoursesState, CoursesTypes } from "./types";

const INITIAL_STATE: CoursesState = {
  items: [
    {
      pk: 1,
      name: "",
    },
  ],
  isFetching: false,
  error: false,
};

const reducers: Reducer<CoursesState, CoursesActionTypes> = produce(
  (draft: Draft<CoursesState>, action: CoursesActionTypes) => {
    switch (action.type) {
      case CoursesTypes.GET_REQUEST:
        draft.isFetching = true;
        draft.error = false;
        break;
      case CoursesTypes.GET_SUCCESS:
        draft.items = action.payload;
        draft.isFetching = false;
        draft.error = false;
        break;
      case CoursesTypes.GET_FAILURE:
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
