import axios, { AxiosResponse } from "axios";
import { ThunkDispatch } from "redux-thunk";

import { api } from "../../../utils/api";
import { ApplicationState } from "../../state";
import { UserActionTypes, UserState, UserTypes } from "./types";

export const login = (name: string) => async (
  dispatch: ThunkDispatch<ApplicationState, void, UserActionTypes>
) => {
  dispatch({
    type: UserTypes.LOGIN_REQUEST,
    payload: "",
  });

  try {
    const response: AxiosResponse<UserState> = await axios.post(
      `${api.user.login}`,
      { username: name }
    );

    dispatch({
      type: UserTypes.LOGIN_SUCCESS,
      payload: response.data,
    });

    localStorage.setItem(UserTypes.LS_USER, JSON.stringify(response.data));
  } catch (e) {
    dispatch({
      type: UserTypes.LOGIN_FAILURE,
      payload: "",
    });
  }
};

export const logout = () => async (
  dispatch: ThunkDispatch<ApplicationState, void, UserActionTypes>
) => {
  dispatch({
    type: UserTypes.LOGOUT_REQUEST,
    payload: "",
  });

  try {
    localStorage.removeItem(UserTypes.LS_USER);

    dispatch({
      type: UserTypes.LOGOUT_SUCCESS,
      payload: "",
    });
  } catch (e) {
    dispatch({
      type: UserTypes.LOGOUT_FAILURE,
      payload: "",
    });
  }
};
