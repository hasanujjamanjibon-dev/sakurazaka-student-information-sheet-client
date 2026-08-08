import { RefreshCw, Search } from "lucide-react";

export default function SearchBar({ search, handleRefresh, setSearch }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 flex items-center justify-between gap-4 ">
      <div className="flex items-center flex-1 gap-2 bg-white rounded-lg px-4 py-2">
        <Search className="text-gray-500" size={18} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Student / Sponsor name or phone"
          className="input flex-1 outline-none border-none shadow-none *:focus:ring-0 focus:border-none "
        />
      </div>

      <button
        onClick={handleRefresh}
        className="group relative h-11 px-4 rounded-xl overflow-hidden
             bg-linear-to-r from-[#5B1C1C] to-[#263D68]
             text-white font-medium
             shadow-[0_4px_15px_rgba(91,28,28,0.18)]
             hover:shadow-[0_6px_20px_rgba(91,28,28,0.28)]
             hover:-translate-y-px
             active:translate-y-0
             transition-all duration-200 cursor-pointer
             flex items-center gap-2.5"
      >
        <RefreshCw
          size={18}
          strokeWidth={2.2}
          className="transition-transform duration-500 group-hover:rotate-180"
        />

        <span>Refresh</span>
      </button>
    </div>
  );
}
