import TableRow from "./TableRow";
import TableSkeleton from "./TableSkeleton";

export default function TableBody({ students, onDelete, loading }) {
  return (
    <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-y-auto">
      {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <TableSkeleton key={index} />
          ))
        : students?.map((student, i) => (
            <TableRow
              key={student._id}
              serial={i + 1}
              student={student}
              onDelete={onDelete}
            />
          ))}
    </tbody>
  );
}
