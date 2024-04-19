import axios from "axios";

const AxiosService = axios.create({
  baseURL: "https://hr-be-2le4.onrender.com",
  headers: {
    "Content-Type": "Application/json",
  },
});

AxiosService.interceptors.request.use(
  (config) => {
    // console.log(config);
    const token = sessionStorage.getItem("token");
    if (config.authenticate && token)
      config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default AxiosService;
