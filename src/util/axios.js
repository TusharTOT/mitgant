import Axios from 'axios';

const uri = 'https://auditor.mitigant.io:8443/';
const axios = Axios.create({
  baseURL: uri,
});

axios.interceptors.request.use(
  async (req) => {
    const sessionUrls = [
      '/customers/cross-account-link',
      '/customers/assessments',
    ];

    const token = localStorage.getItem('token');
    const socketId = sessionUrls.includes(req.url)
      ? localStorage.getItem('socketId')
      : null;

    req.headers = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
      WS_SESSION: socketId,
    };

    return req;
  },
  async (error) => {
    Promise.reject(error);
  },
);

export default axios;