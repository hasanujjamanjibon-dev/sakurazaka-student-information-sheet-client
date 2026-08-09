export default function TableSkeleton() {
  return (
    <tr className="animate-pulse">
      {/* Serial */}
      <td className="w-[8%] px-10 py-4">
        <div className="h-5 w-7 rounded bg-gray-200" />
      </td>

      {/* Student Photo */}
      <td className="w-[10%] px-3 py-4">
        <div className="h-16 w-16 rounded-[13px] bg-gray-200" />
      </td>

      {/* Student Name + Phone */}
      <td className="w-[20%] px-3 py-4">
        <div className="h-4 w-37.5 rounded bg-gray-200" />

        <div className="mt-2.5 h-3 w-23.75 rounded bg-gray-200" />
      </td>

      {/* Father Name */}
      <td className="w-[15%] px-3 py-4">
        <div className="h-4 w-31.25 rounded bg-gray-200" />
      </td>

      {/* Date */}
      <td className="w-[13%] px-3 py-4">
        <div className="h-4 w-25 rounded bg-gray-200" />
      </td>

      {/* Photo URLs */}
      <td className="w-[18%] px-3 py-4">
        <div className="h-4 w-31.25 rounded bg-gray-200" />

        <div className="mt-2 h-4 w-30 rounded bg-gray-200" />
      </td>

      {/* Action Buttons */}
      <td className="w-[16%] px-4 py-4">
        <div className="flex items-center gap-2">
          {/* View */}
          <div className="h-8.25 w-10 rounded-[9px] border border-blue-200 bg-blue-50" />

          {/* Edit */}
          <div className="h-8.25 w-10  rounded-[9px] border border-yellow-200 bg-yellow-50" />

          {/* Print */}
          <div className="h-8.25 w-10 rounded-[9px] border border-emerald-200 bg-emerald-50" />

          {/* Delete */}
          <div className="h-8.25 w-10 rounded-[9px] border border-red-200 bg-red-50" />
        </div>
      </td>
    </tr>
  );
}
