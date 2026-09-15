import { CalendarDays, Eye, Pencil, Printer, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";

export default function TableRow({ student, onDelete }) {
  const info = student.studentInformation || {};
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
      <td className="p-4 whitespace-nowrap">
        <div className="inline-flex items-center gap-2 ">
          <CalendarDays size={15} className="text-[#6A1B2E]" />
          <span className="text-sm font-medium text-gray-700">
            {formatDate(student.createdAt).replaceAll(" ", "-")}
          </span>
        </div>
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
      <td className="min-w-[100px] px-4 py-4">
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

      <td className="px-4 py-4 whitespace-nowrap">
        <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
          <CalendarDays size={15} className="text-[#6A1B2E]" />

          <span className="text-sm font-medium text-gray-700">
            {formatDate(
              student.studentInformation?.studentDob
                ? student.studentInformation.studentDob
                : "-",
            ).replaceAll(" ", "-")}
          </span>
        </div>
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
            View Student Photo
          </a>

          <a
            href={sponsor.sponsorPhoto}
            target="_blank"
            rel="noreferrer"
            className="block text-blue-600 hover:underline"
          >
            View Sponsor Photo
          </a>
        </div>
      </td>
      {/* Actions */}
      <td className="min-w-[180px] px-3 py-3">
        <div className="grid grid-cols-2 gap-1.5 w-max mx-auto">
          {/* View */}
          <Link
            to={`/view/${student._id}`}
            className="group inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-blue-200/80 bg-blue-50/80 text-blue-700 text-xs font-bold shadow-xs hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-blue-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Eye
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>View</span>
          </Link>

          {/* Edit */}
          <Link
            to={`/edit/${student._id}`}
            className="group inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-amber-200/80 bg-amber-50/80 text-amber-700 text-xs font-bold shadow-xs hover:bg-amber-600 hover:text-white hover:border-amber-600 hover:shadow-amber-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Pencil
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Edit</span>
          </Link>

          {/* Print */}
          <Link
            to={`/view/${student._id}?print=true`}
            className="group inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-emerald-200/80 bg-emerald-50/80 text-emerald-700 text-xs font-bold shadow-xs hover:bg-emerald-600 hover:text-white hover:border-emerald-600 hover:shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Printer
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Print</span>
          </Link>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(student)}
            className="group inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-rose-200/80 bg-rose-50/80 text-rose-700 text-xs font-bold shadow-xs hover:bg-rose-600 hover:text-white hover:border-rose-600 hover:shadow-rose-500/20 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Trash2
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />
            <span>Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
