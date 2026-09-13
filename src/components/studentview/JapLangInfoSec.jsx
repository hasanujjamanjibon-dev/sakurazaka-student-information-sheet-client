function JapLangInfoSec({ data }) {
  console.log(data);

  return (
    <section>
      {/* =====================================================
          MAIN TABLE WRAPPER (JAPANESE LANGUAGE COURSE, TEST, SCORE INFORMATION)
      ===================================================== */}
      <div className="print-scroll-fix w-full overflow-x-auto border-[2px] border-[#253488]  rounded-[10px]  box-border">
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
                <div className="flex items-center gap-2 font-bold text-[16px] md:text-[20px] leading-tight print:text-[13px]">
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
              <th className="p-2.5 text-center ">সম্ভাব্য পরীক্ষার তারিখ</th>
            </tr>
          </thead>

          {/* ===================================================
              TABLE BODY
          =================================================== */}
          <tbody className="divide-y-[3px] divide-[#253488]">
            {data &&
              data.length > 0 &&
              data.map((item, index) => (
                <tr key={index}>
                  {/* সিরিয়াল নম্বর (01, 02...) */}
                  <td className="p-2.5 font-bold text-[#090909] text-[15px] lg:text-[17px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                    {String(index + 1).padStart(2, "0")}.
                  </td>

                  {/* পরীক্ষা (JLPT / NAT / JLCT) */}
                  <td className="p-2.5 text-[#090909] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.exam}
                  </td>

                  {/* লেভেল (N5 / N4) */}
                  <td className="p-2.5 text-[#090909] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                    {item.level}
                  </td>

                  {/* স্কোর / নম্বর */}
                  <td className="p-2.5 text-[#090909] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                    {item.score}
                  </td>

                  {/* রোল নম্বর */}
                  <td className="p-2.5 text-[#090909] font-[Arial,Helvetica,sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap">
                    {item.rollNumber}
                  </td>

                  {/* পরীক্ষার তারিখ */}
                  <td className="p-2.5 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle border-r-[3px] border-[#253488] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.examDate}
                  </td>

                  {/* রেজাল্ট/ইস্যুর তারিখ */}
                  <td className="p-2.5 text-[#090909] font-['Noto_Sans_Bengali',sans-serif] text-[14px] lg:text-[16px] align-middle text-center whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.resultDate || item.issueDate || item.examDate}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default JapLangInfoSec;
