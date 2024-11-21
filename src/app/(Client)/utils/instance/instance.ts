import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Hàm tạo instance với baseURL
const createInstance = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
  });
};

// Kiểm tra hoặc gán giá trị mặc định cho NEXT_PUBLIC_BACKEND_URL
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

// Tạo instance với baseURL
const authInstance = createInstance(baseURL);

// Hàm request với kiểu cụ thể
const request = async <T>(
  instance: AxiosInstance,
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  return instance(config);
};

export { authInstance, request };
