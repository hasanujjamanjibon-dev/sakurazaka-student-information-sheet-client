import axios from "axios";

const API = import.meta.env.VITE_BackendURL;

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

export const getStudent = (id) => {
  return axios.get(`${API}/api/data/${id}`);
};

export const deleteStudent = (id) => {
  return axios.delete(`${API}/api/data/${id}`);
};

export const updateStudent = (id, data) => {
  return axios.put(`${API}/api/data/${id}`, data);
};

export const getStatistics = () => {
  return axios.get(`${API}/api/statistics`);
};
