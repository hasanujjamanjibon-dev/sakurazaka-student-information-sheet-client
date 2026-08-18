import axios from "axios";

const API = import.meta.env.VITE_SMART_ZIP_Backend_URL;
export const uploadFiles = (files, onProgress) => {
  const formData = new FormData();

  for (const file of files) {
    formData.append("files", file);
  }

  return axios.post(`${API}/api/upload`, formData, {
    onUploadProgress: (event) => {
      if (!event.total) return;

      const percent = Math.round((event.loaded * 100) / event.total);

      onProgress?.(percent);
    },
  });
};
/*  analyzeJob  */
export const analyzeJob = (jobId) => {
  return axios.post(`${API}/api/analyze/${jobId}`);
};

/* compressJob */
export const compressJob = (jobId) => {
  return axios.post(`${API}/api/compress/${jobId}`);
};
