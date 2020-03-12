import axios from 'axios';

axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    let status=error.response.status
    console.log(status);
    switch (status) {
      case 401:{
        error={response:{data:{errors:{message:["You are not Authorized"]}}}}
        break
      };
      case 403:{
        error={response:{data:{errors:{message:["You are Forbidden"]}}}}
        break
      };
      default:
        break;
    }
    console.log(error);
    
    return Promise.reject(error);
  });
  
export default axios;