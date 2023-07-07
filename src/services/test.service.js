// import axios from "axios";
// let source = axios.CancelToken.source();

// function CallAPI(isLogout) {
//   const config = {
//     baseURL: process.env.API_URL,
//     timeout: 5000,
//   };
//   if (isLogout) {
//     source.cancel("cancel api");
//     source = axios.CancelToken.source();
//   } else {
//     config.cancelToken = source.token;
//   }
//   const service = axios.create(config);
//   // const token = cookies.get('JWT_TOKEN')
//   // Request interceptors
//   service.interceptors.request.use(
//     (config) => {
//       config.headers["X-Requested-With"] = " XMLHttpRequest";
//       config.headers["Content-Type"] = "application/json";
//       // config.headers['Access-Control-Allow-Origin'] = '*'
//       // if (token) {
//       //   config.headers.Authorization = 'Bearer ' + token
//       //   // config.headers['Set-Cookie'] = "JWT_TOKEN=" + token
//       // }
//       return config;
//     },
//     (error) => {
//       // Do something with request error
//       Promise.reject(error);
//     }
//   );

//   // response pre-processing
//   service.interceptors.response.use(
//     (response) => {
//       return response;
//     },
//     // eslint-disable-next-line require-await
//     async (error) => {
//       // import error in store
//       // if (responseObj) {
//       //   const mockupError = {
//       //     code: responseObj.success,
//       //     message: responseObj.message,
//       //   }
//       //   store?.commit('error/SET_ERROR', mockupError)
//       // }
//       return Promise.reject(error);
//     }
//   );
//   return service;
// }

// export default CallAPI;
