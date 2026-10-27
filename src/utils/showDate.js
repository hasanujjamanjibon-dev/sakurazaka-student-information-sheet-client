export default function showDate(date) {
  if (!date) return "";

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // =========================================
  // 1. যদি ডেটাটি সরাসরি YYYY-MM-DD ফরম্যাটের স্ট্রিং হয় (সময় ছাড়া)
  // =========================================
  const value = String(date).trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    const [year, month, day] = value.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // =========================================
  // 2. MongoDB Date / ISO String (সময় সহ যেমন: T18:00:00.000Z)
  // এটিকে লোকাল টাইমজোনে (Bangladesh GMT+6) কনভার্ট করে সঠিক তারিখ নেওয়া হচ্ছে
  // =========================================
  const parsedDate = date instanceof Date ? date : new Date(date);
  if (!isNaN(parsedDate.getTime())) {
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = monthNames[parsedDate.getMonth()];
    const year = parsedDate.getFullYear();

    return `${day}-${month}-${year}`;
  }

  // =========================================
  // 3. অন্যান্য ফরম্যাট হ্যান্ডেল করার জন্য ম্যানুয়াল চেক
  // =========================================

  // DD/MM/YYYY
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    const [day, month, year] = value.split("/");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // DD-MM-YYYY
  if (
    /^\d{2}-\d-?{2}-\d{4}$/.test(value) ||
    /^\d{2}-\d{2}-\d{4}$/.test(value)
  ) {
    const [day, month, year] = value.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // DD/MM/YY
  if (/^\d{2}\/\d{2}\/\d{2}$/.test(value)) {
    const [day, month, year] = value.split("/");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-20${year}` : "";
  }

  // DD-MM-YY
  if (/^\d{2}-\d{2}-\d{2}$/.test(value)) {
    const [day, month, year] = value.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-20${year}` : "";
  }

  // 26 Aug 2026 or 26-Aug-2026
  const parts = value.split(/[\s-]+/);
  if (parts.length === 3) {
    const [day, month, year] = parts;
    const matchedMonth = monthNames.find(
      (m) => m.toLowerCase() === month.toLowerCase(),
    );

    if (matchedMonth && year.length === 4) {
      return `${day.padStart(2, "0")}-${matchedMonth}-${year}`;
    }
  }

  return "";
}
