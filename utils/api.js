import axios from 'axios';

const local_url = 'http://127.0.0.1:8000/';
const instance = axios.create({
  baseURL: local_url,
  timeout: 5000,
  withCredentials: true,
});

// Add a request interceptor
// instance.interceptors.request.use(config => config,
//   error => Promise.reject(error));

// Add a response interceptor
instance.interceptors.response.use((response) => {
  if (response.data.status && response.data.status === 'success') {
    return response.data;
  }
  return { data: 'error' };
},
error => Promise.reject(error));

const request_get = (url, config = {}) => instance.get(url, { params: config });
const request_post = (url, config = {}) => instance.post(url, config);
export { request_get, request_post };
