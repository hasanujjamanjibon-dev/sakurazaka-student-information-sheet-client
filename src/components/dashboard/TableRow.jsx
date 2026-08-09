import { Eye, Pencil, Printer, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

export default function TableRow({ serial, student, onDelete }) {
  const info = student.studentInformation || {};
  console.log("Student Info:", student);
  const sponsor = student.sponsorInformation || {};

  const studentName = info.studentName
    ? info.studentName.charAt(0).toUpperCase() + info.studentName.slice(1)
    : "";

  const sponsorName = sponsor.sponsorName
    ? sponsor.sponsorName.charAt(0).toUpperCase() + sponsor.sponsorName.slice(1)
    : "";

  return (
    <tr className="transition-colors hover:bg-gray-50">
      {/* Serial */}
      <td className="min-w-[75px] px-4 py-4 text-center whitespace-nowrap">
        {formatDate(student.createdAt)}
      </td>

      {/* Student Image */}
      <td className="min-w-[100px] px-4 py-4">
        <div className="flex justify-center">
          <img
            src={info.studentPhoto}
            alt=""
            className="h-16 w-16 rounded-xl border border-[#5B1C1C] object-fill shadow"
          />
        </div>
      </td>

      {/* Student */}
      <td className="min-w-[210px] px-4 py-4">
        <h3 className="font-semibold text-[#6A1B2E] whitespace-nowrap">
          {studentName}
        </h3>

        <p className="mt-1 text-sm text-gray-500 whitespace-nowrap">
          {info.studentPhone}
        </p>
      </td>

      {/* Sponsor */}
      <td className="min-w-[180px] px-4 py-4">
        <h3 className="font-medium text-gray-800 whitespace-nowrap">
          {sponsorName}
        </h3>

        <p className="mt-1 text-sm text-gray-500 whitespace-nowrap">
          {sponsor.sponsorPhone}
        </p>
      </td>

      {/* DOB */}
      <td className="min-w-[140px] px-4 py-4 text-center whitespace-nowrap">
        {info.studentDob.replaceAll(" ", "-")}
      </td>

      {/* Photo URLs */}
      <td className="min-w-[190px] px-4 py-4">
        <div className="space-y-1 whitespace-nowrap">
          <a
            href={info.studentPhoto}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            Student Photo URL
          </a>

          <a
            href={sponsor.sponsorPhoto}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            Sponsor Photo URL
          </a>
        </div>
      </td>

      {/* Actions */}
      <td className="min-w-[190px] px-4 py-4">
        <div className="flex items-center justify-center gap-2 whitespace-nowrap">
          {/* View */}
          <Link
            to={`/student/${student._id}`}
            className="flex h-8 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-blue-200 bg-blue-50 text-blue-700 transition hover:bg-blue-100"
          >
            <Eye size={14} />
          </Link>

          {/* Edit */}
          <Link
            to={`/edit/${student._id}`}
            className="flex h-8 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-amber-200 bg-amber-50 text-amber-700 transition hover:bg-amber-100"
          >
            <Pencil size={14} />
          </Link>

          {/* Print */}
          <button
            type="button"
            className="flex h-8 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 transition hover:bg-emerald-100"
          >
            <Printer size={14} />
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(student)}
            className="flex h-8 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-red-200 bg-red-50 text-red-700 transition hover:bg-red-100"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}
