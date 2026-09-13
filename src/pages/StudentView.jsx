import StudentInfo from "../components/studentview/StudentInfo";
import SponsorInfo from "../components/studentview/SponsorInfo";
import FamilyInfo from "../components/studentview/FamilyInfo";
import EduInfo from "../components/studentview/EduInfo";
import CurrentEduInfo from "../components/studentview/CurrentEduInfo";
import JapLangInfoSec from "../components/studentview/JapLangInfoSec";
import FooterBtn from "./FooterBtn";

const StudentView = () => {
  return (
    <section className="w-full max-w-[1800px] mx-auto px-1.5 sm:px-2 md:px-2.5 lg:px-4 pt-1.5 sm:pt-2 box-border font-['Noto_Sans_Bengali','Noto_Serif_Bengali','Kalpurush',Arial,sans-serif] print:p-2 print:m-0 print:max-w-full grid grid-cols-1 gap-4 print:gap-2 overflow-hidden overflow_hidden">
      {/* =====================================================
          PRINT SPECIFIC CSS STYLES
      ===================================================== */}
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
            overflow: visible !important;
            width: 100% !important;
            border-radius: 10px !important;
          }
          .print-table-fix {
            width: 100% !important;
            min-width: 100% !important;
            table-layout: fixed !important;
            font-size: 11px !important;
            overflow: hidden !important;
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
      <StudentInfo />
      <SponsorInfo />
      <FamilyInfo />
      <EduInfo />
      <CurrentEduInfo />
      <JapLangInfoSec />
      <FooterBtn />
    </section>
  );
};

export default StudentView;
