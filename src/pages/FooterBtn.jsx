import { LayoutDashboard, Edit3, Printer } from "lucide-react";
import { Link } from "react-router-dom";

function FooterBtn() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="w-full max-w-[1800px] mx-auto py-4 sm:py-6 box-border font-['Noto_Sans_Bengali','Noto_Serif_Bengali','Kalpurush',Arial,sans-serif] print:hidden">
      <div className="w-full bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-2xl p-3 sm:p-4 shadow-lg shadow-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* বাম পাশের ইনফো টেক্সট */}
        <p className="text-xs sm:text-sm text-slate-500 font-medium text-center sm:text-left">
          ফর্মটি প্রিন্ট করার পূর্বে সকল তথ্য ভালোভাবে যাচাই করে নিন।
        </p>

        {/* প্রিমিয়াম বাটন গ্রুপ */}
        <div className="inline-flex items-center p-1.5 bg-slate-100/80 border border-slate-200/80 rounded-2xl gap-2 w-full sm:w-auto justify-center shadow-inner">
          {/* ১. ড্যাশবোর্ড / ব্যাক বাটন */}
          <Link
            type="button"
            to="/dashboard/sakura-office"
            className="group relative flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 text-xs sm:text-sm font-bold text-slate-700 bg-white rounded-xl shadow-sm border border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-300"
          >
            <LayoutDashboard className="w-4 h-4 text-slate-500 group-hover:text-slate-800 group-hover:-translate-x-0.5 transition-transform duration-300" />
            <span>ড্যাশবোর্ড</span>
          </Link>

          {/* ২. এডিট বাটন */}
          <Link
            type="button"
            // to={`/edit/${studentId}`}
            className="group relative flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-5 text-xs sm:text-sm font-bold text-amber-700 bg-amber-50/90 rounded-xl shadow-sm border border-amber-200/80 hover:bg-amber-100/90 hover:text-amber-900 hover:border-amber-300 transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-300"
          >
            <Edit3 className="w-4 h-4 text-amber-600 group-hover:text-amber-800 group-hover:rotate-12 transition-transform duration-300" />
            <span>এডিট করুন</span>
          </Link>

          {/* ৩. প্রিন্ট বাটন (গ্রেডিয়েন্ট ও হোভার গ্লো ইফেক্ট) */}
          <button
            type="button"
            onClick={handlePrint}
            className="group relative flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#1674bd] via-[#253488] to-[#b51e26] bg-[length:200%_auto] hover:bg-right rounded-xl shadow-md shadow-blue-900/20 hover:shadow-lg hover:shadow-blue-900/40 transition-all duration-500 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <Printer className="w-4 h-4 text-white group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" />
            <span>প্রিন্ট করুন</span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default FooterBtn;
