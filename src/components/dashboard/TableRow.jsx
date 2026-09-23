import {
  CalendarDays,
  Download,
  Eye,
  Pencil,
  Printer,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { formatDate } from "../../utils/formatDate";

// =========================================================
// DOWNLOAD SINGLE IMAGE
// =========================================================

const downloadImage = async (url, filename) => {
  if (!url) {
    await Swal.fire({
      icon: "warning",
      title: "Image Not Available",
      text: "This photo is not available.",
      timer: 1800,
      showConfirmButton: false,
    });

    return false;
  }

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch image.");
    }

    const blob = await response.blob();

    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = blobUrl;
    link.download = filename;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    window.URL.revokeObjectURL(blobUrl);

    return true;
  } catch (error) {
    console.error("Image download error:", error);

    await Swal.fire({
      icon: "error",
      title: "Download Failed",
      text: "Unable to download this photo. Please try again.",
      timer: 2200,
      showConfirmButton: false,
    });

    return false;
  }
};

// =========================================================
// DOWNLOAD BOTH PHOTOS
// =========================================================

const downloadBothPhotos = async (studentPhoto, sponsorPhoto, studentId) => {
  if (!studentPhoto && !sponsorPhoto) {
    await Swal.fire({
      icon: "warning",
      title: "No Photos Available",
      text: "Student and sponsor photos are not available.",
      timer: 2000,
      showConfirmButton: false,
    });

    return;
  }

  let downloadedCount = 0;

  // Student photo
  if (studentPhoto) {
    const studentDownloaded = await downloadImage(
      studentPhoto,
      `student-photo-${studentId}.jpg`,
    );

    if (studentDownloaded) {
      downloadedCount++;
    }
  }

  // Small delay between downloads
  if (studentPhoto && sponsorPhoto) {
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // Sponsor photo
  if (sponsorPhoto) {
    const sponsorDownloaded = await downloadImage(
      sponsorPhoto,
      `sponsor-photo-${studentId}.jpg`,
    );

    if (sponsorDownloaded) {
      downloadedCount++;
    }
  }

  if (downloadedCount > 0) {
    await Swal.fire({
      icon: "success",
      title: "Download Started",
      text: `${downloadedCount} photo${
        downloadedCount > 1 ? "s" : ""
      } download started.`,
      timer: 1500,
      showConfirmButton: false,
    });
  }
};

// =========================================================
// TABLE ROW
// =========================================================

export default function TableRow({ student, onDelete }) {
  // =======================================================
  // DATA
  // =======================================================

  const info = student.studentInformation || {};

  const sponsor = student.sponsorInformation || {};

  const studentPhoto = info.studentPhoto || "";

  const sponsorPhoto = sponsor.sponsorPhoto || "";

  // =======================================================
  // STUDENT NAME
  // =======================================================

  const studentName = info.studentName
    ? info.studentName.charAt(0).toUpperCase() + info.studentName.slice(1)
    : "";

  // =======================================================
  // SPONSOR NAME
  // =======================================================

  const sponsorName = sponsor.sponsorName
    ? sponsor.sponsorName.charAt(0).toUpperCase() + sponsor.sponsorName.slice(1)
    : "";

  // =======================================================
  // DATE
  // =======================================================

  const createdDate = student.createdAt
    ? formatDate(student.createdAt).replaceAll(" ", "-")
    : "-";

  const studentDob = info.studentDob
    ? formatDate(info.studentDob).replaceAll(" ", "-")
    : "-";

  // =======================================================
  // RETURN
  // =======================================================

  return (
    <tr className="transition-colors hover:bg-gray-50">
      {/* =====================================================
          CREATED DATE
      ====================================================== */}

      <td className="whitespace-nowrap p-4">
        <div className="inline-flex items-center gap-2">
          <CalendarDays size={15} className="text-[#6A1B2E]" />

          <span className="text-sm font-medium text-gray-700">
            {createdDate}
          </span>
        </div>
      </td>

      {/* =====================================================
          STUDENT IMAGE
      ====================================================== */}

      <td className="min-w-[100px] px-4 py-4">
        <div className="flex justify-center">
          {studentPhoto ? (
            <img
              src={studentPhoto}
              alt={studentName || "Student"}
              className="h-16 w-16 rounded-xl border border-[#5B1C1C] object-fill shadow"
            />
          ) : (
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 text-[10px] font-semibold text-gray-400">
              No Photo
            </div>
          )}
        </div>
      </td>

      {/* =====================================================
          STUDENT INFORMATION
      ====================================================== */}

      <td className="min-w-[100px] px-4 py-4">
        <h3 className="whitespace-nowrap font-semibold text-[#6A1B2E]">
          {studentName || "-"}
        </h3>

        <p className="mt-1 whitespace-nowrap text-sm text-gray-500">
          {info.studentPhone || "-"}
        </p>
      </td>

      {/* =====================================================
          SPONSOR INFORMATION
      ====================================================== */}

      <td className="min-w-[180px] px-4 py-4">
        <h3 className="whitespace-nowrap font-medium text-gray-800">
          {sponsorName || "-"}
        </h3>
      </td>

      {/* =====================================================
          STUDENT DOB
      ====================================================== */}

      <td className="whitespace-nowrap px-4 py-4">
        <div className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5">
          <CalendarDays size={15} className="text-[#6A1B2E]" />

          <span className="text-sm font-medium text-gray-700">
            {studentDob}
          </span>
        </div>
      </td>

      {/* =====================================================
          PHOTO DOWNLOADS
      ====================================================== */}
      <td className="min-w-[220px] px-4 py-4">
        <div className="w-full space-y-2">
          {/* Student Photo Card */}
          <div className="flex items-center justify-between gap-2 rounded-lg border border-blue-100 bg-blue-50/40 p-1.5 transition-all hover:border-blue-200 hover:bg-blue-50/80">
            <a
              href={info.studentPhoto}
              target="_blank"
              rel="noreferrer"
              title="View Student Photo"
              className="truncate text-xs font-semibold text-blue-600 hover:underline"
            >
              View Student Photo
            </a>

            <button
              type="button"
              onClick={() =>
                downloadImage(
                  info.studentPhoto,
                  `student-photo-${student._id}.jpg`,
                )
              }
              disabled={!info.studentPhoto}
              title="Download Student Photo"
              className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-blue-200 bg-white text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Sponsor Photo Card */}
          <div className="flex items-center justify-between gap-2 rounded-lg border border-purple-100 bg-purple-50/40 p-1.5 transition-all hover:border-purple-200 hover:bg-purple-50/80">
            <a
              href={sponsor.sponsorPhoto}
              target="_blank"
              rel="noreferrer"
              title="View Sponsor Photo"
              className="truncate text-xs font-semibold text-purple-600 hover:underline"
            >
              View Sponsor Photo
            </a>

            <button
              type="button"
              onClick={() =>
                downloadImage(
                  sponsor.sponsorPhoto,
                  `sponsor-photo-${student._id}.jpg`,
                )
              }
              disabled={!sponsor.sponsorPhoto}
              title="Download Sponsor Photo"
              className="inline-flex h-7 w-7 shrink-0 cursor-pointer items-center justify-center rounded-md border border-purple-200 bg-white text-purple-600 transition-all duration-200 hover:border-purple-600 hover:bg-purple-600 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Download size={13} strokeWidth={2.5} />
            </button>
          </div>

          {/* Download Both Button */}
          {/* <button
            type="button"
            onClick={() =>
              downloadBothPhotos(
                info.studentPhoto,
                sponsor.sponsorPhoto,
                student._id,
              )
            }
            disabled={!info.studentPhoto && !sponsor.sponsorPhoto}
            className="inline-flex h-8 w-full cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 text-xs font-bold text-emerald-700 shadow-xs transition-all duration-200 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white hover:shadow-emerald-500/20 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download size={13} strokeWidth={2.5} />
            <span>Download Both</span>
          </button> */}
        </div>
      </td>

      {/* =====================================================
          ACTIONS
      ====================================================== */}

      <td className="min-w-[180px] px-3 py-3">
        <div className="mx-auto grid w-max grid-cols-2 gap-1.5">
          {/* =================================================
              VIEW
          ================================================= */}

          <Link
            to={`/view/${student._id}`}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-blue-200/80
              bg-blue-50/80
              px-2.5
              py-1.5
              text-xs
              font-bold
              text-blue-700
              shadow-xs
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-blue-600
              hover:bg-blue-600
              hover:text-white
              hover:shadow-blue-500/20
              active:translate-y-0
            "
          >
            <Eye
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>View</span>
          </Link>

          {/* =================================================
              EDIT
          ================================================== */}

          <Link
            to={`/edit/${student._id}`}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-amber-200/80
              bg-amber-50/80
              px-2.5
              py-1.5
              text-xs
              font-bold
              text-amber-700
              shadow-xs
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-amber-600
              hover:bg-amber-600
              hover:text-white
              hover:shadow-amber-500/20
              active:translate-y-0
            "
          >
            <Pencil
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>Edit</span>
          </Link>

          {/* =================================================
              PRINT
          ================================================== */}

          <Link
            to={`/view/${student._id}?print=true`}
            className="
              group
              inline-flex
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-emerald-200/80
              bg-emerald-50/80
              px-2.5
              py-1.5
              text-xs
              font-bold
              text-emerald-700
              shadow-xs
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-emerald-600
              hover:bg-emerald-600
              hover:text-white
              hover:shadow-emerald-500/20
              active:translate-y-0
            "
          >
            <Printer
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>Print</span>
          </Link>

          {/* =================================================
              DELETE
          ================================================== */}

          <button
            type="button"
            onClick={() => onDelete(student)}
            className="
              group
              inline-flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-rose-200/80
              bg-rose-50/80
              px-2.5
              py-1.5
              text-xs
              font-bold
              text-rose-700
              shadow-xs
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:border-rose-600
              hover:bg-rose-600
              hover:text-white
              hover:shadow-rose-500/20
              active:translate-y-0
            "
          >
            <Trash2
              size={13}
              className="transition-transform duration-200 group-hover:scale-110"
            />

            <span>Delete</span>
          </button>
        </div>
      </td>
    </tr>
  );
}
