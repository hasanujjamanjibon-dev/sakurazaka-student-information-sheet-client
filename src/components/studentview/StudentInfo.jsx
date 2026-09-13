import React from "react";
import { AlertTriangle } from "lucide-react";
function StudentInfo() {
  return (
    <section>
      {/* =====================================================
          TOP TITLE
      ===================================================== */}
      <div className="print-header-title w-full sm:w-[96%] md:w-[75%] lg:w-[65%] xl:w-[56%] max-w-[1015px] min-h-[43px] sm:min-h-[48px] md:min-h-[52px] lg:h-[clamp(52px,4vw,60px)] mx-auto mb-2.5 px-4 sm:px-5 md:px-7 py-2 flex items-center justify-center box-border bg-[#b51e26] border border-[#1674bd] rounded-full text-white font-[Arial,Helvetica,sans-serif] text-[clamp(15px,2.05vw,30px)] font-extrabold tracking-[0.3px] leading-tight text-center whitespace-normal lg:whitespace-nowrap overflow-hidden">
        SAKURAZAKA – STUDENT INFORMATION SHEET
      </div>

      {/* =====================================================
          MAIN TABLE WRAPPER
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#2178bd]  rounded-[10px] bg-white box-border">
        <table className="print-table-fix w-full min-w-[950px] border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS */}
          <colgroup>
            <col className="w-[23%]" />
            <col className="w-[37%]" />
            <col className="w-[18%]" />
            <col className="w-[22%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#2178bd]">
              <th
                colSpan={2}
                className="bg-[#1978bd] text-white p-3.5 align-middle border-r-[3px] border-[#2178bd]"
              >
                <div className="flex items-center gap-2 font-extrabold text-[16px] md:text-[20px] leading-tight print:text-[13px]">
                  <span className="font-black">১.</span>
                  <span>স্টুডেন্ট ইনফরমেশন</span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                    (STUDENT INFORMATION)
                  </span>
                </div>
              </th>
              <th
                colSpan={2}
                className="
                  p-3.5
                  text-[#ef2020]
                  align-middle
                  text-center
                "
              >
                <div className="flex items-center justify-center gap-1.5 text-[14px] md:text-[16px] font-medium leading-tight print:text-[11px]">
                  <AlertTriangle
                    className="w-5 h-5 shrink-0 text-[#e91919] print:w-4 print:h-4"
                    strokeWidth={3}
                  />
                  <span>বিভিন্ন ইংরেজিতে অবশ্যই পূরণ করতে হবে</span>
                  <span className="font-semibold text-[#ef2020]">(*)</span>
                </div>
              </th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#2178bd]">
            {/* ROW 1: STUDENT NAME & DOB */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                স্টুডেন্ট সম্পূর্ণ নাম
                <span className="ml-1 text-[#f22914] font-[Arial,sans-serif]">
                  *
                </span>
              </td>
              <td className="p-3 text-[#111] font-[Arial,'Noto_Sans_Bengali',sans-serif] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd] break-words">
                —
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                স্টুডেন্ট জন্ম তারিখ
                <span className="ml-1 text-[#f22914] font-[Arial,sans-serif]">
                  *
                </span>
              </td>
              <td className="p-3 text-[#111] font-[Arial,Helvetica,sans-serif] text-[15px] lg:text-[17px] align-middle">
                —
              </td>
            </tr>

            {/* ROW 2: STUDENT PHONE & FATHER PHONE */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                স্টুডেন্ট মোবাইল নাম্বার
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 align-middle border-r-[3px] border-[#2178bd]">
                <div className="flex items-center gap-1.5 font-[Arial,Helvetica,sans-serif] text-[15px] lg:text-[17px]">
                  <span className="font-medium text-[#111]">+88</span>
                </div>
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                বাবার মোবাইল নাম্বার
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 align-middle">
                <div className="flex items-center gap-1.5 font-[Arial,Helvetica,sans-serif] text-[15px] lg:text-[17px]">
                  <span className="font-medium text-[#111]">+88</span>
                </div>
              </td>
            </tr>

            {/* ROW 3: ALT PHONE & MOTHER PHONE */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                স্টুডেন্ট বিকল্প মোবাইল নাম্বার
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 align-middle border-r-[3px] border-[#2178bd]">
                <div className="flex items-center gap-1.5 font-[Arial,Helvetica,sans-serif] text-[15px] lg:text-[17px]">
                  <span className="font-medium text-[#111]">+88</span>
                </div>
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                মায়ের মোবাইল নাম্বার
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 align-middle">
                <div className="flex items-center gap-1.5 font-[Arial,Helvetica,sans-serif] text-[15px] lg:text-[17px]">
                  <span className="font-medium text-[#111]">+88</span>
                </div>
              </td>
            </tr>

            {/* ROW 4: PRESENT ADDRESS */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#2178bd]">
                বর্তমান ঠিকানা
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td
                colSpan={3}
                className="p-3 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle break-words"
              >
                House No., Road No., Area, Police station, District, Postal Code
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default StudentInfo;
