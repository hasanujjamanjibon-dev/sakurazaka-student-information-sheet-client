import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Edit3,
  User,
  Users,
  GraduationCap,
  Languages,
  BriefcaseBusiness,
  Phone,
  CalendarDays,
  MapPin,
  CreditCard,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

import { getStudent } from "../services/studentApi";

// =====================================================
// Helper Components
// =====================================================

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-gray-200 pb-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6A1B2E]/10">
        <Icon size={19} className="text-[#6A1B2E]" />
      </div>

      <h2 className="text-base font-bold text-[#6A1B2E] sm:text-lg">{title}</h2>
    </div>
  );
}

function InfoItem({ label, value, icon: Icon }) {
  const displayValue =
    value !== undefined && value !== null && String(value).trim() !== ""
      ? value
      : "N/A";

  return (
    <div className="min-w-0">
      <p className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-400">
        {Icon && <Icon size={12} />}
        {label}
      </p>

      <p className="break-words rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5 text-sm font-medium text-gray-800">
        {displayValue}
      </p>
    </div>
  );
}

function EmptyState({ text = "No information available." }) {
  return (
    <div className="rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-8 text-center">
      <p className="text-sm text-gray-400">{text}</p>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "N/A";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function formatDateTime(value) {
  if (!value) return "N/A";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function Photo({ src, alt }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return (
      <div className="flex h-36 w-32 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 sm:h-40 sm:w-36">
        <User size={42} className="text-gray-300" />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className="h-36 w-32 rounded-xl border border-gray-200 bg-gray-100 object-cover sm:h-40 sm:w-36"
    />
  );
}

// =====================================================
// Main Component
// =====================================================

export default function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ===================================================
  // Load Student
  // ===================================================

  const loadStudent = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getStudent(id);

      console.log("Student Details Response:", res.data);

      if (!res.data?.success || !res.data?.student) {
        throw new Error("Student information not found.");
      }

      setStudent(res.data.student);
    } catch (err) {
      console.error("Student Details Error:", err);

      setError(
        err.response?.data?.message ||
          err.message ||
          "Unable to load student information.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  // ===================================================
  // Loading
  // ===================================================

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#6A1B2E]/10">
            <Loader2 size={28} className="animate-spin text-[#6A1B2E]" />
          </div>

          <p className="text-sm font-medium text-gray-600">
            Loading student information...
          </p>
        </div>
      </div>
    );
  }

  // ===================================================
  // Error
  // ===================================================

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <AlertCircle size={28} className="text-red-500" />
          </div>

          <h2 className="text-lg font-bold text-gray-800">
            Unable to Load Student
          </h2>

          <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">{error}</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <ArrowLeft size={17} />
              Go Back
            </button>

            <button
              type="button"
              onClick={loadStudent}
              className="flex items-center gap-2 rounded-lg bg-[#6A1B2E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#541523]"
            >
              <RefreshCw size={17} />
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!student) {
    return null;
  }

  // ===================================================
  // Data
  // ===================================================

  const studentInfo = student.studentInformation || {};
  const sponsorInfo = student.sponsorInformation || {};
  const familyInfo = student.familyInformation || [];
  const educationHistory = student.educationalHistory || [];
  const currentEducation = student.currentEducation || {};
  const japaneseTests = student.japaneseLanguageTests || [];

  // ===================================================
  // Render
  // ===================================================

  return (
    <div className="min-h-screen bg-[#f8f8f9]">
      <div className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-5 sm:py-6 lg:px-7">
        {/* =================================================
            TOP BAR
        ================================================= */}

        <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 hover:text-[#6A1B2E]"
              title="Go Back"
            >
              <ArrowLeft size={19} />
            </button>

            <div className="min-w-0">
              <h1 className="truncate text-lg font-bold text-gray-900 sm:text-xl">
                Student Details
              </h1>

              <p className="truncate text-xs text-gray-500 sm:text-sm">
                Student Information & Academic Record
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {student.applicationId && (
              <div className="hidden rounded-lg bg-[#6A1B2E]/5 px-3 py-2 text-right sm:block">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
                  Application ID
                </p>

                <p className="text-sm font-bold text-[#6A1B2E]">
                  {student.applicationId}
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => navigate(`/edit/${student._id}`)}
              className="flex items-center gap-2 rounded-lg bg-[#6A1B2E] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#541523]"
            >
              <Edit3 size={16} />
              <span>Edit</span>
            </button>
          </div>
        </div>

        {/* =================================================
            APPLICATION META
        ================================================= */}

        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Application ID
            </p>

            <p className="mt-1 break-all text-sm font-bold text-[#6A1B2E]">
              {student.applicationId || "N/A"}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Created At
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-700">
              {formatDateTime(student.createdAt)}
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-gray-400">
              Last Updated
            </p>

            <p className="mt-1 text-sm font-semibold text-gray-700">
              {formatDateTime(student.updatedAt)}
            </p>
          </div>
        </div>

        {/* =================================================
            STUDENT INFORMATION
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={User} title="Student Information" />

          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Photo */}

            <div className="flex shrink-0 justify-center lg:w-40 lg:justify-start">
              <div className="text-center">
                <Photo
                  src={studentInfo.studentPhoto}
                  alt={studentInfo.studentName || "Student"}
                />

                <p className="mt-2 text-xs font-medium text-gray-400">
                  Student Photo
                </p>
              </div>
            </div>

            {/* Information */}

            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <InfoItem
                label="Student Name"
                value={studentInfo.studentName}
                icon={User}
              />

              <InfoItem
                label="Date of Birth"
                value={formatDate(studentInfo.studentDob)}
                icon={CalendarDays}
              />

              <InfoItem
                label="Student Phone"
                value={studentInfo.studentPhone}
                icon={Phone}
              />

              <InfoItem
                label="Alternative Phone"
                value={studentInfo.studentAltPhone}
                icon={Phone}
              />

              <InfoItem
                label="Father Phone"
                value={studentInfo.studentFatherPhone}
                icon={Phone}
              />

              <InfoItem
                label="Mother Phone"
                value={studentInfo.studentMotherPhone}
                icon={Phone}
              />

              <div className="sm:col-span-2 lg:col-span-3">
                <InfoItem
                  label="Present Address"
                  value={studentInfo.studentPresentAddress}
                  icon={MapPin}
                />
              </div>
            </div>
          </div>
        </section>

        {/* =================================================
            SPONSOR INFORMATION
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={BriefcaseBusiness} title="Sponsor Information" />

          <div className="flex flex-col gap-6 lg:flex-row">
            {/* Photo */}

            <div className="flex shrink-0 justify-center lg:w-40 lg:justify-start">
              <div className="text-center">
                <Photo
                  src={sponsorInfo.sponsorPhoto}
                  alt={sponsorInfo.sponsorName || "Sponsor"}
                />

                <p className="mt-2 text-xs font-medium text-gray-400">
                  Sponsor Photo
                </p>
              </div>
            </div>

            {/* Information */}

            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <InfoItem
                label="Sponsor Name"
                value={sponsorInfo.sponsorName}
                icon={User}
              />

              <InfoItem
                label="Father Name"
                value={sponsorInfo.sponsorFatherName}
              />

              <InfoItem
                label="Mother Name"
                value={sponsorInfo.sponsorMotherName}
              />

              <InfoItem
                label="Business Name"
                value={sponsorInfo.sponsorBusinessName}
              />

              <InfoItem
                label="Business Category"
                value={sponsorInfo.sponsorBusinessCategory}
              />

              <InfoItem
                label="NID Number"
                value={sponsorInfo.sponsorNidNumber}
                icon={CreditCard}
              />
            </div>
          </div>
        </section>

        {/* =================================================
            FAMILY INFORMATION
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={Users} title="Family Information" />

          {familyInfo.length === 0 ? (
            <EmptyState text="No family information available." />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[650px] border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      SL
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Relation
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Name
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Date of Birth
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Occupation
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {familyInfo.map((member, index) => (
                    <tr
                      key={`${member.relation}-${index}`}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="border-b border-gray-100 px-4 py-3 font-semibold text-gray-400">
                        {index + 1}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-semibold text-[#6A1B2E]">
                        {member.relation || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-800">
                        {member.name || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {formatDate(member.dob)}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {member.occupation || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* =================================================
            EDUCATIONAL HISTORY
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={GraduationCap} title="Educational History" />

          {educationHistory.length === 0 ? (
            <EmptyState text="No educational history available." />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[750px] border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      SL
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Level
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      School / Institution
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Address
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Passing Year
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {educationHistory.map((education, index) => (
                    <tr
                      key={`${education.level}-${index}`}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="border-b border-gray-100 px-4 py-3 font-semibold text-gray-400">
                        {index + 1}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-semibold text-[#6A1B2E]">
                        {education.level || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-800">
                        {education.schoolName || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {education.address || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">
                        {education.passingYear || "N/A"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* =================================================
            CURRENT EDUCATION
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={GraduationCap} title="Current Education" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoItem
              label="Admission Status"
              value={currentEducation.currentAdmissionStatus}
            />

            <InfoItem
              label="University / Institution"
              value={currentEducation.universityName}
            />

            <InfoItem label="Department" value={currentEducation.department} />

            <InfoItem label="Course" value={currentEducation.course} />

            <InfoItem label="Semester" value={currentEducation.semester} />

            <InfoItem
              label="Registration"
              value={currentEducation.registration}
            />

            <InfoItem label="Roll" value={currentEducation.roll} />
          </div>
        </section>

        {/* =================================================
            JAPANESE LANGUAGE TESTS
        ================================================= */}

        <section className="mb-5 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6">
          <SectionTitle icon={Languages} title="Japanese Language Tests" />

          {japaneseTests.length === 0 ? (
            <EmptyState text="No Japanese language test information available." />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full min-w-[900px] border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      SL
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Exam
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Level
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Roll Number
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Score
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Exam Date
                    </th>

                    <th className="border-b border-gray-200 px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-gray-500">
                      Expected Exam Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {japaneseTests.map((test, index) => (
                    <tr
                      key={`${test.exam}-${index}`}
                      className="transition hover:bg-gray-50"
                    >
                      <td className="border-b border-gray-100 px-4 py-3 font-semibold text-gray-400">
                        {index + 1}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-bold text-[#6A1B2E]">
                        {test.exam || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-800">
                        {test.level || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {test.rollNumber || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 font-medium text-gray-700">
                        {test.score || "N/A"}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {formatDate(test.examDate)}
                      </td>

                      <td className="border-b border-gray-100 px-4 py-3 text-gray-700">
                        {formatDate(test.expectedExamDate)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

        {/* =================================================
            BOTTOM ACTIONS
        ================================================= */}

        <div className="flex flex-col-reverse gap-3 pb-6 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50"
          >
            <ArrowLeft size={17} />
            Back to Applications
          </button>

          <button
            type="button"
            onClick={() => navigate(`/edit/${student._id}`)}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#6A1B2E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#541523]"
          >
            <Edit3 size={17} />
            Edit Student
          </button>
        </div>
      </div>
    </div>
  );
}
