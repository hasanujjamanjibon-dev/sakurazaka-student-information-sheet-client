import { Bell, Menu, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="lg:hidden">
            <Menu size={24} />
          </button>

          <img src="/logo.png" className="w-10 h-10" />

          <div>
            <h1 className="font-bold text-lg text-[#6A1B2E]">Sakurazaka</h1>

            <p className="text-xs text-gray-500">
              Japanese Language & Cultural Center
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[#6A1B2E]">
          Student Management System
        </h2>
        <div className="flex items-center gap-5">
          <Bell size={22} />

          <img src="/avatar.jpg" className="w-10 h-10 rounded-full" />
        </div>
      </div>
    </header>
  );
}
