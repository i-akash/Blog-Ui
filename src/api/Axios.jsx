import axios from "axios";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    let status = error.response.status;
    console.log(status);
    switch (status) {
      case 401: {
        error = {
          response: { data: { errors: { message: ["You are not LoggedIn"] } } }
        };
        break;
      }
      case 403: {
        error = {
          response: { data: { errors: { message: ["You are Forbidden"] } } }
        };
        break;
      }
      case 412: {
        error = {
          response: {
            data: { errors: { message: ["This story is Already Changed"] } }
          }
        };
        break;
      }
      case 500: {
        error = {
          response: {
            data: { errors: { message: ["Sorry visit later"] } }
          }
        };
        break;
      }
      default:
        break;
    }
    console.log(error);

    return Promise.reject(error);
  }
);

export default axios;
