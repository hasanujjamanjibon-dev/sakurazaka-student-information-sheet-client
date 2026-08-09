// =========================================================
// Convert any date format to YYYY-MM-DD
// For input type="date"
// =========================================================
export default function toInputDate(date) {
  if (!date) return "";

  const value = String(date).trim();

  // Already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return value;
  }

  // ISO date
  if (value.includes("T")) {
    return value.split("T")[0];
  }

  // DD/MM/YYYY
  if (/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
    const [day, month, year] = value.split("/");

    return `${year}-${month}-${day}`;
  }

  // DD-MM-YYYY
  if (/^\d{2}-\d{2}-\d{4}$/.test(value)) {
    const [day, month, year] = value.split("-");

    return `${year}-${month}-${day}`;
  }

  // DD/MM/YY
  if (/^\d{2}\/\d{2}\/\d{2}$/.test(value)) {
    const [day, month, year] = value.split("/");

    return `20${year}-${month}-${day}`;
  }

  // DD-MM-YY
  if (/^\d{2}-\d{2}-\d{2}$/.test(value)) {
    const [day, month, year] = value.split("-");

    return `20${year}-${month}-${day}`;
  }

  // ==========================================
  // Example: 26 Aug 2026
  // ==========================================
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
