import axios, { AxiosResponse } from 'axios';
import { ThunkDispatch } from 'redux-thunk';

import { api } from '../../../utils/api';
import { ApplicationState } from '../../state';
import { getUsername } from '../user/selectors';
import { AnswerSubmitState, AnswerSubmitResponseState, QuestionActionTypes, QuestionState, QuestionTypes } from './types';

export const getQuestion = (courseId: number) => 
  async (dispatch: ThunkDispatch<ApplicationState, void, QuestionActionTypes>, getState: () => ApplicationState) => {

    const state = getState();
    const username = getUsername(state);

    dispatch({
      type: QuestionTypes.GET_REQUEST,
      payload: ''
    });

    try {

      const response: AxiosResponse<QuestionState> = await axios.get(`${api.question.get}?username=${username}&course_id=${courseId}`);

      dispatch({
        type: QuestionTypes.GET_SUCCESS,
        payload: response.data
      });

    } catch(e) {

      dispatch({
        type: QuestionTypes.GET_FAILURE,
        payload: ''
      });
    }
  };

export const answerQuestion = (courseId: number, data: AnswerSubmitState) => 
  async (dispatch: ThunkDispatch<ApplicationState, void, QuestionActionTypes>, getState: () => ApplicationState) => {

    const state = getState();
    const username = getUsername(state);

    try {

      const response: AxiosResponse<AnswerSubmitResponseState> = await axios
        .post(`${api.question.answer}?username=${username}`, data);

      if(response.data.alternative_status) {
        alert('Correto');
      } else {
        alert('Errado');
      }

      dispatch(getQuestion(courseId));

      return response.data;

    } catch (e) {

    }
  };

