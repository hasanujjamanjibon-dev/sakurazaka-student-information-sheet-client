import { CalendarDays, ChevronDown, RotateCw } from "lucide-react";
import { useRef } from "react";

export default function DateFilter({
  selectedDate,
  setSelectedDate,
  handleRefresh,
  refreshing = false,
}) {
  const dateInputRef = useRef(null);

  const handleDateClick = () => {
    if (dateInputRef.current) {
      if (dateInputRef.current.showPicker) {
        dateInputRef.current.showPicker();
      } else {
        dateInputRef.current.click();
      }
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleAllTime = () => {
    setSelectedDate("");
  };

  return (
    <div className="flex items-center gap-2">
      {/* ================= All Time ================= */}
      <button
        type="button"
        onClick={handleAllTime}
        className={`h-11 px-4 rounded-xl border font-medium
          flex items-center gap-2 transition-all duration-200 cursor-pointer
          ${
            selectedDate === ""
              ? "bg-[#5B1C1C] text-white border-[#5B1C1C] shadow-sm"
              : "bg-white text-gray-700 border-gray-200 hover:border-[#5B1C1C]/30 hover:bg-[#fff8f8]"
          }`}
      >
        All Time
      </button>

      {/* ================= Date Picker ================= */}
      <div className="relative">
        <button
          type="button"
          onClick={handleDateClick}
          className={`h-11 min-w-[155px] px-4 rounded-xl border
            flex items-center justify-between gap-3
            font-medium transition-all duration-200
            ${
              selectedDate
                ? "border-[#5B1C1C] bg-[#fff8f8] text-[#5B1C1C]"
                : "border-gray-200 bg-white text-gray-700 hover:border-[#5B1C1C]/30 hover:bg-[#fff8f8]"
            }`}
        >
          <span className="flex items-center gap-2">
            <CalendarDays size={18} />

            <span>{selectedDate || "Select Date"}</span>
          </span>

          <ChevronDown size={16} className="text-gray-400" />
        </button>

        {/* Actual Date Input */}
        <input
          ref={dateInputRef}
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="absolute inset-0 w-full h-full opacity-0 pointer-events-none"
        />
      </div>

      {/* ================= Refresh ================= */}
      <button
        type="button"
        onClick={handleRefresh}
        disabled={refreshing}
        className="group h-11 px-4 rounded-xl
          bg-gradient-to-r from-[#5B1C1C] to-[#263D68]
          text-white font-medium
          shadow-[0_4px_15px_rgba(91,28,28,0.18)]
          hover:shadow-[0_6px_20px_rgba(91,28,28,0.28)]
          hover:-translate-y-[1px]
          active:translate-y-0
          disabled:opacity-60
          disabled:cursor-not-allowed
          transition-all duration-200
          flex items-center gap-2.5"
      >
        <RotateCw
          size={18}
          strokeWidth={2.2}
          className={refreshing ? "animate-spin" : ""}
        />

        <span>{refreshing ? "Refreshing..." : "Refresh"}</span>
      </button>
    </div>
  );
}
