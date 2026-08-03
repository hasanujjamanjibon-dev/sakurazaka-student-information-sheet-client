import { Search } from "lucide-react";

export default function SearchBar({
  search,

  setSearch,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6">
      <div className="flex items-center">
        <Search className="text-gray-500" size={18} />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Student / Sponsor"
          className="ml-3 flex-1 outline-none"
        />
      </div>
    </div>
  );
}
