import axios from "axios";

const instance = axios.create();
instance.interceptors.request.use(function (config) {
  if (config.headers.common) {
    config.headers.common["Content-Type"] = "application/json";
  }
  return config;
});

export default instance;
