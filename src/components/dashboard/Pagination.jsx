import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  page,

  total,

  limit,

  setPage,
}) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex justify-center mt-10 gap-2">
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="w-10 h-10 rounded-lg border"
      >
        <ChevronLeft size={18} />
      </button>

      {Array.from({
        length: totalPages,
      }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`w-10 h-10 rounded-lg

${page === i + 1 ? "bg-[#6A1B2E] text-white" : "border"}

`}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="w-10 h-10 rounded-lg border"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
