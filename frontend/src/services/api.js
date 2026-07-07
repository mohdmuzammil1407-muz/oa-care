import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("oa_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const isAuthRoute = error.config.url?.includes('/auth/')
      if (!isAuthRoute) {
        localStorage.removeItem("oa_token");
        localStorage.removeItem("oa_user");
        alert('Your session has expired. Please login again.');
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);

export const authAPI = {
  register: (data) => api.post("/api/auth/register", data),
  login: (data) => api.post("/api/auth/login", data),
};

export const exercisesAPI = {
  getAll: (params) => api.get("/api/exercises/", { params }),
  getOne: (id) => api.get(`/api/exercises/${id}`),
  create: (data) => api.post("/api/exercises/", data),
  update: (id, data) => api.put(`/api/exercises/${id}`, data),
  delete: (id) => api.delete(`/api/exercises/${id}`),
};

export const progressAPI = {
  logExercise: (data) => api.post("/api/progress/log", data),
  getLogs: (days) => api.get("/api/progress/logs", { params: { days } }),
  getSummary: () => api.get("/api/progress/summary"),
  logPain: (data) => api.post("/api/progress/pain", data),
  getPainDiary: (days) => api.get("/api/progress/pain", { params: { days } }),
  updateStatus: (data) => api.patch('/api/progress/status', data),
  getStatuses: () => api.get('/api/progress/status'),
};

export const userAPI = {
  getProfile: () => api.get("/api/users/me"),
  updateProfile: (data) => api.put("/api/users/me", data),
};

export const adminAPI = {
  getStats: () => api.get("/api/admin/stats"),
  getUsers: (params) => api.get("/api/admin/users", { params }),
  getUserActivity: (id) => api.get(`/api/admin/users/${id}/activity`),
  getExercises: (params) => api.get("/api/admin/exercises", { params }),
  toggleUserActive: (id) => api.patch(`/api/admin/users/${id}/toggle-active`),
  seedExercises: () => api.post("/api/admin/seed-exercises"),
  getExerciseStatusOverview: () => api.get('/api/admin/exercise-status-overview'),
  getUserExerciseStatus: (userId) => api.get(`/api/admin/users/${userId}/exercise-status`),
};

export default api;
