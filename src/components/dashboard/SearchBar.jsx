import { RefreshCw, Search } from "lucide-react";
import DateFilter from "./DateFilter";

export default function SearchBar({
  search,
  handleRefresh,
  setSearch,
  selectedDate,
  setSelectedDate,
  refreshing,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-4 mt-6 flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
      <div className="flex items-center flex-1 gap-2 bg-white rounded-lg px-4 py-2">
        <Search className="text-gray-500" size={18} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Student / Sponsor name or phone"
          className="input flex-1 outline-none border-none shadow-none *:focus:ring-0 focus:border-none "
        />
      </div>

      <DateFilter
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        handleRefresh={handleRefresh}
        refreshing={refreshing}
      />
    </div>
  );
}
