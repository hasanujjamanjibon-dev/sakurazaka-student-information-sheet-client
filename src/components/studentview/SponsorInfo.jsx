import React from "react";

export default function SponsorInfo() {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (SPONSOR INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#008744]  rounded-[10px] bg-white box-border">
        <table className="print-table-fix w-full min-w-[950px] border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS (RE-BALANCED TO PREVENT MULTILINE WRAPPING) */}
          <colgroup>
            <col className="w-[24%]" />
            <col className="w-[26%]" />
            <col className="w-[24%]" />
            <col className="w-[26%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#008744]">
              <th
                colSpan={2}
                className="bg-[#008744] text-white p-3.5 align-middle border-r-[3px] border-[#008744] whitespace-nowrap"
              >
                <div className="flex items-center gap-2 font-extrabold text-[16px] md:text-[20px] leading-tight print:text-[13px]">
                  <span className="font-black">২.</span>
                  <span>স্পন্সর ইনফরমেশন</span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                    (SPONSOR INFORMATION)
                  </span>
                </div>
              </th>
              <th colSpan={2} className="p-3.5 align-middle bg-white">
                {/* Right empty header area */}
              </th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#008744]">
            {/* ROW 1: SPONSOR NAME & NID */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                স্পন্সর এর নাম
                <span className="ml-1 text-[#f22914] font-[Arial,sans-serif]">
                  *
                </span>
              </td>
              <td className="p-3 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap overflow-hidden text-ellipsis">
                ইংরেজি বড় হাতের অক্ষরে লিখতে হবে
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                স্পন্সর এর এন.আই.ডি নাম্বার
                <span className="ml-1 text-[#f22914] font-[Arial,sans-serif]">
                  *
                </span>
              </td>
              <td className="p-3 align-middle whitespace-nowrap">
                {/* Empty field */}
              </td>
            </tr>

            {/* ROW 2: SPONSOR FATHER & MOTHER NAME */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                স্পন্সর এর বাবার নাম
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap overflow-hidden text-ellipsis">
                স্পন্সর এর বাবার নাম ইংরেজিতে
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                স্পন্সর এর মায়ের নাম
                <span className="ml-1 text-[#f22914]">*</span>
              </td>
              <td className="p-3 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle whitespace-nowrap overflow-hidden text-ellipsis">
                স্পন্সর এর মায়ের নাম ইংরেজিতে
              </td>
            </tr>

            {/* ROW 3: BUSINESS NAME & CATEGORY */}
            <tr>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                ব্যবসার নাম (যদি থাকে)
              </td>
              <td className="p-3 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap overflow-hidden text-ellipsis">
                ব্যবসার নাম ইংরেজিতে
              </td>
              <td className="p-3 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#008744] whitespace-nowrap">
                ব্যবসার ক্যাটাগরি (যদি থাকে)
              </td>
              <td className="p-3 text-[#bfc0c2] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle whitespace-nowrap overflow-hidden text-ellipsis">
                ব্যবসার ক্যাটাগরি ইংরেজিতে
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
