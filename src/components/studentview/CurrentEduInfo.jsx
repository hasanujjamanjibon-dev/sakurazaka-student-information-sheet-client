import React from "react";

function CurrentEduInfo() {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (CURRENT EDUCATIONAL INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#8e24aa]  rounded-[10px] bg-white box-border">
        <table className="print-table-fix w-full min-w-[950px] border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS */}
          <colgroup>
            <col className="w-[42%]" />
            <col className="w-[29%]" />
            <col className="w-[29%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER (HEADER TITLE & CHECKBOXES IN SAME LINE)
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#8e24aa] bg-[#8e24aa]">
              <th colSpan={3} className="text-white px-3.5 py-2.5 align-middle">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  {/* LEFT: TITLE */}
                  <div className="flex items-center gap-2 font-extrabold text-[16px] md:text-[19px] leading-tight print:text-[13px] whitespace-nowrap">
                    <span className="font-black">৫.</span>
                    <span>বর্তমান পড়াশুনার তথ্য</span>
                    <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                      (CURRENT EDUCATIONAL INFORMATION)
                    </span>
                  </div>

                  {/* RIGHT: CHECKBOXES (SAME HEADER ROW) */}
                  <div className="flex items-center gap-4 sm:gap-6 text-[14px] md:text-[15px] font-bold text-white whitespace-nowrap">
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-semibold select-none">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-purple-950 bg-white border-none rounded"
                      />
                      <span>ভর্তি হয়েছি</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-semibold select-none">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-purple-950 bg-white border-none rounded"
                      />
                      <span>ভর্তি হয়নি</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 cursor-pointer font-semibold select-none">
                      <input
                        type="checkbox"
                        className="w-4 h-4 accent-purple-950 bg-white border-none rounded"
                      />
                      <span>ভর্তি হবো</span>
                    </label>
                  </div>
                </div>
              </th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#8e24aa]">
            {/* ROW 1: HEADERS */}
            <tr className="bg-[#f3e5f5] text-[#090909] font-bold text-[15px] lg:text-[17px]">
              <td className="p-2.5 border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap">
                কলেজ/বিশ্ববিদ্যালয়ের নাম
              </td>
              <td className="p-2.5 border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap">
                ডিপার্টমেন্ট
              </td>
              <td className="p-2.5 text-center whitespace-nowrap">
                কোন বর্ষে/সেমিস্টারে পড়ছেন
              </td>
            </tr>

            {/* ROW 1: PLACEHOLDERS */}
            <tr>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                কলেজ/বিশ্ববিদ্যালয়ের এর নাম ইংরেজিতে লিখতে হবে
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                যেমনঃ Accounting, Economics, Chemistry, Pass Course etc.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                যেমনঃ ২য় বর্ষ / ৩য় সেমিস্টার
              </td>
            </tr>

            {/* ROW 2: HEADERS */}
            <tr className="bg-[#f3e5f5] text-[#090909] font-bold text-[15px] lg:text-[17px]">
              <td className="p-2.5 border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap">
                কোর্সের নাম
              </td>
              <td className="p-2.5 border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap">
                ক্লাস রোল/আইডি নং
              </td>
              <td className="p-2.5 text-center whitespace-nowrap">
                রেজিস্ট্রেশন নং
              </td>
            </tr>

            {/* ROW 2: PLACEHOLDERS */}
            <tr>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                যেমনঃ B.Sc/B.B.A/B.S.S/B.A etc.
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#8e24aa] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                কলেজ আইডি কার্ড অনুযায়ী
              </td>
              <td className="p-2.5 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                আইডি কার্ড অনুযায়ী (যদি থাকে)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CurrentEduInfo;
