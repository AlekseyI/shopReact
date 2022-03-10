import Axios from "axios";

const config = {
  baseURL: "http://localhost:3001",
};

export const axios = Axios.create(config);

export const httpClient = {
  get(url, params) {
    return axios.get(url, {
      params,
    });
  },
  post(url, data, headers) {
    return axios.post(url, data, headers);
  },
  put(url, data) {
    return axios.put(url, data);
  },
  patch(url, data) {
    return axios.patch(url, data);
  },
  delete(url, data) {
    return axios.delete(url, data);
  },
};
