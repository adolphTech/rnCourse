import axios from "axios";
import * as SecureStore from "expo-secure-store";

const instance = axios.create({
  baseURL:"https://tracks-server-o5jr.onrender.com"
});

instance.interceptors.request.use(
  async (config) => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err) 
)

export default instance;