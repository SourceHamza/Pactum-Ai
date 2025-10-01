import axios from "axios";
import { ACCESS_TOKEN, REFRESH_TOKEN } from ".//constants";  

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL , 

})


API.interceptors.request.use((config) => {
  const token = localStorage.getItem(ACCESS_TOKEN);
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});


API.interceptors.response.use(
  res => res,
  async err => {
    const originalRequest = err.config;
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refresh = localStorage.getItem("refresh");
      if (!refresh) return Promise.reject(err);
      try {
        const resp = await axios.post(
          `${import.meta.env.VITE_API_URL || "http://localhost:8000/api/"}api/users/token/refresh/`,
          { refresh }
        );
        localStorage.setItem(ACCESS_TOKEN, resp.data.access);
        originalRequest.headers.Authorization = `Bearer ${resp.data.access}`;
        return axios(originalRequest);
      } catch (refreshErr) {
        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(REFRESH_TOKEN);
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(err);
  }
);

export default API;