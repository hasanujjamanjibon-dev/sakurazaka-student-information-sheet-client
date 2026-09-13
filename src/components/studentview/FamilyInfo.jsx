import React from "react";

const FamilyInfo = () => {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (MATCHING ALL OTHER SECTIONS)
      ===================================================== */}
      <div className="w-full overflow-hidden border-[2px] border-[#e5007d]  rounded-[10px] bg-white box-border print:border-[2px]">
        <table className="w-full border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS (TOTAL = 100%) */}
          <colgroup>
            <col className="w-[8%]" />
            <col className="w-[38%]" />
            <col className="w-[16%]" />
            <col className="w-[20%]" />
            <col className="w-[18%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER (HEADER TITLE & CHECKBOXES)
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#e5007d] bg-[#e5007d] print:border-b-[2px]">
              <th
                colSpan={5}
                className="text-white px-3 py-2 sm:px-4 sm:py-2.5 align-middle print:py-1.5 print:px-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 print:flex-nowrap">
                  {/* LEFT: TITLE */}
                  <div className="flex items-center gap-1.5 sm:gap-2 font-extrabold text-[13px] sm:text-[15px] md:text-[17px] leading-tight whitespace-nowrap print:text-[11px]">
                    <span className="font-black">৩.</span>
                    <span>ফ্যামিলি ইনফরমেশন</span>
                    <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                      (FAMILY INFORMATION)
                    </span>
                  </div>

                  {/* RIGHT: CHECKBOXES */}
                  <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-[13px] md:text-[13.5px] font-bold text-white whitespace-nowrap print:text-[9.5px] print:gap-1.5">
                    {/* FATHER CHECKBOX */}
                    <div className="flex items-center gap-1">
                      <span>বাবা বেঁচে আছেন কি না?</span>
                      <label className="inline-flex items-center gap-0.5 cursor-pointer font-semibold select-none ml-0.5">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-pink-950 bg-white border-none rounded print:w-3 print:h-3"
                        />
                        <span>হ্যাঁ</span>
                      </label>
                      <label className="inline-flex items-center gap-0.5 cursor-pointer font-semibold select-none">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-pink-950 bg-white border-none rounded print:w-3 print:h-3"
                        />
                        <span>না</span>
                      </label>
                    </div>

                    <div className="h-3.5 sm:h-4 w-[1px] bg-white/50 print:h-3"></div>

                    {/* MOTHER CHECKBOX */}
                    <div className="flex items-center gap-1">
                      <span>মা বেঁচে আছেন কি না?</span>
                      <label className="inline-flex items-center gap-0.5 cursor-pointer font-semibold select-none ml-0.5">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-pink-950 bg-white border-none rounded print:w-3 print:h-3"
                        />
                        <span>হ্যাঁ</span>
                      </label>
                      <label className="inline-flex items-center gap-0.5 cursor-pointer font-semibold select-none">
                        <input
                          type="checkbox"
                          className="w-3.5 h-3.5 sm:w-4 sm:h-4 accent-pink-950 bg-white border-none rounded print:w-3 print:h-3"
                        />
                        <span>না</span>
                      </label>
                    </div>
                  </div>
                </div>
              </th>
            </tr>

            {/* TABLE COLUMN TITLES */}
            <tr className="border-b-[3px] border-[#e5007d] bg-[#fce4ec] text-[#090909] font-bold text-[13px] sm:text-[15px] lg:text-[16px] print:border-b-[2px] print:text-[11px]">
              <th className="p-2 border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1">
                ক্রমিক নং
              </th>
              <th className="p-2 border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1">
                সম্পূর্ণ নাম
              </th>
              <th className="p-2 border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1">
                সম্পর্ক
              </th>
              <th className="p-2 border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1">
                জন্ম তারিখ
              </th>
              <th className="p-2 text-center whitespace-nowrap print:p-1">
                পেশা
              </th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#e5007d] print:divide-y-[2px]">
            {/* ROW 1: FATHER */}
            <tr>
              <td className="p-2 font-extrabold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                01.
              </td>
              <td className="p-2 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                সার্টিফিকেট অনুযায়ী ইংরেজি বড় হাতের অক্ষরে লিখতে হবে
              </td>
              <td className="p-2 font-bold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                বাবা
              </td>
              <td className="p-2 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                যেমনঃ 01-Jan-2026
              </td>
              <td className="p-2 align-middle whitespace-nowrap print:p-1">
                {/* Empty field */}
              </td>
            </tr>

            {/* ROW 2: MOTHER */}
            <tr>
              <td className="p-2 font-extrabold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                02.
              </td>
              <td className="p-2 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                সার্টিফিকেট অনুযায়ী ইংরেজি বড় হাতের অক্ষরে লিখতে হবে
              </td>
              <td className="p-2 font-bold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                মা
              </td>
              <td className="p-2 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                যেমনঃ 01-Jan-2026
              </td>
              <td className="p-2 align-middle whitespace-nowrap print:p-1">
                {/* Empty field */}
              </td>
            </tr>

            {/* ROW 3: SIBLING */}
            <tr>
              <td className="p-2 font-extrabold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                03.
              </td>
              <td className="p-2 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                ইংরেজি বড় হাতের অক্ষরে লিখতে হবে
              </td>
              <td className="p-2 font-bold text-[#090909] text-[13px] sm:text-[15px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap print:border-r-[2px] print:p-1 print:text-[10px]">
                ভাই/বোন
              </td>
              <td className="p-2 text-[#bfc0c2] font-[Arial,Helvetica,sans-serif] text-[12px] sm:text-[14px] align-middle border-r-[3px] border-[#e5007d] text-center whitespace-nowrap overflow-hidden text-ellipsis print:border-r-[2px] print:p-1 print:text-[9.5px]">
                যেমনঃ 01-Jan-2026
              </td>
              <td className="p-2 align-middle whitespace-nowrap print:p-1">
                {/* Empty field */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default FamilyInfo;
