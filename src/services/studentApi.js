import axios from "axios";

const API = import.meta.env.VITE_BackendURL;

// Get all students
export const getStudents = (page, limit, search, date) => {
  return axios.get(`${API}/api/students`, {
    params: {
      page,
      limit,
      q: search || "",
      date: date || "",
    },
  });
};

// Get single student
export const getStudent = (id) => {
  return axios.get(`${API}/api/data/${id}`);
};

// Delete student
export const deleteStudent = (id) => {
  return axios.delete(`${API}/api/data/${id}`);
};

// Update student
export const updateStudent = (id, data) => {
  return axios.put(`${API}/api/data/${id}`, data);
};

// Get statistics
export const getStatistics = () => {
  return axios.get(`${API}/api/statistics`);
};
