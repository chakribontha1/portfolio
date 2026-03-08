import axios from 'axios'

const API_BASE = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

// Request interceptor
api.interceptors.request.use(config => config, error => Promise.reject(error))

// Response interceptor
api.interceptors.response.use(
  response => response.data,
  error => {
    const message = error.response?.data?.message || 'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

export const projectsApi = {
  getAll: () => api.get('/projects'),
  getFeatured: () => api.get('/projects?featured=true'),
  getById: (id) => api.get(`/projects/${id}`),
  create: (data) => api.post('/projects', data),
}

export const skillsApi = {
  getAll: () => api.get('/skills'),
}

export const experienceApi = {
  getAll: () => api.get('/experience'),
}

export const contactApi = {
  send: (data) => api.post('/contact', data),
}

export default api
