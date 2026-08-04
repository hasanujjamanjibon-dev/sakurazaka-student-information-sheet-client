import { Eye, Pencil, Printer, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function TableRow({ serial, student, onDelete }) {
  const info = student.studentInformation || {};
  const sponsor = student.sponsorInformation || {};

  return (
    <tr className="border-b border-gray-100 hover:bg-[#FFF8F6] transition">
      <td className="px-4 py-4 text-center text-2xl">{serial}.</td>

      {/* Student Image */}
      <td className="px-4 py-4">
        <img
          src={info.studentPhoto}
          alt=""
          className="w-16 h-16 rounded-xl object-fill border border-[#5B1C1C] shadow"
        />
      </td>

      {/* Student */}

      <td className="px-4 py-4">
        <h3 className="font-semibold text-[#6A1B2E]">
          {info.studentName?.toUpperCase()}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{info.studentPhone}</p>
      </td>

      {/* Sponsor */}

      <td className="px-4 py-4">
        <h3 className="font-medium text-gray-800">
          {sponsor.sponsorName?.toUpperCase()}
        </h3>

        <p className="text-sm text-gray-500 mt-1">{sponsor.sponsorPhone}</p>
      </td>

      {/* DOB */}

      <td className="px-4 py-4 whitespace-nowrap">{info.studentDob}</td>

      {/* Student Photo Link */}

      <td className="px-4 py-4 max-w-[220px]">
        <a
          href={info.studentPhoto}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline truncate block "
        >
          Student Photo URL
        </a>
        <a
          href={sponsor.sponsorPhoto}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:underline truncate block"
        >
          Sponsor Photo URL
        </a>
      </td>



      {/* Actions */}

      <td className="px-4 py-4">
        <div className="grid grid-cols-4 gap-2">
          {/* View */}
          <Link
            to={`/student/${student._id}`}
            className="flex items-center cursor-pointer justify-center gap-1 rounded-lg bg-blue-50 border border-blue-200 px-2 py-2 text-xs font-medium text-blue-700 hover:bg-blue-100 transition"
          >
            <Eye size={14} />
          </Link>

          {/* Edit */}
          <Link
            to={`/edit/${student._id}`}
            className="flex items-center cursor-pointer justify-center gap-1 rounded-lg bg-amber-50 border border-amber-200 px-2 py-2 text-xs font-medium text-amber-700 hover:bg-amber-100 transition"
          >
            <Pencil size={14} />
          </Link>

          {/* Print */}
          <button
            // onClick={() => onPrint(student)}
            className="flex items-center justify-center cursor-pointer gap-1 rounded-lg bg-emerald-50 border border-emerald-200 px-2 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-100 transition"
          >
            <Printer size={14} />
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(student)}
            className="flex items-center justify-center cursor-pointer gap-1 rounded-lg bg-red-50 border border-red-200 px-2 py-2 text-xs font-medium text-red-700 hover:bg-red-100 transition"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}
