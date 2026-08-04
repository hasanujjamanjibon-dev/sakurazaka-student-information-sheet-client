export default function TableHead() {
  return (
    <thead>
      <tr className="bg-gradient-to-r from-[#5B1C1C] via-[#6A1B2E] to-[#203864] text-white">
        <th className="px-6 py-4 text-left font-semibold ">Sl No.</th>
        <th className="px-6 py-4 text-left font-semibold w-[120px]">Photo</th>

        <th className="px-4 py-4 text-left font-semibold">Student Name</th>

        <th className="px-4 py-4 text-left font-semibold">Sponsor</th>

        <th className="px-4 py-4 text-left font-semibold">D.O.B</th>

        <th className="px-4 py-4 text-left font-semibold">Photo URL</th>

        {/* <th className="px-4 py-4 text-left font-semibold">Photo URL</th> */}

        <th className="px-4 py-4 text-center font-semibold w-[220px]">
          View/Edit/Print/Delete
        </th>
      </tr>
    </thead>
  );
}
