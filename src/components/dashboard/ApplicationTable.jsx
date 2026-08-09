import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ApplicationTable({ students, onDelete, loading }) {
  return (
    <div className="mt-7 overflow-hidden rounded-tl-2xl rounded-tr-2xl border border-[#eadfdc] bg-white shadow-[0_12px_40px_rgba(0,0,0,.06)]">
      <div className="overflow-auto h-[calc(100vh-421px)]">
        <table className="w-full border-collapse">
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
