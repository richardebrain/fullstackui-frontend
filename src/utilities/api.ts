import axios from "axios";
import { APIResponse } from "./types";

// const BASE_URL =  import.meta.env.VITE_REACT_APP_API_URL;
const BASE_URL = "http://localhost:5000";

const headers = () => {
  return { "Content-Type": "application/json", Accept: "application/json" };
};

const authHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
};
const parseResponse = (response: any): APIResponse => {
  return {
    status: true,
    message: response.statusText,
    data: response.data,
  }
};
const parseError = (error: { response: any; message: any }): APIResponse => {
  return {
    status: false,
    message: error.response.data.message || error.message,
    data: null,
  };
};

const api = {
  fetch(url: string, params: {}, auth = false): Promise<APIResponse> {
    return axios
      .get<APIResponse>(`${BASE_URL}${url}`, {
        headers: auth ? authHeader() : headers(),
        // validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },

  post(url: string, data: any, auth = false): Promise<APIResponse> {
    const body = data;
    return axios
      .post<APIResponse>(`${BASE_URL}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        // validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },

  put(url: string, data: any, auth = false): Promise<APIResponse> {
    const body = data;

    return axios
      .put<APIResponse>(`${BASE_URL}${url}`, body, {
        headers: auth ? authHeader() : headers(),
        // validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },
  delete(url: string, auth = false): Promise<APIResponse> {
    return axios
      .delete<APIResponse>(`${BASE_URL}${url}`, {
        headers: auth ? authHeader() : headers(),
        // validateStatus: (status) => status >= 200 && status < 500,
      })
      .then(parseResponse)
      .catch(parseError);
  },
};
export default api;
