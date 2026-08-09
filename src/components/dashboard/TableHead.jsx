export default function TableHead() {
  return (
    <thead className="bg-[#26365c] text-white sticky top-0 z-10">
      <tr>
        {/* Sl No. */}
        <th className="min-w-[75px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Created At
        </th>

        {/* Photo */}
        <th className="min-w-[100px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Photo
        </th>

        {/* Student Name */}
        <th className="min-w-[210px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Student Name
        </th>

        {/* Sponsor Name */}
        <th className="min-w-[180px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Sponsor Name
        </th>

        {/* DOB */}
        <th className="min-w-[140px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          D.O.B.
          <br />
          (DD-MM-YY)
        </th>

        {/* Photo URL */}
        <th className="min-w-[190px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Photo URL
        </th>

        {/* Actions */}
        <th className="min-w-[190px] px-4 py-4 text-center font-semibold whitespace-nowrap">
          Actions
        </th>
      </tr>
    </thead>
  );
}
