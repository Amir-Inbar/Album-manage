import Axios from 'axios';

const BASE_URL =
  process.env.NODE_ENV === 'production' ? '/api/' : "https://my-json-server.typicode.com/Amir-Inbar/Album-manage/";

var axios = Axios.create({
  withCredentials: true,
});

export const httpService = {
  get(endpoint, data, query) {
    return ajax(endpoint, 'GET', data, query);
  },
  post(endpoint, data, query) {
    return ajax(endpoint, 'POST', data, query);
  },
  put(endpoint, data, query) {
    return ajax(endpoint, 'PUT', data, query);
  },
  delete(endpoint, data, query) {
    return ajax(endpoint, 'DELETE', data, query);
  },
};

async function ajax(endpoint, method = 'GET', data = null, query = null) {
  try {
    const res = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      data,
      params: query, //|| (method === 'GET') ? data : null,
    });
    return res.data;
  } catch (err) {
    // console.dir(err)
    if (err.response) {
      switch (err.response.status) {
        case 401:
          break;
        default:
          break;
      }
    }
    throw err;
  }
}