import { Eye, Pencil, Trash2, User, Phone, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";

export default function StudentCard({ student, onDelete }) {
  const info = student.studentInformation;
  const sponsor = student.sponsorInformation;

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      <div className="p-5">
        <div className="flex gap-4">
          {/* Photo */}
          <div className="flex-shrink-0">
            <img
              src={info.studentPhoto}
              alt={info.studentName}
              className="w-24 h-28 rounded-xl object-cover border border-gray-200"
            />
          </div>

          {/* Right Side */}
          <div className="flex-1 min-w-0">
            {/* Name */}
            <h2 className="text-xl font-bold text-[#6A1B2E] truncate">
              {info.studentName}
            </h2>

            {/* Sponsor */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                <User size={16} className="text-blue-600" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Sponsor Name</p>

                <p className="font-medium text-gray-700">
                  {sponsor.sponsorName}
                </p>
              </div>
            </div>

            {/* DOB */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <CalendarDays size={16} className="text-green-600" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Date of Birth</p>

                <p className="font-medium text-gray-700">{info.studentDob}</p>
              </div>
            </div>

            {/* Student Phone */}
            <div className="mt-3 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center">
                <Phone size={16} className="text-purple-600" />
              </div>

              <div>
                <p className="text-xs text-gray-400">Student Number</p>

                <p className="font-medium text-gray-700">{info.studentPhone}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 my-5" />

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-3">
          <Link
            to={`/student/${student._id}`}
            className="h-11 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center gap-2 font-medium transition"
          >
            <Eye size={18} />
            View
          </Link>

          <Link
            to={`/edit/${student._id}`}
            className="h-11 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-600 flex items-center justify-center gap-2 font-medium transition"
          >
            <Pencil size={18} />
            Edit
          </Link>

          <button
            onClick={() => onDelete(student)}
            className="h-11 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center gap-2 font-medium transition"
          >
            <Trash2 size={18} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
