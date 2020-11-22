import axios, { AxiosResponse } from "axios";
import { ThunkDispatch } from "redux-thunk";

import { api } from "../../../utils/api";
import { ApplicationState } from "../../state";
import { CoursesActionTypes, CourseState, CoursesTypes } from "./types";

export const fetchCourses = () => async (
  dispatch: ThunkDispatch<ApplicationState, void, CoursesActionTypes>
) => {
  dispatch({
    type: CoursesTypes.GET_REQUEST,
    payload: "",
  });

  try {
    const response: AxiosResponse<[CourseState]> = await axios.get(
      `${api.courses.get}`
    );

    dispatch({
      type: CoursesTypes.GET_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    dispatch({
      type: CoursesTypes.GET_FAILURE,
      payload: "",
    });
  }
};
