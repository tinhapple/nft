// import axios from 'axios';
// import queryString from 'query-string';
// import { API_DOMAIN } from '../config/api';
// import { StorageKeys } from '../constants/storage-keys';

// const axiosClient = axios.create({
//   baseURL: API_DOMAIN,
//   paramsSerializer: params => queryString.stringify(params),
// });

// axiosClient.interceptors.request.use(async config => {
//   const accessToken = await AsyncStorage.getItem(StorageKeys.AccessToken);
  
//   config.headers = {
//     ...config.headers,
//     Mtoken: JSON.parse(accessToken),
//     xToken: JSON.parse(accessToken),
//     Accept: 'application/json',
//     'Cache-Control': 'no-cache',
//   };
//   config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json'
//   return config;
// },
//   error => Promise.reject(error)
// );

// axiosClient.interceptors.response.use(
//   response => {
//     return response.data
//   },
//   error => {
//     // console.log(`Lỗi API ${JSON.stringify(error)}`);
//     return Promise.reject(error);
//   },
// );

// export default axiosClient;


