export default function TableHead() {
  return (
    <thead className="bg-gradient-to-r from-[#5B1C1C] via-[#6A1B2E] to-[#203864] text-white sticky top-0 z-10">
      <tr className="bg-gradient-to-r from-[#5B1C1C] via-[#6A1B2E] to-[#203864] text-white">
        <th className="px-6 py-4  font-semibold text-center">Sl No.</th>
        <th className="px-6 py-4  font-semibold text-center w-[120px]">
          Photo
        </th>

        <th className="px-4 py-4  font-semibold text-center">Student Name</th>

        <th className="px-4 py-4  font-semibold text-center">Sponsor Name</th>

        <th className="px-4 py-4  font-semibold text-center">D.O.B.</th>

        <th className="px-4 py-4  font-semibold text-center">Photo URL</th>

        {/* <th className="px-4 py-4 text-left font-semibold">Photo URL</th> */}

        <th className="px-4 py-4 text-center font-semibold text-center w-[220px]">
          Actions
        </th>
      </tr>
    </thead>
  );
}
