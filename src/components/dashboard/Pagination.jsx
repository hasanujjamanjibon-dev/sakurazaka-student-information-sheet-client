import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

export default function Pagination({ page, total, limit, setPage, setLimit }) {
  const totalPages = Math.max(1, Math.ceil(total / limit));

  const pages = [];

  let start = Math.max(1, page - 2);
  let end = Math.min(totalPages, page + 2);

  if (page <= 3) end = Math.min(5, totalPages);

  if (page >= totalPages - 2) start = Math.max(1, totalPages - 4);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <div className="bg-white border border-[#eadfdc] rounded-b-2xl px-6 py-5 flex flex-col lg:flex-row items-center justify-between gap-5">
      {/* Left */}

      <div className="text-sm text-gray-500">
        Showing <span className="font-semibold">{(page - 1) * limit + 1}</span>{" "}
        to{" "}
        <span className="font-semibold">{Math.min(page * limit, total)}</span>{" "}
        of <span className="font-semibold">{total}</span> results
      </div>

      {/* Center */}

      <div className="flex items-center gap-2">
        <button
          onClick={() => setPage(1)}
          disabled={page === 1}
          className="w-10 h-10 cursor-pointer  rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronsLeft size={18} />
        </button>

        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="w-10 h-10 cursor-pointer  rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronLeft size={18} />
        </button>

        {start > 1 && (
          <>
            <PageButton pageNumber={1} current={page} setPage={setPage} />
            {start > 2 && <span className="px-2 ">...</span>}
          </>
        )}

        {pages.map((p) => (
          <PageButton key={p} pageNumber={p} current={page} setPage={setPage} />
        ))}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && <span className="px-2">...</span>}

            <PageButton
              pageNumber={totalPages}
              current={page}
              setPage={setPage}
            />
          </>
        )}

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="w-10 h-10 cursor-pointer rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronRight size={18} />
        </button>

        <button
          onClick={() => setPage(totalPages)}
          disabled={page === totalPages}
          className="w-10 h-10 cursor-pointer rounded-lg border border-gray-200 hover:bg-gray-100 disabled:opacity-40 flex items-center justify-center"
        >
          <ChevronsRight size={18} />
        </button>
      </div>

      {/* Right */}

      <div>
        <select
          className="h-11 px-4 rounded-lg border border-gray-200 bg-white outline-none cursor-pointer"
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1);
          }}
        >
          <option value={10}>10 / page</option>
          <option value={15}>15 / page</option>
          <option value={24}>24 / page</option>
          <option value={50}>50 / page</option>
          <option value={100}>100 / page</option>
        </select>
      </div>
    </div>
  );
}

function PageButton({ pageNumber, current, setPage }) {
  const active = current === pageNumber;

  return (
    <button
      onClick={() => setPage(pageNumber)}
      className={`w-10 h-10 rounded-lg font-medium transition-all cursor-pointer 
      ${
        active
          ? "bg-[#5B1C1C] text-white shadow"
          : "border border-gray-200 hover:bg-gray-100 text-gray-700"
      }`}
    >
      {pageNumber}
    </button>
  );
}
