// import React, { useEffect, useState } from "react";
// import { useForm, FormProvider } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";

// import StudentInformation from "../components/StudentInformation";
// import SponsorInformation from "../components/SponsorInformation";
// import FamilyInformation from "../components/FamilyInformation";
// import CurrentEducationalInformation from "../components/CurrentEducationalInformation";
// import EducationalInformation from "../components/EducationalInformation";
// import JapaneseLanguage from "../components/JapaneseLanguage";

// import { buildPayload } from "../utils/buildPayload";
// import { uploadImages } from "../utils/uploadImages";
// import { formatDate } from "../utils/formatDate";

// import { getStudent, updateStudent } from "../services/studentApi";
// import Footer from "../components/Footer";

// const Application = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const isEditMode = Boolean(id);

//   const [loading, setLoading] = useState(false);
//   const [fetching, setFetching] = useState(isEditMode);

//   const [progress, setProgress] = useState(0);
//   const [progressText, setProgressText] = useState("");

//   const [existingStudentPhoto, setExistingStudentPhoto] = useState("");
//   const [existingSponsorPhoto, setExistingSponsorPhoto] = useState("");

//   const backendBaseURL = import.meta.env.VITE_BackendURL;

//   const methods = useForm({
//     shouldUnregister: true,

//     defaultValues: {
//       hasFather: "Yes",
//       hasMother: "Yes",
//       currentAdmissionStatus: "admitted",
//     },
//   });

//   const { reset } = methods;

//   // =========================
//   // Convert date for input type="date"
//   // =========================
//   const toInputDate = (date) => {
//     if (!date) return "";

//     const value = String(date);

//     // Already YYYY-MM-DD
//     if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
//       return value;
//     }

//     // ISO date
//     if (value.includes("T")) {
//       return value.split("T")[0];
//     }

//     // DD/MM/YYYY
//     if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
//       const [day, month, year] = value.split("/");
//       return `${year}-${month}-${day}`;
//     }

//     // DD-MM-YYYY
//     if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
//       const [day, month, year] = value.split("-");
//       return `${year}-${month}-${day}`;
//     }

//     return value;
//   };

//   // =========================
//   // Load Student for Edit
//   // =========================
//   useEffect(() => {
//     if (!id) return;

//     const loadStudent = async () => {
//       try {
//         setFetching(true);

//         const res = await getStudent(id);

//         console.log("Edit Student Response:", res.data);

//         const student = res.data?.student || res.data;

//         const info = student.studentInformation || {};
//         const sponsor = student.sponsorInformation || {};

//         // =========================
//         // Family Information
//         // =========================
//         const family = student.familyInformation || [];

//         const father =
//           family.find(
//             (member) =>
//               member.relationship === "Father" ||
//               member.relation === "Father" ||
//               member.type === "Father",
//           ) || {};

//         const mother =
//           family.find(
//             (member) =>
//               member.relationship === "Mother" ||
//               member.relation === "Mother" ||
//               member.type === "Mother",
//           ) || {};

//         const sibling =
//           family.find(
//             (member) =>
//               member.relationship !== "Father" &&
//               member.relationship !== "Mother" &&
//               member.relation !== "Father" &&
//               member.relation !== "Mother",
//           ) || {};

//         // =========================
//         // Form Values
//         // =========================
//         const formData = {
//           // Student
//           studentName: info.studentName || "",
//           studentPhone: info.studentPhone || "",
//           studentAltPhone: info.studentAltPhone || "",
//           studentDob: toInputDate(info.studentDob),
//           studentFatherPhone: info.studentFatherPhone || "",
//           studentMotherPhone: info.studentMotherPhone || "",
//           studentPresentAddress: info.studentPresentAddress || "",

//           // Sponsor
//           sponsorName: sponsor.sponsorName || "",
//           sponsorFatherName: sponsor.sponsorFatherName || "",
//           sponsorMotherName: sponsor.sponsorMotherName || "",
//           sponsorNidNumber: sponsor.sponsorNidNumber || "",
//           sponsorBusinessName: sponsor.sponsorBusinessName || "",
//           sponsorBusinessCategory: sponsor.sponsorBusinessCategory || "",

//           // Family
//           hasFather: father.name ? "Yes" : "No",
//           fatherName: father.name || "",
//           fatherDob: toInputDate(father.dob),
//           fatherOccupation: father.occupation || "",

//           hasMother: mother.name ? "Yes" : "No",
//           motherName: mother.name || "",
//           motherDob: toInputDate(mother.dob),
//           motherOccupation: mother.occupation || "",

//           siblingName: sibling.name || "",
//           siblingRelationship: sibling.relationship || sibling.relation || "",
//           siblingDob: toInputDate(sibling.dob),
//           siblingOccupation: sibling.occupation || "",

//           // Current Education
//           currentAdmissionStatus:
//             student.currentEducationalInformation?.currentAdmissionStatus ||
//             student.currentAdmissionStatus ||
//             "admitted",

//           currentUniversityName:
//             student.currentEducationalInformation?.currentUniversityName ||
//             student.currentUniversityName ||
//             "",

//           currentDepartment:
//             student.currentEducationalInformation?.currentDepartment ||
//             student.currentDepartment ||
//             "",

//           currentCourse:
//             student.currentEducationalInformation?.currentCourse ||
//             student.currentCourse ||
//             "",

//           currentSemester:
//             student.currentEducationalInformation?.currentSemester ||
//             student.currentSemester ||
//             "",

//           currentRoll:
//             student.currentEducationalInformation?.currentRoll ||
//             student.currentRoll ||
//             "",

//           currentRegistration:
//             student.currentEducationalInformation?.currentRegistration ||
//             student.currentRegistration ||
//             "",
//         };

//         // =========================
//         // Educational Information
//         // =========================
//         const education = student.educationalInformation || {};

//         const educationTypes = [
//           "primary",
//           "secondary",
//           "higherSecondary",
//           "honours",
//           "masters",
//         ];

//         educationTypes.forEach((type) => {
//           const item = education[type] || {};

//           formData[`${type}SchoolName`] =
//             item.schoolName || student[`${type}SchoolName`] || "";

//           formData[`${type}SchoolAddress`] =
//             item.schoolAddress || student[`${type}SchoolAddress`] || "";

//           formData[`${type}PassingYear`] =
//             item.passingYear || student[`${type}PassingYear`] || "";
//         });

//         // =========================
//         // Japanese Information
//         // =========================
//         const japanese =
//           student.japaneseLanguage || student.japaneseLanguageInformation || {};

//         const japaneseTypes = ["JLPT", "NAT", "JLCT", "JPT", "Top_J", "J_Test"];

//         japaneseTypes.forEach((type) => {
//           const item = japanese[type] || {};

//           formData[`${type}Level`] =
//             item.level || student[`${type}Level`] || "";

//           formData[`${type}Score`] =
//             item.score || student[`${type}Score`] || "";

//           formData[`${type}RollNumber`] =
//             item.rollNumber || student[`${type}RollNumber`] || "";

//           formData[`${type}ExamDate`] =
//             item.examDate || student[`${type}ExamDate`] || "";

//           formData[`${type}ExpectedExamDate`] =
//             item.expectedExamDate || student[`${type}ExpectedExamDate`] || "";
//         });

//         // =========================
//         // Existing Photos
//         // =========================
//         const studentPhoto = info.studentPhoto || student.studentPhoto || "";

//         const sponsorPhoto = sponsor.sponsorPhoto || student.sponsorPhoto || "";

//         setExistingStudentPhoto(studentPhoto);
//         setExistingSponsorPhoto(sponsorPhoto);

//         // =========================
//         // Put data into form
//         // =========================
//         reset(formData);
//       } catch (error) {
//         console.error(error);

//         Swal.fire({
//           icon: "error",
//           title: "Failed",
//           text:
//             error.response?.data?.message ||
//             "Student information could not be loaded.",
//         });

//         navigate("/dashboard");
//       } finally {
//         setFetching(false);
//       }
//     };

//     loadStudent();
//   }, [id, reset, navigate]);

//   // =========================
//   // Submit
//   // =========================
//   const onSubmit = async (data) => {
//     try {
//       const phoneFields = [
//         {
//           key: "studentPhone",
//           label: "Student Number",
//         },
//         {
//           key: "studentAltPhone",
//           label: "Student Another Number",
//         },
//         {
//           key: "studentFatherPhone",
//           label: "Father Number",
//         },
//         {
//           key: "studentMotherPhone",
//           label: "Mother Number",
//         },
//       ];

//       // =========================
//       // Phone Validation
//       // =========================
//       for (const field of phoneFields) {
//         const phone = (data[field.key] || "").trim();

//         if (!phone) {
//           Swal.fire({
//             icon: "warning",
//             title: "Number Required",
//             text: `${field.label} is empty. Please enter mobile number.`,
//             showConfirmButton: false,
//             timer: 3000,
//           });

//           return;
//         }

//         if (!/^[0-9]{11}$/.test(phone)) {
//           Swal.fire({
//             icon: "warning",
//             title: "Invalid Mobile Number",
//             text: `${field.label} must be exactly 11 digits.`,
//             showConfirmButton: false,
//             timer: 3000,
//           });

//           return;
//         }
//       }

//       // =========================
//       // Duplicate Phone Check
//       // =========================
//       for (let i = 0; i < phoneFields.length; i++) {
//         for (let j = i + 1; j < phoneFields.length; j++) {
//           const value1 = (data[phoneFields[i].key] || "").trim();
//           const value2 = (data[phoneFields[j].key] || "").trim();

//           if (value1 && value2 && value1 === value2) {
//             Swal.fire({
//               icon: "warning",
//               title: "Duplicate Mobile Number",
//               showConfirmButton: false,
//               timer: 2500,
//               text: `${phoneFields[i].label} and ${phoneFields[j].label} cannot be the same.`,
//             });

//             return;
//           }
//         }
//       }

//       setLoading(true);

//       setProgress(10);
//       setProgressText(isEditMode ? "Preparing update..." : "Preparing data...");

//       // =========================
//       // Upload only NEW images
//       // =========================
//       setProgress(35);
//       setProgressText("Processing images...");

//       let studentPhoto = existingStudentPhoto;
//       let sponsorPhoto = existingSponsorPhoto;

//       const hasNewStudentPhoto =
//         data.studentPhoto &&
//         data.studentPhoto instanceof FileList &&
//         data.studentPhoto.length > 0;

//       const hasNewSponsorPhoto =
//         data.sponsorPhoto &&
//         data.sponsorPhoto instanceof FileList &&
//         data.sponsorPhoto.length > 0;

//       if (hasNewStudentPhoto || hasNewSponsorPhoto) {
//         const image = await uploadImages(data, backendBaseURL);

//         if (image?.studentPhoto) {
//           studentPhoto = image.studentPhoto;
//         }

//         if (image?.sponsorPhoto) {
//           sponsorPhoto = image.sponsorPhoto;
//         }
//       }

//       data.studentPhoto = studentPhoto;
//       data.sponsorPhoto = sponsorPhoto;

//       // =========================
//       // Build Payload
//       // =========================
//       const payload = buildPayload(data);

//       // Student DOB
//       if (payload.studentInformation) {
//         payload.studentInformation.studentDob = formatDate(
//           payload.studentInformation.studentDob,
//         );
//       }

//       // Family DOB
//       if (Array.isArray(payload.familyInformation)) {
//         payload.familyInformation = payload.familyInformation.map((member) => ({
//           ...member,
//           dob: formatDate(member.dob),
//         }));
//       }

//       setProgress(75);
//       setProgressText(
//         isEditMode ? "Updating information..." : "Saving information...",
//       );

//       // =========================
//       // POST / PUT
//       // =========================
//       if (isEditMode) {
//         await updateStudent(id, payload);
//       } else {
//         await axios.post(`${backendBaseURL}/api/data`, payload);
//       }

//       setProgress(100);
//       setProgressText("Completed.");

//       await Swal.fire({
//         icon: "success",
//         title: isEditMode ? "Updated Successfully" : "Success",
//         text: isEditMode
//           ? "Student information updated successfully."
//           : "Application submitted successfully.",
//         timer: 1500,
//         showConfirmButton: false,
//       });

//       if (isEditMode) {
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       console.error(error);

//       Swal.fire({
//         icon: "error",
//         title: isEditMode ? "Update Failed" : "Submission Failed",
//         text:
//           error.response?.data?.message ||
//           error.message ||
//           "Something went wrong.",
//         timer: 2500,
//         showConfirmButton: false,
//       });
//     } finally {
//       setTimeout(() => {
//         setLoading(false);
//         setProgress(0);
//         setProgressText("");
//       }, 800);
//     }
//   };

//   // =========================
//   // Loading student data
//   // =========================
//   if (fetching) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="text-center">
//           <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-violet-700" />

//           <p className="font-semibold text-gray-700">
//             Loading student information...
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <FormProvider {...methods}>
//       {loading && (
//         <div className="fixed left-0 right-0 top-0 z-50 bg-white p-2 shadow">
//           <div className="mb-1 text-center text-sm font-semibold">
//             {progressText}
//           </div>

//           <progress
//             className="progress progress-primary w-full"
//             value={progress}
//             max="100"
//           />
//         </div>
//       )}

//       <form
//         className="space-y-2 max-w-7xl mx-auto"
//         onSubmit={methods.handleSubmit(onSubmit)}
//       >
//         <StudentInformation existingPhoto={existingStudentPhoto} />

//         <SponsorInformation existingPhoto={existingSponsorPhoto} />

//         <FamilyInformation />

//         <EducationalInformation />

//         <CurrentEducationalInformation />

//         <JapaneseLanguage />
//         <Footer />

//         <div className="fixed bottom-2 left-0 right-0 mt-8 text-center">
//           <button type="submit" className="btn btn-success" disabled={loading}>
//             {loading
//               ? isEditMode
//                 ? "Updating..."
//                 : "Submitting..."
//               : isEditMode
//                 ? "Update Information"
//                 : "Submit Information"}
//           </button>
//         </div>
//       </form>
//     </FormProvider>
//   );
// };

// export default Application;
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

import StudentInformation from "../components/StudentInformation";
import SponsorInformation from "../components/SponsorInformation";
import FamilyInformation from "../components/FamilyInformation";
import CurrentEducationalInformation from "../components/CurrentEducationalInformation";
import EducationalInformation from "../components/EducationalInformation";
import JapaneseLanguage from "../components/JapaneseLanguage";

import { buildPayload } from "../utils/buildPayload";
import { uploadImages } from "../utils/uploadImages";
import { formatDate } from "../utils/formatDate";

import { getStudent, updateStudent } from "../services/studentApi";
import Footer from "../components/Footer";

const Application = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const isEditMode = Boolean(id);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditMode);

  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState("");

  const [existingStudentPhoto, setExistingStudentPhoto] = useState("");
  const [existingSponsorPhoto, setExistingSponsorPhoto] = useState("");

  const backendBaseURL = import.meta.env.VITE_BackendURL;

  const methods = useForm({
    shouldUnregister: true,

    defaultValues: {
      hasFather: "Yes",
      hasMother: "Yes",
      currentAdmissionStatus: "admitted",
    },
  });

  const { reset } = methods;

  // =========================================================
  // Convert any date format to YYYY-MM-DD
  // For input type="date"
  // =========================================================
  const toInputDate = (date) => {
    if (!date) return "";

    const value = String(date).trim();

    // Already YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
      return value;
    }

    // ISO date
    if (value.includes("T")) {
      return value.split("T")[0];
    }

    // DD/MM/YYYY
    if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      const [day, month, year] = value.split("/");

      return `${year}-${month}-${day}`;
    }

    // DD-MM-YYYY
    if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
      const [day, month, year] = value.split("-");

      return `${year}-${month}-${day}`;
    }

    // DD/MM/YY
    if (/^\d{2}\/\d{2}\/\d{2}$/.test(value)) {
      const [day, month, year] = value.split("/");

      return `20${year}-${month}-${day}`;
    }

    // DD-MM-YY
    if (/^\d{2}-\d{2}-\d{2}$/.test(value)) {
      const [day, month, year] = value.split("-");

      return `20${year}-${month}-${day}`;
    }

    // ==========================================
    // Example: 26 Aug 2026
    // ==========================================
    const monthNames = {
      Jan: "01",
      Feb: "02",
      Mar: "03",
      Apr: "04",
      May: "05",
      Jun: "06",
      Jul: "07",
      Aug: "08",
      Sep: "09",
      Oct: "10",
      Nov: "11",
      Dec: "12",
    };

    const parts = value.split(/\s+/);

    if (parts.length === 3) {
      const [day, month, year] = parts;

      if (monthNames[month]) {
        return `${year}-${monthNames[month]}-${day.padStart(2, "0")}`;
      }
    }

    return "";
  };

  // =========================================================
  // Load Student For Edit
  // =========================================================
  useEffect(() => {
    if (!id) return;

    const loadStudent = async () => {
      try {
        setFetching(true);

        const res = await getStudent(id);

        console.log("Edit Student Response:", res.data);

        const student = res.data?.student || res.data;

        const info = student.studentInformation || {};
        const sponsor = student.sponsorInformation || {};

        // =====================================================
        // FAMILY
        // =====================================================

        const family = Array.isArray(student.familyInformation)
          ? student.familyInformation
          : [];

        const father =
          family.find(
            (member) =>
              member.relation === "Father" ||
              member.relationship === "Father" ||
              member.type === "Father",
          ) || {};

        const mother =
          family.find(
            (member) =>
              member.relation === "Mother" ||
              member.relationship === "Mother" ||
              member.type === "Mother",
          ) || {};

        const sibling =
          family.find(
            (member) =>
              member.relation !== "Father" &&
              member.relation !== "Mother" &&
              member.relationship !== "Father" &&
              member.relationship !== "Mother" &&
              member.type !== "Father" &&
              member.type !== "Mother",
          ) || {};

        // =====================================================
        // CURRENT EDUCATION
        // =====================================================

        const currentEducation = student.currentEducation || {};

        // =====================================================
        // EDUCATIONAL HISTORY
        // =====================================================

        const educationalHistory = Array.isArray(student.educationalHistory)
          ? student.educationalHistory
          : [];

        const getEducation = (level) => {
          return (
            educationalHistory.find(
              (item) =>
                String(item.level || "").toLowerCase() === level.toLowerCase(),
            ) || {}
          );
        };

        const primary = getEducation("Primary");
        const secondary = getEducation("Secondary");
        const higherSecondary = getEducation("Higher Secondary");
        const honours = getEducation("Honours");
        const masters = getEducation("Masters");

        // =====================================================
        // JAPANESE LANGUAGE
        // =====================================================

        const japaneseTests = Array.isArray(student.japaneseLanguageTests)
          ? student.japaneseLanguageTests
          : [];

        const getJapanese = (exam) => {
          return (
            japaneseTests.find(
              (item) =>
                String(item.exam || "").toLowerCase() === exam.toLowerCase(),
            ) || {}
          );
        };

        const JLPT = getJapanese("JLPT");
        const NAT = getJapanese("NAT");
        const JLCT = getJapanese("JLCT");
        const JPT = getJapanese("JPT");
        const TopJ = getJapanese("Top_J");
        const JTest = getJapanese("J_Test");

        // =====================================================
        // FORM DATA
        // =====================================================

        const formData = {
          // =========================
          // Student
          // =========================

          studentName: info.studentName || "",
          studentPhone: info.studentPhone || "",
          studentAltPhone: info.studentAltPhone || "",

          studentDob: toInputDate(info.studentDob),

          studentFatherPhone: info.studentFatherPhone || "",
          studentMotherPhone: info.studentMotherPhone || "",
          studentPresentAddress: info.studentPresentAddress || "",

          // =========================
          // Sponsor
          // =========================

          sponsorName: sponsor.sponsorName || "",
          sponsorFatherName: sponsor.sponsorFatherName || "",
          sponsorMotherName: sponsor.sponsorMotherName || "",
          sponsorNidNumber: sponsor.sponsorNidNumber || "",
          sponsorBusinessName: sponsor.sponsorBusinessName || "",
          sponsorBusinessCategory: sponsor.sponsorBusinessCategory || "",

          // =========================
          // Family
          // =========================

          hasFather: father.name ? "Yes" : "No",

          fatherName: father.name || "",
          fatherDob: toInputDate(father.dob),
          fatherOccupation: father.occupation || "",

          hasMother: mother.name ? "Yes" : "No",

          motherName: mother.name || "",
          motherDob: toInputDate(mother.dob),
          motherOccupation: mother.occupation || "",

          siblingName: sibling.name || "",
          siblingRelationship: sibling.relationship || sibling.relation || "",
          siblingDob: toInputDate(sibling.dob),
          siblingOccupation: sibling.occupation || "",

          // =========================
          // Current Education
          // =========================

          currentAdmissionStatus:
            currentEducation.currentAdmissionStatus ||
            student.currentAdmissionStatus ||
            "admitted",

          currentUniversityName: currentEducation.universityName || "",

          currentDepartment: currentEducation.department || "",

          currentCourse: currentEducation.course || "",

          currentSemester: currentEducation.semester || "",

          currentRegistration: currentEducation.registration || "",

          currentRoll: currentEducation.roll || "",

          // =========================
          // Primary
          // =========================

          primarySchoolName: primary.schoolName || "",
          primarySchoolAddress: primary.address || "",
          primaryPassingYear: primary.passingYear || "",

          // =========================
          // Secondary
          // =========================

          secondarySchoolName: secondary.schoolName || "",
          secondarySchoolAddress: secondary.address || "",
          secondaryPassingYear: secondary.passingYear || "",

          // =========================
          // Higher Secondary
          // =========================

          higherSecondarySchoolName: higherSecondary.schoolName || "",

          higherSecondarySchoolAddress: higherSecondary.address || "",

          higherSecondaryPassingYear: higherSecondary.passingYear || "",

          // =========================
          // Honours
          // =========================

          honoursSchoolName: honours.schoolName || "",
          honoursSchoolAddress: honours.address || "",
          honoursPassingYear: honours.passingYear || "",

          // =========================
          // Masters
          // =========================

          mastersSchoolName: masters.schoolName || "",
          mastersSchoolAddress: masters.address || "",
          mastersPassingYear: masters.passingYear || "",

          // =========================
          // JLPT
          // =========================

          JLPTLevel: JLPT.level || "",
          JLPTScore: JLPT.score || "",
          JLPTRollNumber: JLPT.rollNumber || "",
          JLPTExamDate: JLPT.examDate || "",
          JLPTExpectedExamDate: JLPT.expectedExamDate || "",

          // =========================
          // NAT
          // =========================

          NATLevel: NAT.level || "",
          NATScore: NAT.score || "",
          NATRollNumber: NAT.rollNumber || "",
          NATExamDate: NAT.examDate || "",
          NATExpectedExamDate: NAT.expectedExamDate || "",

          // =========================
          // JLCT
          // =========================

          JLCTLevel: JLCT.level || "",
          JLCTScore: JLCT.score || "",
          JLCTRollNumber: JLCT.rollNumber || "",
          JLCTExamDate: JLCT.examDate || "",
          JLCTExpectedExamDate: JLCT.expectedExamDate || "",

          // =========================
          // JPT
          // =========================

          JPTLevel: JPT.level || "",
          JPTScore: JPT.score || "",
          JPTRollNumber: JPT.rollNumber || "",
          JPTExamDate: JPT.examDate || "",
          JPTExpectedExamDate: JPT.expectedExamDate || "",

          // =========================
          // Top J
          // =========================

          Top_JLevel: TopJ.level || "",
          Top_JScore: TopJ.score || "",
          Top_JRollNumber: TopJ.rollNumber || "",
          Top_JExamDate: TopJ.examDate || "",
          Top_JExpectedExamDate: TopJ.expectedExamDate || "",

          // =========================
          // J-Test
          // =========================

          J_TestLevel: JTest.level || "",
          J_TestScore: JTest.score || "",
          J_TestRollNumber: JTest.rollNumber || "",
          J_TestExamDate: JTest.examDate || "",
          J_TestExpectedExamDate: JTest.expectedExamDate || "",
        };

        // =====================================================
        // EXISTING PHOTOS
        // =====================================================

        const studentPhoto = info.studentPhoto || student.studentPhoto || "";

        const sponsorPhoto = sponsor.sponsorPhoto || student.sponsorPhoto || "";

        setExistingStudentPhoto(studentPhoto);
        setExistingSponsorPhoto(sponsorPhoto);

        // =====================================================
        // PUT DATA INTO FORM
        // =====================================================

        reset(formData);

        console.log("Form Data:", formData);
      } catch (error) {
        console.error(error);

        Swal.fire({
          icon: "error",
          title: "Failed",
          text:
            error.response?.data?.message ||
            "Student information could not be loaded.",
        });

        navigate("/dashboard");
      } finally {
        setFetching(false);
      }
    };

    loadStudent();
  }, [id, reset, navigate]);

  // =========================================================
  // SUBMIT
  // =========================================================

  const onSubmit = async (data) => {
    try {
      const phoneFields = [
        {
          key: "studentPhone",
          label: "Student Number",
        },
        {
          key: "studentAltPhone",
          label: "Student Another Number",
        },
        {
          key: "studentFatherPhone",
          label: "Father Number",
        },
        {
          key: "studentMotherPhone",
          label: "Mother Number",
        },
      ];

      // =====================================================
      // PHONE VALIDATION
      // =====================================================

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

      // =====================================================
      // DUPLICATE PHONE CHECK
      // =====================================================

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
      setProgressText(isEditMode ? "Preparing update..." : "Preparing data...");

      // =====================================================
      // IMAGES
      // =====================================================

      setProgress(35);
      setProgressText("Processing images...");

      let studentPhoto = existingStudentPhoto;
      let sponsorPhoto = existingSponsorPhoto;

      const hasNewStudentPhoto =
        data.studentPhoto &&
        data.studentPhoto instanceof FileList &&
        data.studentPhoto.length > 0;

      const hasNewSponsorPhoto =
        data.sponsorPhoto &&
        data.sponsorPhoto instanceof FileList &&
        data.sponsorPhoto.length > 0;

      if (hasNewStudentPhoto || hasNewSponsorPhoto) {
        const image = await uploadImages(data, backendBaseURL);

        if (image?.studentPhoto) {
          studentPhoto = image.studentPhoto;
        }

        if (image?.sponsorPhoto) {
          sponsorPhoto = image.sponsorPhoto;
        }
      }

      data.studentPhoto = studentPhoto;
      data.sponsorPhoto = sponsorPhoto;

      // =====================================================
      // BUILD PAYLOAD
      // =====================================================

      const payload = buildPayload(data);

      // Student DOB
      if (payload.studentInformation) {
        payload.studentInformation.studentDob = formatDate(
          payload.studentInformation.studentDob,
        );
      }

      // Family DOB
      if (Array.isArray(payload.familyInformation)) {
        payload.familyInformation = payload.familyInformation.map((member) => ({
          ...member,
          dob: formatDate(member.dob),
        }));
      }

      setProgress(75);

      setProgressText(
        isEditMode ? "Updating information..." : "Saving information...",
      );

      // =====================================================
      // POST / PUT
      // =====================================================

      if (isEditMode) {
        await updateStudent(id, payload);
      } else {
        await axios.post(`${backendBaseURL}/api/data`, payload);
      }

      setProgress(100);
      setProgressText("Completed.");

      await Swal.fire({
        icon: "success",
        title: isEditMode ? "Updated Successfully" : "Success",

        text: isEditMode
          ? "Student information updated successfully."
          : "Application submitted successfully.",

        timer: 1500,
        showConfirmButton: false,
      });

      if (isEditMode) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);

      Swal.fire({
        icon: "error",
        title: isEditMode ? "Update Failed" : "Submission Failed",

        text:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong.",

        timer: 2500,
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

  // =========================================================
  // FETCHING
  // =========================================================

  if (fetching) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-violet-700" />

          <p className="font-semibold text-gray-700">
            Loading student information...
          </p>
        </div>
      </div>
    );
  }

  // =========================================================
  // UI
  // =========================================================

  return (
    <FormProvider {...methods}>
      {loading && (
        <div className="fixed left-0 right-0 top-0 z-50 bg-white p-2 shadow">
          <div className="mb-1 text-center text-sm font-semibold">
            {progressText}
          </div>

          <progress
            className="progress progress-primary w-full"
            value={progress}
            max="100"
          />
        </div>
      )}

      <form
        className="space-y-2 max-w-7xl mx-auto"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <StudentInformation existingPhoto={existingStudentPhoto} />

        <SponsorInformation existingPhoto={existingSponsorPhoto} />

        <FamilyInformation />

        <EducationalInformation />

        <CurrentEducationalInformation />

        <JapaneseLanguage />

        <Footer />

        <div className="fixed bottom-2 left-0 right-0 mt-8 text-center">
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading
              ? isEditMode
                ? "Updating..."
                : "Submitting..."
              : isEditMode
                ? "Update Information"
                : "Submit Information"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Application;
