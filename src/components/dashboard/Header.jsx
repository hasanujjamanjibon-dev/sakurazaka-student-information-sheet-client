import { Bell, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div
        className="
          mx-auto
          flex
          min-h-[72px]
          w-full
          items-center
          justify-between
          gap-3
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= LEFT ================= */}
        <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
          {/* Menu */}
          <button
            type="button"
            className="shrink-0 rounded-lg p-1.5 text-gray-800 hover:bg-gray-100"
          >
            <Menu size={24} strokeWidth={2} className="sm:h-7 sm:w-7" />
          </button>

          {/* Logo */}
          <img
            src="/logo.png"
            alt="Sakurazaka"
            className="
              h-8 w-8
              shrink-0
              object-contain
              sm:h-9 sm:w-9
              md:h-10 md:w-10
            "
          />

          {/* Organization */}
          <div className="hidden min-w-0 sm:block">
            <h1
              className="
                whitespace-nowrap
                text-sm
                font-bold
                text-[#6A1B2E]
                md:text-base
                lg:text-lg
              "
            >
              Sakurazaka
            </h1>

            <p
              className="
                max-w-[130px]
                text-[9px]
                leading-3
                text-gray-500
                md:max-w-[150px]
                md:text-[10px]
                lg:max-w-[175px]
                lg:text-xs
                lg:leading-4
              "
            >
              Japanese Language & Cultural Center
            </p>
          </div>
        </div>

        {/* ================= CENTER ================= */}
        <div className="min-w-0 flex-1 text-center">
          <h2
            className="
              font-bold
              leading-tight
              text-[#6A1B2E]

              text-sm
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
            "
          >
            <span className="sm:hidden">
              Sakurazaka Student
              <br />
              Management System
            </span>

            <span className="hidden sm:inline">
              Sakurazaka Student Management System
            </span>
          </h2>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          {/* Notification */}
          <button
            type="button"
            className="
              shrink-0
              rounded-lg
              p-1.5
              text-gray-800
              transition
              hover:bg-gray-100
            "
          >
            <Bell
              size={21}
              strokeWidth={2}
              className="sm:h-[22px] sm:w-[22px]"
            />
          </button>

          {/* Avatar */}
          <img
            src="/avatar.jpg"
            alt="Profile"
            className="
              h-8 w-8
              shrink-0
              rounded-full
              border
              border-gray-200
              object-cover
              sm:h-9 sm:w-9
              md:h-10 md:w-10
            "
          />
        </div>
      </div>
    </header>
  );
}
