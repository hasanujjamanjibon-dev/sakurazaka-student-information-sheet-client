import axios from "axios";

const API = import.meta.env.VITE_BackendURL;

export const getStudents = (page, limit, search) => {
  return axios.get(`${API}/api/students`, {
    params: {
      page,
      limit,
      q: search,
    },
  });
};

export const getStudent = (id) => axios.get(`${API}/api/data/${id}`);

export const deleteStudent = (id) => axios.delete(`${API}/api/data/${id}`);

export const updateStudent = (id, data) =>
  axios.put(`${API}/api/data/${id}`, data);

export const getStatistics = () => axios.get(`${API}/api/statistics`);
