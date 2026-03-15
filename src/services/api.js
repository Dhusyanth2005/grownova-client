import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: add response interceptor for better error messages
API.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ||
      error.message ||
      'Something went wrong. Please try again.';
    return Promise.reject(new Error(message));
  }
);

export const createCustomer = (data) => API.post('/api/customers', data);

export const markWebinarCompleted = (customerId) =>
  API.patch(`/api/customers/${customerId}`, {
    isWebinarCompleted: true,
  });

export const getCurrentWebinar = () => API.get('/api/webinar');