import { AlertTriangle } from "lucide-react";

export default function EduInfo({ data }) {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (EDUCATIONAL INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#c01823]  rounded-[10px]  box-border">
        <table className="print-table-fix w-full min-w-[950px] border-collapse table-fixed text-left">
          {/* COLUMN WIDTH DEFINITIONS */}
          <colgroup>
            <col className="w-[23%]" />
            <col className="w-[37%]" />
            <col className="w-[30%]" />
            <col className="w-[10%]" />
          </colgroup>

          {/* ===================================================
              SECTION HEADER
          =================================================== */}
          <thead>
            <tr className="border-b-[3px] border-[#c01823]">
              <th
                colSpan={2}
                className="bg-[#c01823] text-white p-3 align-middle border-r-[3px] border-[#c01823] whitespace-nowrap"
              >
                <div className="flex items-center gap-2 font-bold text-[16px] md:text-[20px] leading-tight print:text-[13px]">
                  <span className="font-black">৪.</span>
                  <span>পড়াশুনার তথ্য</span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                    (EDUCATIONAL INFORMATION)
                  </span>
                </div>
              </th>
              <th
                colSpan={2}
                className="p-3 align-middle  text-center whitespace-nowrap"
              >
                <div className="flex items-center justify-center gap-1.5 text-[14px] md:text-[16px] font-medium text-[#c01823] leading-tight print:text-[11px]">
                  <AlertTriangle
                    className="w-5 h-5 shrink-0 text-[#c01823] print:w-4 print:h-4"
                    strokeWidth={3}
                  />
                  <span>বিঃদ্রঃ ইংরেজিতে অবশ্যই পূরণ করতে হবে ।</span>
                </div>
              </th>
            </tr>

            {/* TABLE COLUMN TITLES */}
            <tr className="border-b-[3px] border-[#c01823] bg-[#fde8e8] text-[#090909] font-bold text-[15px] lg:text-[17px]">
              <th className="p-2.5 border-r-[3px] border-[#c01823] text-center whitespace-nowrap">
                শিক্ষার ধাপ
              </th>
              <th className="p-2.5 border-r-[3px] border-[#c01823] text-center whitespace-nowrap">
                স্কুল/কলেজ/বিশ্ববিদ্যালয়ের নাম
              </th>
              <th className="p-2.5 border-r-[3px] border-[#c01823] text-center whitespace-nowrap">
                স্কুল/কলেজ/বিশ্ববিদ্যালয়ের ঠিকানা
              </th>
              <th className="p-2.5 text-center whitespace-nowrap">পাশের সন</th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#c01823]">
            {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <tr key={index}>
                  {/* Education Level (PRIMARY, SECONDARY, etc.) */}
                  <td className="p-2.5 font-bold text-[#090909] text-[14px] lg:text-[16px]  border-r-[3px] border-[#c01823] whitespace-nowrap font-[Arial,sans-serif]">
                    {item.level?.toUpperCase()}
                    {item.level?.toLowerCase() === "primary" && (
                      <span className="text-[#f22914]"> *</span>
                    )}
                  </td>

                  {/* School / Institution Name */}
                  <td className="p-2 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[12px] lg:text-[14px] align-middle border-r-[3px] border-[#c01823] whitespace-normal break-words leading-tight">
                    {item.schoolName}
                  </td>

                  {/* Address */}
                  <td className="p-2 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[12px] lg:text-[14px] align-middle border-r-[3px] border-[#c01823] whitespace-normal break-words leading-tight">
                    {item.address}
                  </td>

                  {/* Passing Year */}
                  <td className="p-2.5 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap">
                    {item.passingYear}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
