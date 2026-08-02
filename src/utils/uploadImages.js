import axios from "axios";

export const uploadImages = async (data, backendBaseURL) => {
  const formData = new FormData();

  formData.append("studentPhoto", data.studentPhoto[0]);
  formData.append("sponsorPhoto", data.sponsorPhoto[0]);

  Object.keys(data).forEach((key) => {
    if (key !== "studentPhoto" && key !== "sponsorPhoto") {
      formData.append(key, data[key]);
    }
  });

  const response = await axios.post(
    `${backendBaseURL}/api/upload-images`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
