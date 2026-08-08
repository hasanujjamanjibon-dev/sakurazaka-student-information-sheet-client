import TableRow from "./TableRow";

export default function TableBody({ students, onDelete }) {
  return (
    <tbody className="divide-y divide-gray-100 border-t border-gray-100 overflow-auto h-fit">
      {students?.map((student, i) => (
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
