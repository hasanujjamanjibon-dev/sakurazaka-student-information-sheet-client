import React, { useState } from "react";
import StudentInformation from "../components/StudentInformation";
import SponsorInformation from "../components/SponsorInformation";
import FamilyInformation from "../components/FamilyInformation";
import CurrentEducationalInformation from "../components/CurrentEducationalInformation";
import EducationalInformation from "../components/EducationalInformation";
import JapaneseLanguage from "../components/JapaneseLanguage";
import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import { buildPayload } from "../utils/buildPayload";
import { uploadImages } from "../utils/uploadImages";
import { formatDate } from "../utils/formatDate";

const Application = () => {
  const [loading, setLoading] = useState(false);
  const methods = useForm({
    shouldUnregister: true,
    defaultValues: {
      hasFather: "Yes",
      hasMother: "Yes",
    },
  });

  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");
  const backendBaseURL = import.meta.env.VITE_baseURL;

  const onSubmit = async (data) => {
    try {
      const phoneFields = [
        { key: "studentPhone", label: "Student Number" },
        { key: "studentAltPhone", label: "Student Another Number" },
        { key: "studentFatherPhone", label: "Father Number" },
        { key: "studentMotherPhone", label: "Mother Number" },
      ];
      // Required + 11 digit validation
      for (const field of phoneFields) {
        const phone = (data[field.key] || "").trim();

        if (!phone) {
          Swal.fire({
            icon: "warning",
            title: "Number Required",
            text: `${field.label} is empty. Please enter mobile number.`,
            showConfirmButton: false,
            timer: 3000,
          });
          return;
        }

        if (!/^[0-9]{11}$/.test(phone)) {
          Swal.fire({
            icon: "warning",
            title: "Invalid Mobile Number",
            text: `${field.label} must be exactly 11 digits.`,
            showConfirmButton: false,
            timer: 3000,
          });
          return;
        }
      }

      for (let i = 0; i < phoneFields.length; i++) {
        for (let j = i + 1; j < phoneFields.length; j++) {
          const value1 = (data[phoneFields[i].key] || "").trim();
          const value2 = (data[phoneFields[j].key] || "").trim();

          if (value1 && value2 && value1 === value2) {
            Swal.fire({
              icon: "warning",
              title: "Duplicate Mobile Number",
              showConfirmButton: false,
              timer: 2500,
              text: `${phoneFields[i].label} and ${phoneFields[j].label} cannot be the same.`,
            });
            return;
          }
        }
      }
      setLoading(true);
      setProgress(10);
      setProgressText("Preparing data...");
      setProgress(35);
      setProgressText("Uploading images...");
      const image = await uploadImages(data, backendBaseURL);

      data.studentPhoto = image.studentPhoto;
      data.sponsorPhoto = image.sponsorPhoto;

      const payload = buildPayload(data);
      // Student DOB
      payload.studentInformation.studentDob = formatDate(
        payload.studentInformation.studentDob,
      );

      // Family DOB
      payload.familyInformation = payload.familyInformation.map((member) => ({
        ...member,
        dob: formatDate(member.dob),
      }));
      setProgress(75);
      setProgressText("Saving information...");
      await axios.post(`${backendBaseURL}/api/data`, payload);
      setProgress(100);
      setProgressText("Completed.");
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Application submitted successfully.",
        timer: 1500,
        showConfirmButton: false,
      });
      methods.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong.",
        timer: 1500,
        showConfirmButton: false,
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
        setProgressText("");
      }, 800);
    }
  };

  return (
    <div className="max-w-5xl p-2 mx-auto bg-white text-left shadow-lg">
      <FormProvider {...methods}>
        {loading && (
          <div className="mb-4 fixed max-w-5xl top-0 left-0 right-0 bg-white p-4 shadow-md z-50 mx-auto">
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-blue-600">
                {progressText}
              </span>
              <span className="text-sm font-semibold">{progress}%</span>
            </div>

            <progress
              className="progress progress-primary w-full"
              value={progress}
              max="100"
            ></progress>
          </div>
        )}
        <form className="space-y-2" onSubmit={methods.handleSubmit(onSubmit)}>
          <StudentInformation />
          <SponsorInformation />
          <FamilyInformation />
          <EducationalInformation />
          <CurrentEducationalInformation />
          <JapaneseLanguage />

          <div className="mt-8 text-center fixed bottom-2 left-0 right-0">
            <button
              type="submit"
              className="btn btn-success"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Information"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Application;
