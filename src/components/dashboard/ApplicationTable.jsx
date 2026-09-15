// import TableHead from "./TableHead";
// import TableBody from "./TableBody";

// export default function ApplicationTable({ students, onDelete, loading }) {
//   return (
//     <div className="w-full min-h-[calc(100vh-450px)] overflow-hidden rounded-t-2xl border border-[#eadfdc] bg-white shadow-sm">
//       {/* =========================
//           TABLE SCROLL AREA
//       ========================= */}
//       <div className="h-full overflow-auto">
//         <table className="w-full min-w-275 border-collapse">
//           {/* Header */}
//           <TableHead />

//           {/* Body */}
//           <TableBody
//             students={students}
//             onDelete={onDelete}
//             loading={loading}
//           />
//         </table>
//       </div>
//     </div>
//   );
// }
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { FolderX, Sparkles } from "lucide-react";

export default function ApplicationTable({ students, onDelete, loading }) {
  const isEmpty = !loading && (!students || students.length === 0);

  return (
    <div className="w-full min-h-[calc(100vh-450px)] flex flex-col overflow-hidden rounded-t-2xl border border-[#eadfdc] bg-white shadow-sm">
      {/* =========================
          TABLE SCROLL AREA
      ========================= */}
      <div className="flex-1 flex flex-col overflow-auto">
        <table className="w-full min-w-275 border-collapse">
          {/* Header */}
          <TableHead />

          {/* Body (When Data/Loading Exists) */}
          {!isEmpty && (
            <TableBody
              students={students}
              onDelete={onDelete}
              loading={loading}
            />
          )}
        </table>

        {/* =========================
            FULL HEIGHT & WIDTH EMPTY STATE
        ========================= */}
        {isEmpty && (
          <div className="flex-1 w-full min-h-[300px] flex items-center justify-center p-8 bg-gradient-to-b from-white to-gray-50/50">
            <div className="flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-4 animate-in fade-in zoom-in-95 duration-300">
              {/* Glowing Icon Card */}
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-[#6A1B2E]/10 blur-2xl animate-pulse" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-b from-white to-gray-50 border border-gray-200/80 shadow-xl shadow-gray-200/50">
                  <FolderX className="h-9 w-9 text-[#6A1B2E]" />
                </div>
              </div>

              {/* Text Section */}
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-gray-800 tracking-tight">
                  No Student Applications Found
                </h3>
                <p className="text-xs font-medium text-gray-500 leading-relaxed max-w-[280px] mx-auto">
                  There are currently no student records available in the
                  system.
                </p>
              </div>

              {/* Micro Status Badge */}
              <div className="pt-1">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6A1B2E]/5 text-[11px] font-semibold text-[#6A1B2E] border border-[#6A1B2E]/10 shadow-2xs">
                  <Sparkles size={13} className="text-amber-500" />
                  Ready for new entries
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
