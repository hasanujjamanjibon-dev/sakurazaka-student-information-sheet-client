import { useEffect, useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Loader2, AlertCircle, ArrowLeft, RefreshCw } from "lucide-react";

import StudentInfo from "../components/studentview/StudentInfo";
import SponsorInfo from "../components/studentview/SponsorInfo";
import FamilyInfo from "../components/studentview/FamilyInfo";
import EduInfo from "../components/studentview/EduInfo";
import CurrentEduInfo from "../components/studentview/CurrentEduInfo";
import JapLangInfoSec from "../components/studentview/JapLangInfoSec";
import FooterBtn from "./FooterBtn";
import { getStudent } from "../services/studentApi";

const StudentView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const shouldPrint = searchParams.get("print") === "true";

  const loadStudent = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await getStudent(id);

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

  // ১. স্টুডেন্ট ডাটা ফেচিং
  useEffect(() => {
    if (id) {
      loadStudent();
    }
  }, [id]);

  // ২. অটো-প্রিন্ট লজিক (ডাটা লোড হলে এবং URL-এ ?print=true থাকলে)
  useEffect(() => {
    if (shouldPrint && student) {
      const timer = setTimeout(() => {
        window.print();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [shouldPrint, student]);

  // Loading State
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

  // Error State
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
              <ArrowLeft size={17} /> Go Back
            </button>
            <button
              type="button"
              onClick={loadStudent}
              className="flex items-center gap-2 rounded-lg bg-[#6A1B2E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#541523]"
            >
              <RefreshCw size={17} /> Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!student) return null;

  // Data Extraction
  const studentInfo = student.studentInformation || {};
  const sponsorInfo = student.sponsorInformation || {};
  const familyInfo = student.familyInformation || [];
  const educationHistory = student.educationalHistory || [];
  const currentEducation = student.currentEducation || {};
  const japaneseTests = student.japaneseLanguageTests || [];

  return (
    <section className="w-full font-semibold max-w-[1800px] mx-auto px-1.5 sm:px-2 md:px-2.5 lg:px-4 pt-1.5 sm:pt-2 box-border font-['Noto_Sans_Bengali','Noto_Serif_Bengali','Kalpurush',Arial,sans-serif] print:p-2 print:m-0 print:max-w-full grid grid-cols-1 gap-4 print:gap-2 overflow-hidden bg-white shadow-2xl print:shadow-none">
      {/* PRINT SPECIFIC CSS STYLES */}
      <style>{`
        @media print {
          @page {
            size: A4 portrait;
            margin: 8mm;
          }

          body {
            background: #ffffff !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          .print-scroll-fix {
            width: 100% !important;
            border-radius: 12px !important;
            overflow: hidden !important;
            clip-path: inset(0 round 12px) !important; 
            -webkit-clip-path: inset(0 round 12px) !important;
          }

          .print-table-fix {
            width: 100% !important;
            min-width: 100% !important;
            table-layout: fixed !important;
            border-collapse: collapse !important;
            font-size: 11px !important;
          }

          .print-table-fix th, 
          .print-table-fix td {
            padding: 4px 6px !important;
            font-size: 11px !important;
          }

          .print-header-title {
            font-size: 16px !important;
            height: auto !important;
            min-height: 0 !important;
            padding: 6px 12px !important;
            margin-bottom: 8px !important;
            overflow: hidden !important;
          }
        }
      `}</style>

      <StudentInfo data={studentInfo} />
      <SponsorInfo data={sponsorInfo} />
      <FamilyInfo data={familyInfo} />
      <EduInfo data={educationHistory} />
      <CurrentEduInfo data={currentEducation} />
      <JapLangInfoSec data={japaneseTests} />
      <FooterBtn studentId={student._id} />
    </section>
  );
};

export default StudentView;
