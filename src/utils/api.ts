import axios, { AxiosRequestConfig } from 'axios';

const API_HOST = 'http://localhost:8000';

export const get = (url: string, options: AxiosRequestConfig = {}) => {
  return axios.get(url, options);
};

export const post = (url: string, options: AxiosRequestConfig = {}) => { 
  return axios.post(url, options);
};  

export const api = {
  courses: {
    get: `${API_HOST}/courses/`
  },
  question: {
    answer: `${API_HOST}/user_answer/`,
    get: `${API_HOST}/questions/`,
  },
  usersFromConcept: {
    get: `${API_HOST}/users_from_concepts/`
  },
  user: {
    get: `${API_HOST}/users_from_concepts/`,
    login: `${API_HOST}/login/`,
  }
};
