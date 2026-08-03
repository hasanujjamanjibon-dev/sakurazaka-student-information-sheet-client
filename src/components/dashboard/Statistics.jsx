import { Users, CalendarDays, Clock3 } from "lucide-react";

export default function Statistics({
  statistics: { total, thisMonth, today },
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      <Card
        icon={<Users />}
        title="Total Students"
        value={total}
        color="bg-[#6A1B2E]"
      />

      <Card
        icon={<CalendarDays />}
        title="This Month"
        value={thisMonth}
        color="bg-[#203864]"
      />

      <Card
        icon={<Clock3 />}
        title="Today"
        value={today}
        color="bg-[#8B2F4D]"
      />
    </div>
  );
}

function Card({
  icon,

  title,

  value,

  color,
}) {
  return (
    <div className="bg-white rounded-2xl shadow p-5 flex justify-between">
      <div>
        <p className="text-gray-500">{title}</p>

        <h1 className="text-3xl font-bold mt-2">{value}</h1>
      </div>

      <div
        className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white`}
      >
        {icon}
      </div>
    </div>
  );
}
