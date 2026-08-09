export default function TableSkeleton() {
  return (
    <tr className="animate-pulse">
      {/* Serial */}
      <td className="min-w-[75px] px-4 py-4">
        <div className="mx-auto h-5 w-7 rounded bg-gray-200" />
      </td>

      {/* Photo */}
      <td className="min-w-[100px] px-4 py-4">
        <div className="flex justify-center">
          <div className="h-16 w-16 rounded-xl bg-gray-200" />
        </div>
      </td>

      {/* Student Name + Phone */}
      <td className="min-w-[210px] px-4 py-4">
        <div className="h-4 w-[150px] rounded bg-gray-200" />

        <div className="mt-2 h-3 w-[95px] rounded bg-gray-200" />
      </td>

      {/* Sponsor Name + Phone */}
      <td className="min-w-[180px] px-4 py-4">
        <div className="h-4 w-[125px] rounded bg-gray-200" />

        <div className="mt-2 h-3 w-[95px] rounded bg-gray-200" />
      </td>

      {/* DOB */}
      <td className="min-w-[140px] px-4 py-4">
        <div className="mx-auto h-4 w-[100px] rounded bg-gray-200" />
      </td>

      {/* Photo URLs */}
      <td className="min-w-[190px] px-4 py-4">
        <div className="h-4 w-[135px] rounded bg-gray-200" />

        <div className="mt-2 h-4 w-[125px] rounded bg-gray-200" />
      </td>

      {/* Actions */}
      <td className="min-w-[190px] px-4 py-4">
        <div className="flex items-center justify-center gap-2">
          {/* View */}
          <div className="h-8 w-10 shrink-0 rounded-lg border border-blue-200 bg-blue-50" />

          {/* Edit */}
          <div className="h-8 w-10 shrink-0 rounded-lg border border-amber-200 bg-amber-50" />

          {/* Print */}
          <div className="h-8 w-10 shrink-0 rounded-lg border border-emerald-200 bg-emerald-50" />

          {/* Delete */}
          <div className="h-8 w-10 shrink-0 rounded-lg border border-red-200 bg-red-50" />
        </div>
      </td>
    </tr>
  );
}
