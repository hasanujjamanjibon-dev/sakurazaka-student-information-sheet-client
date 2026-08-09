import TableRow from "./TableRow";
import TableSkeleton from "./TableSkeleton";

export default function TableBody({ students, onDelete, loading }) {
  return (
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      {loading
        ? // Loading অবস্থায় 10টা skeleton row
          Array.from({ length: 10 }).map((_, i) => <TableSkeleton key={i} />)
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
