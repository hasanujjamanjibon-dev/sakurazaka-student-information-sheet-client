import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ApplicationTable({ students, onDelete, loading }) {
  return (
    <div className="w-full mt-6 overflow-hidden rounded-t-2xl border border-[#eadfdc] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] sm:h-[calc(100vh-445px)] h-fit">
      {/* Table Scroll Container */}
      <div className="w-full overflow-auto">
        <table className="w-full min-w-275 table-auto">
          <TableHead />

          <TableBody
            students={students}
            onDelete={onDelete}
            loading={loading}
          />
        </table>
      </div>
    </div>
  );
}
