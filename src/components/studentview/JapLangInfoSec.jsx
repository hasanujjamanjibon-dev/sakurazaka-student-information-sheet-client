import React from "react";

function JapLangInfoSec() {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (JAPANESE LANGUAGE COURSE, TEST, SCORE INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#253488]  rounded-[10px] bg-white box-border">
        <table className="print-table-fix w-full min-w-[950px] border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS */}
          <colgroup>
            <col className="w-[5%]" />
            <col className="w-[22%]" />
            <col className="w-[13%]" />
            <col className="w-[10%]" />
            <col className="w-[20%]" />
            <col className="w-[15%]" />
            <col className="w-[15%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#253488]">
              <th
                colSpan={7}
                className="bg-[#253488] text-white p-3 align-middle whitespace-nowrap"
              >
                <div className="flex items-center gap-2 font-extrabold text-[16px] md:text-[20px] leading-tight print:text-[13px]">
                  <span className="font-black">৬.</span>
                  <span>জাপানিজ ভাষা শিক্ষা কোর্স, টেস্ট, স্কোর ইনফরমেশন</span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                    (JAPANESE LANGUAGE COURSE, TEST, SCORE INFORMATION)
                  </span>
                </div>
              </th>
            </tr>

            {/* TABLE COLUMN TITLES */}
            <tr className="border-b-[3px] border-[#253488] bg-[#eaedfa] text-[#090909] font-bold text-[14px] lg:text-[16px]">
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                ক্রমিক
              </th>
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                কোর্সের নাম <br className="hidden sm:inline" />
                <span className="font-[Arial,Helvetica,sans-serif] text-[0.9em] font-semibold">
                  (JLPT/NAT/JLCT/JPT)
                </span>
              </th>
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                লেভেল -{" "}
                <span className="font-[Arial,Helvetica,sans-serif]">N4/N5</span>
              </th>
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                স্কোর
              </th>
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                রোল/রেজিস্ট্রেশন নাম্বার
              </th>
              <th className="p-2.5 border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                পরীক্ষার তারিখ
              </th>
              <th className="p-2.5 text-center ">
                সংভাব্য পরীক্ষার তারিখ
              </th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#253488]">
            {/* ROW 1 */}
            <tr>
              <td className="p-2.5 font-extrabold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                01.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                JLPT/NAT/JLCT/JPT
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                N4/N5
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                180
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                1234567890
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
            </tr>

            {/* ROW 2 */}
            <tr>
              <td className="p-2.5 font-extrabold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                02.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                JLPT/NAT/JLCT/JPT
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                N4/N5
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                180
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                1234567890
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
            </tr>

            {/* ROW 3 */}
            <tr>
              <td className="p-2.5 font-extrabold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                03.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                JLPT/NAT/JLCT/JPT
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                N4/N5
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                180
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                1234567890
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
            </tr>

            {/* ROW 4 */}
            <tr>
              <td className="p-2.5 font-extrabold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                04.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                JLPT/NAT/JLCT/JPT
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                N4/N5
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                180
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                1234567890
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                দিন-মাস-বছর
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default JapLangInfoSec;
