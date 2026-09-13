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
  // MongoDB Date / JavaScript Date Object
  // =========================================
  if (date instanceof Date) {
    if (isNaN(date.getTime())) return "";

    const day = String(date.getDate()).padStart(2, "0");
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  const value = String(date).trim();

  // =========================================
  // ISO String (e.g., 2026-08-26T14:30:00.000Z)
  // =========================================
  let cleanValue = value;
  if (cleanValue.includes("T")) {
    cleanValue = cleanValue.split("T")[0];
  }

  // =========================================
  // YYYY-MM-DD
  // =========================================
  if (/^\d{4}-\d{2}-\d{2}$/.test(cleanValue)) {
    const [year, month, day] = cleanValue.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // =========================================
  // DD/MM/YYYY
  // =========================================
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(cleanValue)) {
    const [day, month, year] = cleanValue.split("/");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // =========================================
  // DD-MM-YYYY
  // =========================================
  if (/^\d{2}-\d{2}-\d{4}$/.test(cleanValue)) {
    const [day, month, year] = cleanValue.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-${year}` : "";
  }

  // =========================================
  // DD/MM/YY
  // =========================================
  if (/^\d{2}\/\d{2}\/\d{2}$/.test(cleanValue)) {
    const [day, month, year] = cleanValue.split("/");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-20${year}` : "";
  }

  // =========================================
  // DD-MM-YY
  // =========================================
  if (/^\d{2}-\d{2}-\d{2}$/.test(cleanValue)) {
    const [day, month, year] = cleanValue.split("-");
    const m = monthNames[parseInt(month, 10) - 1];
    return m ? `${day}-${m}-20${year}` : "";
  }

  // =========================================
  // 26 Aug 2026 or 26-Aug-2026
  // =========================================
  const parts = cleanValue.split(/[\s-]+/);
  if (parts.length === 3) {
    const [day, month, year] = parts;
    const matchedMonth = monthNames.find(
      (m) => m.toLowerCase() === month.toLowerCase(),
    );

    if (matchedMonth && year.length === 4) {
      return `${day.padStart(2, "0")}-${matchedMonth}-${year}`;
    }
  }

  // =========================================
  // Fallback: JS Standard Date Parsing
  // =========================================
  const parsedDate = new Date(date);
  if (!isNaN(parsedDate.getTime())) {
    const day = String(parsedDate.getDate()).padStart(2, "0");
    const month = monthNames[parsedDate.getMonth()];
    const year = parsedDate.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return "";
}
