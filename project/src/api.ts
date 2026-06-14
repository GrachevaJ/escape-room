import axios, { AxiosInstance } from 'axios';

const BACEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
