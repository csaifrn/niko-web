<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> 934d3edd31fc2c334874b940536226e584149920

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
<<<<<<< HEAD
    "Content-Type": "application/json",
=======
    'Content-Type': 'application/json',
>>>>>>> 934d3edd31fc2c334874b940536226e584149920
  },
});

axiosInstance.interceptors.request.use((config) => {
<<<<<<< HEAD
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default axiosInstance;
=======
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

export default axiosInstance;
>>>>>>> 934d3edd31fc2c334874b940536226e584149920
