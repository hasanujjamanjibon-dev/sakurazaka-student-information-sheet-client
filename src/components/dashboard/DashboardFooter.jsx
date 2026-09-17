// src/components/Footer.jsx
import { Heart, Code2 } from "lucide-react";

export default function DashboardFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[#eadfdc] bg-white/80 backdrop-blur-md py-3.5 px-4 sm:px-8 mt-auto print:hidden">
      <div className="max-w-[1800px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium">
        {/* Copyright Section */}
        <div className="flex items-center gap-1.5 text-gray-600">
          <span>© {currentYear}</span>
          <span className="font-bold text-[#6A1B2E]">
            Sakurazaka Japanese Language & Cultural Center
          </span>
          <span className="hidden md:inline text-gray-400">
            • All Rights Reserved.
          </span>
        </div>

        {/* Developer Badge */}
        <div className="flex items-center gap-1.5 bg-gray-50/80 border border-gray-200/70 px-3 py-1 rounded-full shadow-2xs transition-all hover:border-[#6A1B2E]/30 hover:bg-gray-100/80">
          <Code2 size={13} className="text-[#6A1B2E]" />
          <span className="text-gray-500">Developed by</span>
          <span className="font-bold text-gray-800 transition-colors">
            Hasan Ujjaman Jibon
          </span>
          <Heart
            size={12}
            className="text-rose-500 fill-rose-500 animate-pulse ml-0.5"
          />
        </div>
      </div>
    </footer>
  );
}
