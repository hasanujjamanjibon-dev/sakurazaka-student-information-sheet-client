export default function EduInfo({ data }) {
  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (EDUCATIONAL INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#c01823] rounded-[10px] box-border">
        <table className="print-table-fix w-full min-w-[800px] border-collapse table-auto text-left">
          {/* COLUMN WIDTH DEFINITIONS */}
          <colgroup>
            {/* 1st Column: Takes minimum width required by its text */}
            <col className="w-px whitespace-nowrap" />
            {/* 2nd & 3rd Columns: Divide the remaining space equally */}
            <col className="w-1/2" />
            <col className="w-1/2" />
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
                  <span>পড়াশুনার তথ্য</span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[0.85em]">
                    (EDUCATIONAL INFORMATION)
                  </span>
                </div>
              </th>
              {/* HEADER FILLER FOR THE 3RD COLUMN */}
              <th className="bg-white"></th>
            </tr>

            {/* TABLE COLUMN TITLES */}
            <tr className="border-b-[3px] border-[#c01823] bg-[#fde8e8] text-[#090909] font-bold text-[15px] lg:text-[17px]">
              <th className="p-2.5 border-r-[3px] border-[#c01823] text-center whitespace-nowrap">
                শিক্ষার ধাপ
              </th>
              <th className="p-2.5 border-r-[3px] border-[#c01823] text-center whitespace-nowrap">
                কলেজ/বিশ্ববিদ্যালয়ের নাম
              </th>
              <th className="p-2.5 text-center whitespace-nowrap">
                কলেজ/বিশ্ববিদ্যালয়ের ঠিকানা
              </th>
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
                  <td className="p-2.5 font-bold text-[#090909] text-[14px] lg:text-[16px] border-r-[3px] border-[#c01823] whitespace-nowrap font-[Arial,sans-serif]">
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
                  <td className="p-2 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[12px] lg:text-[14px] align-middle whitespace-normal break-words leading-tight">
                    {item.address}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
