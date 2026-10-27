export default function toInputDate(date) {
  if (!date) return "";

  // ১. যদি সরাসরি JavaScript Date অবজেক্ট হয়
  if (date instanceof Date) {
    if (isNaN(date.getTime())) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  const value = String(date).trim();
  if (!value) return "";

  // ২. যদি ইতিমধ্যেই YYYY-MM-DD ফরম্যাটে থাকে
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  // ৩. যদি ISO string (যেমন: "1996-02-16T18:00:00.000Z") হয়
  // এটিকে Date-এ পার্স করে লোকাল টাইমজোনে দিন বের করা হচ্ছে
  if (value.includes("T")) {
    const parsedDate = new Date(value);
    if (!isNaN(parsedDate.getTime())) {
      const year = parsedDate.getFullYear();
      const month = String(parsedDate.getMonth() + 1).padStart(2, "0");
      const day = String(parsedDate.getDate()).padStart(2, "0");

      return `${year}-${month}-${day}`;
    }
  }

  // ৪. DD/MM/YYYY ফরম্যাট
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    const [day, month, year] = value.split("/");
    return `${year}-${month}-${day}`;
  }

  // ৫. DD-MM-YYYY ফরম্যাট
  if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
    const [day, month, year] = value.split("-");
    return `${year}-${month}-${day}`;
  }

  // ৬. DD/MM/YY ফরম্যাট
  if (/^\d{2}\/\d{2}\/\d{2}$/.test(value)) {
    const [day, month, year] = value.split("/");
    return `20${year}-${month}-${day}`;
  }

  // ৭. DD-MM-YY ফরম্যাট
  if (/^\d{2}-\d{2}-\d{2}$/.test(value)) {
    const [day, month, year] = value.split("-");
    return `20${year}-${month}-${day}`;
  }

  // ৮. Text Month ফরম্যাট (যেমন: "17 Feb 1996" বা "17 Feb")
  const monthNames = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  const parts = value.split(/\s+/);
  if (parts.length === 3) {
    const [day, month, year] = parts;
    if (monthNames[month]) {
      return `${year}-${monthNames[month]}-${day.padStart(2, "0")}`;
    }
  }

  return "";
}
