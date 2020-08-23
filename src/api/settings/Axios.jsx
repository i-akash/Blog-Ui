import axios from "axios";
import { config } from "../../config.json";
import { WithInterceptors } from "./AxiosInterceptors";

export const AuthorizedAxios = WithInterceptors(
  axios.create({
    baseURL: config.API_BASE_URL,
    headers: { Authorization: `Bearer ${localStorage.getItem("jwtToken")}` },
  })
);

export const Axios = WithInterceptors(
  axios.create({ baseURL: config.API_BASE_URL })
);