import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ApplicationTable({ students, onDelete, loading }) {
  return (
    <div className="w-full overflow-hidden rounded-t-2xl border border-[#eadfdc] bg-white shadow-sm">
      {/* =========================
          TABLE SCROLL AREA
      ========================= */}
      <div className="max-h-[420px] overflow-auto">
        <table className="w-full min-w-[1100px] border-collapse">
          {/* Header */}
          <TableHead />

          {/* Body */}
          <TableBody
            students={students}
            onDelete={onDelete}
            loading={loading}
          />
        </table>
      </div>

      {/* =========================
          PAGINATION
      ========================= */}
      <div className="border-t border-[#eadfdc] bg-white">
        {/* তোমার existing pagination এখানে থাকবে */}
      </div>
    </div>
  );
}
