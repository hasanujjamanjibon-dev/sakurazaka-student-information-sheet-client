import React, { useMemo, useRef, useState } from "react";
import {
  Archive,
  ArrowDownToLine,
  ArrowUp,
  Check,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Download,
  FileArchive,
  FileImage,
  FileSpreadsheet,
  FileText,
  Folder,
  FolderOpen,
  Gauge,
  HardDriveDownload,
  History,
  Info,
  Menu,
  Moon,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
  ShieldCheck,
  Sparkles,
  Sun,
  Upload,
  X,
} from "lucide-react";

import { uploadFiles, analyzeJob, compressJob } from "../Api/compressorApi";

const API = import.meta.env.VITE_SMART_ZIP_Backend_URL;

const navItems = [
  { label: "Compress ZIP", icon: FileArchive },
  { label: "History", icon: History },
  { label: "Settings", icon: Settings },
  { label: "Help", icon: CircleHelp },
];

function SmartZip() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [dark, setDark] = useState(false);
  const [dragging, setDragging] = useState(false);

  const [file, setFile] = useState(null);

  // =========================
  // PROCESS STATES
  // =========================

  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("idle");
  const [compressionResult, setCompressionResult] = useState(null);

  // =========================
  // REAL DATA
  // =========================

  const [folderTree, setFolderTree] = useState([]);
  const [totalFiles, setTotalFiles] = useState(0);
  const [totalFolders, setTotalFolders] = useState(0);
  const [totalSize, setTotalSize] = useState(0);

  // =========================
  // REFS
  // =========================

  const inputRef = useRef(null);
  const folderRef = useRef(null);

  // =========================
  // ORIGINAL SIZE
  // =========================

  const originalSize = totalSize
    ? formatBytes(totalSize)
    : file
      ? formatBytes(file.size)
      : "0 B";

  // =========================
  // FILE COUNT
  // =========================

  const fileCount = totalFiles;

  // =========================
  // CHOOSE ZIP FILE
  // =========================

  const chooseFile = () => {
    inputRef.current?.click();
  };

  // =========================
  // CHOOSE FOLDER
  // =========================

  const chooseFolder = () => {
    folderRef.current?.click();
  };

  // =========================
  // RESET DATA
  // =========================

  const resetData = () => {
    setFolderTree([]);
    setTotalFiles(0);
    setTotalFolders(0);
    setTotalSize(0);
    setCompressionResult(null);
    setProgress(0);
  };

  // =========================
  // HANDLE FILES
  // =========================

  const handleFiles = async (files) => {
    if (!files || files.length === 0) {
      return;
    }

    const selectedFiles = Array.from(files);

    try {
      console.log("=================================");
      console.log("SELECTED FILES:", selectedFiles.length);
      console.log("=================================");

      // Reset previous result
      resetData();

      // First selected file
      setFile(selectedFiles[0]);

      // =========================
      // STEP 1: UPLOAD
      // =========================

      setStatus("uploading");
      setProgress(0);

      console.log("Uploading files...");

      const response = await uploadFiles(selectedFiles, (percent) => {
        console.log("Upload progress:", percent);

        // Upload = first 40% of total process
        const overallProgress = Math.min(40, Math.round((percent / 100) * 40));

        setProgress(overallProgress);
      });

      console.log("UPLOAD RESPONSE:", response);
      console.log("UPLOAD DATA:", response?.data);

      if (!response?.data?.success) {
        throw new Error(response?.data?.message || "File upload failed.");
      }

      // =========================
      // STEP 2: JOB ID
      // =========================

      const jobId = response.data.job_id;

      if (!jobId) {
        throw new Error("Job ID was not returned from server.");
      }

      console.log("JOB ID:", jobId);

      // =========================
      // STEP 3: ANALYZE
      // =========================

      setStatus("analyzing");
      setProgress(45);

      console.log("Starting analysis for job:", jobId);

      const analyzeResponse = await analyzeJob(jobId);

      console.log("ANALYZE RESPONSE:", analyzeResponse);
      console.log("ANALYZE DATA:", analyzeResponse?.data);

      const result = analyzeResponse?.data;

      if (!result?.success) {
        throw new Error(
          result?.message || result?.detail || "File analysis failed.",
        );
      }

      // =========================
      // SAVE REAL ANALYSIS DATA
      // =========================

      console.log("REAL FOLDER TREE:", result.tree);
      console.log("REAL FILE COUNT:", result.files);
      console.log("REAL FOLDER COUNT:", result.folders);
      console.log("REAL TOTAL SIZE:", result.total_size);

      setFolderTree(result.tree || []);
      setTotalFiles(result.files || 0);
      setTotalFolders(result.folders || 0);
      setTotalSize(result.total_size || 0);

      setProgress(55);

      // =========================
      // STEP 4: COMPRESS
      // =========================

      setStatus("compressing");

      console.log("Starting compression for job:", jobId);

      const compressResponse = await compressJob(jobId);

      console.log("COMPRESS RESPONSE:", compressResponse);

      console.log("COMPRESS DATA:", compressResponse?.data);

      const compressResult = compressResponse?.data;

      if (!compressResult?.success) {
        throw new Error(
          compressResult?.message ||
            compressResult?.detail ||
            "Compression failed.",
        );
      }

      // Compression completed
      setProgress(95);

      // =========================
      // SAVE COMPRESSION RESULT
      // =========================

      console.log("Original size:", compressResult.original_size_mb, "MB");

      console.log("Compressed size:", compressResult.compressed_size_mb, "MB");

      console.log("Saved:", compressResult.saved_percentage, "%");

      console.log("Under 25 MB:", compressResult.under_25mb);

      setCompressionResult({
        originalSize: compressResult.original_size,
        originalSizeMb: compressResult.original_size_mb,

        compressedSize: compressResult.compressed_size,
        compressedSizeMb: compressResult.compressed_size_mb,

        savedPercentage: compressResult.saved_percentage,

        under25mb: compressResult.under_25mb,

        downloadUrl: compressResult.download_url,
      });

      // =========================
      // STEP 5: FINALIZING
      // =========================

      setStatus("finalizing");
      setProgress(100);

      // =========================
      // STEP 6: COMPLETE
      // =========================

      setStatus("complete");

      console.log("=================================");
      console.log("PROCESS COMPLETED SUCCESSFULLY");
      console.log("=================================");
    } catch (error) {
      console.error("PROCESS ERROR:", error);
      console.error("ERROR RESPONSE:", error?.response);
      console.error("ERROR REQUEST:", error?.request);
      console.error("ERROR MESSAGE:", error?.message);

      setStatus("error");
      setProgress(0);

      const message =
        error?.response?.data?.detail ||
        error?.response?.data?.message ||
        error?.message ||
        "File processing failed.";

      alert(message);
    }
  };

  // =========================
  // ZIP INPUT CHANGE
  // =========================

  const onInputChange = (e) => {
    handleFiles(e.target.files);

    // Allow selecting same file again
    e.target.value = "";
  };

  // =========================
  // FOLDER INPUT CHANGE
  // =========================

  const onFolderChange = (e) => {
    handleFiles(e.target.files);

    // Allow selecting same folder again
    e.target.value = "";
  };

  // =========================
  // DRAG & DROP
  // =========================

  const onDrop = (e) => {
    e.preventDefault();

    setDragging(false);

    const files = e.dataTransfer.files;

    if (files && files.length > 0) {
      handleFiles(files);
    }
  };

  // =========================
  // STATUS LABEL
  // =========================

  const stateLabel = useMemo(() => {
    const labels = {
      idle: "Waiting",
      uploading: "Uploading",
      analyzing: "Analyzing",
      compressing: "Compressing",
      finalizing: "Finalizing",
      complete: "Complete",
      error: "Error",
    };

    return labels[status] || "Waiting";
  }, [status]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-[#f7faff] text-ink dark:bg-[#0b1220] dark:text-slate-100">
        <div className="flex min-h-screen">
          {/* =========================
              SIDEBAR
          ========================= */}

          <Sidebar
            collapsed={collapsed}
            mobileOpen={sidebarOpen}
            closeMobile={() => setSidebarOpen(false)}
          />

          {sidebarOpen && (
            <button
              aria-label="Close menu"
              className="fixed inset-0 z-30 bg-slate-950/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          {/* =========================
              MAIN
          ========================= */}

          <main className="min-w-0 flex-1">
            {/* =========================
                HEADER
            ========================= */}

            <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#f7faff]/90 px-4 py-3 backdrop-blur-xl dark:border-slate-800 dark:bg-[#0b1220]/90 sm:px-6 lg:px-8">
              <div className="mx-auto flex max-w-[1510px] items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    <Menu size={20} />
                  </button>

                  <div className="min-w-0">
                    <h1 className="truncate text-xl font-extrabold tracking-tight sm:text-2xl lg:text-[26px]">
                      Smart ZIP Compressor
                    </h1>

                    <p className="hidden text-sm text-slate-500 sm:block dark:text-slate-400">
                      Compress files and optimize toward a 25MB target
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={() => setDark((v) => !v)}
                    className="hidden h-11 w-[72px] items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white shadow-sm sm:flex dark:border-slate-700 dark:bg-slate-900"
                  >
                    <span
                      className={`grid h-8 w-8 place-items-center rounded-xl ${
                        !dark ? "bg-amber-100 text-amber-500" : "text-slate-400"
                      }`}
                    >
                      <Sun size={17} />
                    </span>

                    <Moon
                      size={17}
                      className={dark ? "text-blue-400" : "text-slate-400"}
                    />
                  </button>

                  <button className="hidden h-11 items-center gap-2 rounded-xl border border-amber-300 bg-white px-4 text-sm font-semibold text-amber-600 shadow-sm sm:flex dark:bg-slate-900">
                    <Sparkles size={17} />
                    Upgrade to Pro
                  </button>
                </div>
              </div>
            </header>

            {/* =========================
                CONTENT
            ========================= */}

            <div className="mx-auto max-w-[1510px] space-y-4 p-4 sm:p-6 lg:p-8">
              {/* =========================
                  UPLOAD CARD
              ========================= */}

              <UploadCard
                dragging={dragging}
                setDragging={setDragging}
                onDrop={onDrop}
                chooseFile={chooseFile}
                chooseFolder={chooseFolder}
              />

              {/* =========================
                  ZIP INPUT
              ========================= */}

              <input
                ref={inputRef}
                type="file"
                className="hidden"
                accept=".zip"
                onChange={onInputChange}
              />

              {/* =========================
                  FOLDER INPUT
              ========================= */}

              <input
                ref={folderRef}
                type="file"
                className="hidden"
                multiple
                webkitdirectory=""
                directory=""
                onChange={onFolderChange}
              />

              {/* =========================
                  PROGRESS + TREE
              ========================= */}

              <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
                <ProgressCard
                  progress={progress}
                  status={status}
                  originalSize={originalSize}
                  fileCount={fileCount}
                  stateLabel={stateLabel}
                  compressionResult={compressionResult}
                />

                <FolderTreeCard
                  tree={folderTree}
                  fileCount={totalFiles}
                  folderCount={totalFolders}
                />
              </div>

              {/* =========================
                  RESULT
              ========================= */}

              <BottomResult
                status={status}
                progress={progress}
                compressionResult={compressionResult}
              />
            </div>
          </main>
        </div>

        {/* =========================
            SIDEBAR TOGGLE
        ========================= */}

        <button
          onClick={() => setCollapsed((v) => !v)}
          className="fixed bottom-5 left-5 z-40 hidden h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-lg lg:grid dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
        >
          {collapsed ? (
            <PanelLeftOpen size={18} />
          ) : (
            <PanelLeftClose size={18} />
          )}
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   SIDEBAR
========================================================= */

function Sidebar({ collapsed, mobileOpen, closeMobile }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[280px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 dark:border-slate-800 dark:bg-[#0e1728] ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
      } ${collapsed ? "lg:hidden" : ""}`}
    >
      <div className="flex h-[96px] items-center justify-between px-7">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
            <Archive size={24} strokeWidth={2.4} />
          </div>

          <div>
            <div className="text-[19px] font-extrabold leading-5 tracking-tight">
              Smart ZIP
            </div>

            <div className="text-[19px] font-extrabold leading-5 tracking-tight">
              Compressor
            </div>
          </div>
        </div>

        <button onClick={closeMobile} className="lg:hidden">
          <X size={20} />
        </button>
      </div>

      <nav className="px-5 pt-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const active = index === 0;

          return (
            <button
              key={item.label}
              className={`mb-2 flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left text-[15px] font-medium transition ${
                active
                  ? "bg-[#edf4ff] text-blue-600 dark:bg-blue-500/10 dark:text-blue-400"
                  : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
              }`}
            >
              <Icon size={19} strokeWidth={active ? 2.3 : 1.9} />

              {item.label}
            </button>
          );
        })}
      </nav>

      <div className="mt-7 border-t border-slate-100 px-6 pt-6 dark:border-slate-800">
        <div className="mb-4 text-[11px] font-bold uppercase tracking-wider text-blue-600">
          How it works
        </div>

        <div className="space-y-3.5">
          {[
            "Upload ZIP or Folder",
            "We analyze files",
            "Smart compression",
            "Keep folder structure",
            "Download compressed ZIP",
          ].map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 text-[13px] text-slate-600 dark:text-slate-300"
            >
              <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
                <Check size={10} strokeWidth={3} />
              </span>

              {text}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto p-5">
        <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <div className="flex items-center gap-2 text-sm font-bold text-emerald-600">
            <ShieldCheck size={18} />
            Your files are safe
          </div>

          <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
            Files are processed securely during compression.
          </p>
        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   UPLOAD CARD
========================================================= */

function UploadCard({
  dragging,
  setDragging,
  onDrop,
  chooseFile,
  chooseFolder,
}) {
  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-[#101a2c] sm:p-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={chooseFile}
        className={`group flex min-h-[285px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-5 text-center transition ${
          dragging
            ? "border-blue-500 bg-blue-50/80 dark:bg-blue-950/30"
            : "border-blue-400/80 bg-[#fbfdff] hover:bg-blue-50/30 dark:border-blue-500/60 dark:bg-slate-950/10"
        }`}
      >
        <div className="relative mb-4">
          <div className="grid h-[66px] w-[66px] place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/20">
            <Archive size={34} strokeWidth={1.8} />
          </div>

          <span className="absolute -bottom-2 -right-3 grid h-8 w-8 place-items-center rounded-full bg-blue-600 text-white shadow-md">
            <ArrowUp size={18} />
          </span>
        </div>

        <h2 className="text-[17px] font-bold text-slate-900 dark:text-white sm:text-lg">
          Drag & drop your ZIP file or folder here
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          or click to browse
        </p>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              chooseFile();
            }}
            className="flex h-12 items-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            <Folder size={18} />
            Choose File
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              chooseFolder();
            }}
            className="flex h-12 items-center gap-2 rounded-xl border border-blue-200 bg-white px-5 text-sm font-bold text-blue-600 transition hover:bg-blue-50 dark:border-blue-900 dark:bg-slate-900"
          >
            <FolderOpen size={18} />
            Folder
          </button>
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Supports: ZIP or any folder
          <span className="mx-2">•</span>
          Maximum file size: 2GB
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROGRESS CARD
========================================================= */

function ProgressCard({
  progress,
  status,
  originalSize,
  fileCount,
  compressionResult,
}) {
  const steps = [
    {
      label: "Uploading",
      status: "uploading",
    },
    {
      label: "Analyzing",
      status: "analyzing",
    },
    {
      label: "Compressing",
      status: "compressing",
    },
    {
      label: "Finalizing",
      status: "finalizing",
    },
  ];

  const statusIndex = {
    idle: -1,
    uploading: 0,
    analyzing: 1,
    compressing: 2,
    finalizing: 3,
    complete: 4,
    error: -1,
  };

  const currentStep = statusIndex[status] ?? -1;

  return (
    <section className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-[#101a2c] sm:p-6">
      {/* TITLE */}

      <div className="flex items-center gap-2 text-[15px] font-bold">
        <Gauge size={19} className="text-blue-600" />
        Compression Progress
      </div>

      {/* STEPS */}

      <div className="mt-6 grid grid-cols-4">
        {steps.map((step, index) => {
          const completed = currentStep > index || status === "complete";

          const current = currentStep === index;

          return (
            <div key={step.label} className="relative text-center">
              {index < steps.length - 1 && (
                <span
                  className={`absolute left-1/2 top-3.5 h-px w-full ${
                    currentStep > index
                      ? "bg-emerald-300"
                      : "bg-slate-200 dark:bg-slate-700"
                  }`}
                />
              )}

              <div className="relative z-10 mx-auto grid h-7 w-7 place-items-center rounded-full bg-white dark:bg-[#101a2c]">
                {completed ? (
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check size={13} strokeWidth={3} />
                  </span>
                ) : current ? (
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-blue-600 text-xs font-bold text-white shadow-md">
                    {index + 1}
                  </span>
                ) : (
                  <span className="grid h-7 w-7 place-items-center rounded-full border-2 border-slate-300 bg-white text-xs font-semibold text-slate-400 dark:border-slate-600 dark:bg-slate-900">
                    {index + 1}
                  </span>
                )}
              </div>

              <div className="mt-2 text-[12px] font-medium text-slate-700 dark:text-slate-300">
                {step.label}
              </div>

              <div className="mt-0.5 text-[11px] text-slate-400">
                {completed ? "Completed" : current ? "In Progress" : "Pending"}
              </div>
            </div>
          );
        })}
      </div>

      {/* PROGRESS TEXT */}

      <div className="mt-7 flex items-center justify-between text-sm font-bold">
        <span>
          {status === "idle" && "Waiting for files..."}

          {status === "uploading" && "Uploading files..."}

          {status === "analyzing" && "Analyzing files..."}

          {status === "compressing" && "Compressing files..."}

          {status === "finalizing" && "Finalizing ZIP..."}

          {status === "complete" && "Compression complete!"}

          {status === "error" && "Processing failed."}
        </span>

        <span>{progress}%</span>
      </div>

      {/* PROGRESS BAR */}

      <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-600 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      {/* STATISTICS */}

      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Stat
          icon={<FileText size={18} />}
          label="Original Size"
          value={originalSize}
        />

        <Stat
          icon={<HardDriveDownload size={18} />}
          label="Compressed"
          value={
            compressionResult
              ? `${compressionResult.compressedSizeMb} MB`
              : "--"
          }
          valueClass="text-emerald-600"
        />

        <Stat
          icon={<Gauge size={18} />}
          label="Saved"
          value={
            compressionResult ? `${compressionResult.savedPercentage}%` : "--"
          }
          valueClass="text-orange-500"
        />

        <Stat
          icon={<Archive size={18} />}
          label="Files"
          value={fileCount.toLocaleString()}
          valueClass="text-violet-600"
        />
      </div>

      {/* INFORMATION */}

      <div className="mt-4 flex items-start gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-3 py-3 text-xs leading-5 text-blue-700 dark:border-blue-900 dark:bg-blue-950/20 dark:text-blue-300">
        <Info size={16} className="mt-0.5 shrink-0" />

        <span>
          {status === "idle" &&
            "Upload a ZIP file or folder to start processing."}

          {status === "uploading" &&
            "Your files are being uploaded to the server."}

          {status === "analyzing" &&
            "Your files have been uploaded. We are analyzing the folder structure."}

          {status === "compressing" &&
            "We are compressing your files to meet the target size."}

          {status === "finalizing" && "Your compressed ZIP is being finalized."}

          {status === "complete" &&
            "Compression finished. Your optimized ZIP is ready for download."}

          {status === "error" &&
            "Something went wrong while processing your files."}
        </span>
      </div>
    </section>
  );
}

/* =========================================================
   STAT
========================================================= */

function Stat({ icon, label, value, valueClass = "text-blue-600" }) {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <span className="truncate text-[10px] font-medium">{label}</span>
      </div>

      <div className={`mt-1 text-sm font-extrabold ${valueClass}`}>{value}</div>
    </div>
  );
}

/* =========================================================
   FOLDER TREE
========================================================= */

function FolderTreeCard({ tree = [], fileCount = 0, folderCount = 0 }) {
  return (
    <section className="max-h-[410px] overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-[#101a2c] sm:p-6">
      {/* HEADER */}

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[15px] font-bold">
          <Folder size={20} className="text-blue-600" />
          Folder Structure
          <span className="text-xs font-normal text-slate-400">(Preview)</span>
        </div>

        <span className="h-fit rounded-lg bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          {fileCount.toLocaleString()} files
        </span>
      </div>

      {/* TREE */}

      <div className="mt-5 max-h-[350px] overflow-auto pb-4">
        {tree.length > 0 ? (
          tree.map((node, index) => (
            <TreeNode key={`${node.name}-${index}`} node={node} level={0} />
          ))
        ) : (
          <div className="flex max-h-[250px] items-center justify-center text-sm text-slate-400">
            {fileCount === 0
              ? "Upload a ZIP or folder to see the structure."
              : "Loading folder structure..."}
          </div>
        )}
      </div>

      {/* FOOTER */}

      {fileCount > 0 && (
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500 dark:border-slate-800">
          <span>
            Files:{" "}
            <strong className="text-slate-700 dark:text-slate-300">
              {fileCount.toLocaleString()}
            </strong>
          </span>

          <span>
            Folders:{" "}
            <strong className="text-slate-700 dark:text-slate-300">
              {folderCount.toLocaleString()}
            </strong>
          </span>
        </div>
      )}
    </section>
  );
}

/* =========================================================
   TREE NODE
========================================================= */

function TreeNode({ node, level }) {
  const [open, setOpen] = useState(node.open ?? true);

  const hasChildren = node.children && node.children.length > 0;

  return (
    <div>
      <div
        className="flex min-w-max items-center gap-2 rounded-lg px-1.5 py-1.5 text-sm hover:bg-slate-50 dark:hover:bg-slate-900"
        style={{
          paddingLeft: `${level * 24 + 4}px`,
        }}
      >
        {/* ARROW */}

        {hasChildren ? (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-4 w-4 place-items-center text-slate-400"
          >
            {open ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
          </button>
        ) : (
          <span className="w-4" />
        )}

        {/* ICON */}

        <TreeIcon type={node.type} name={node.name} />

        {/* NAME */}

        <span className="text-slate-700 dark:text-slate-300">{node.name}</span>
      </div>

      {/* CHILDREN */}

      {open &&
        node.children?.map((child, index) => (
          <TreeNode
            key={`${node.name}-${child.name}-${index}`}
            node={child}
            level={level + 1}
          />
        ))}
    </div>
  );
}

/* =========================================================
   TREE ICON
========================================================= */

function TreeIcon({ type, name = "" }) {
  if (type === "folder") {
    return <Folder size={17} className="fill-amber-100 text-amber-500" />;
  }

  const extension = name.split(".").pop().toLowerCase();

  if (["jpg", "jpeg", "png", "gif", "webp", "bmp", "svg"].includes(extension)) {
    return <FileImage size={17} className="text-emerald-500" />;
  }

  if (["xlsx", "xls", "csv"].includes(extension)) {
    return <FileSpreadsheet size={17} className="text-emerald-600" />;
  }

  if (["zip", "rar", "7z"].includes(extension)) {
    return <FileArchive size={17} className="text-blue-500" />;
  }

  return <FileText size={17} className="text-red-500" />;
}

/* =========================================================
   BOTTOM RESULT
========================================================= */

function BottomResult({ status, progress, compressionResult }) {
  const complete = status === "complete";

  const downloadFile = () => {
    if (!compressionResult?.downloadUrl) {
      return;
    }

    const downloadUrl = compressionResult.downloadUrl;

    const finalUrl = downloadUrl.startsWith("http")
      ? downloadUrl
      : `${API}${downloadUrl}`;

    window.location.href = finalUrl;
  };

  return (
    <section className="grid gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-soft dark:border-slate-800 dark:bg-[#101a2c] sm:grid-cols-[1.25fr_0.75fr_0.75fr_1.1fr] sm:p-5">
      {/* STATUS */}

      <div
        className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
          complete
            ? "border-emerald-100 bg-emerald-50/60 dark:border-emerald-900 dark:bg-emerald-950/20"
            : "border-blue-100 bg-blue-50/40 dark:border-blue-900 dark:bg-blue-950/10"
        }`}
      >
        <span
          className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-white ${
            complete ? "bg-emerald-500" : "bg-blue-500"
          }`}
        >
          {complete ? (
            <Check size={20} strokeWidth={3} />
          ) : (
            <Upload size={18} />
          )}
        </span>

        <div>
          <div
            className={`text-sm font-bold ${
              complete ? "text-emerald-600" : "text-blue-600"
            }`}
          >
            {complete
              ? "Compression Complete!"
              : status === "idle"
                ? "Ready to Process"
                : status === "error"
                  ? "Processing Failed"
                  : "Processing..."}
          </div>

          <div className="text-xs text-slate-500">
            {complete
              ? "Your optimized ZIP is ready."
              : status === "error"
                ? "Please try again."
                : "Your file is being processed."}
          </div>
        </div>
      </div>

      {/* TARGET */}

      <ResultMetric label="Target Size" value="≤ 25 MB" accent="orange" />

      {/* COMPRESSED */}

      <ResultMetric
        label="Compressed Size"
        value={
          compressionResult ? `${compressionResult.compressedSizeMb} MB` : "--"
        }
        accent="green"
      />

      {/* DOWNLOAD */}

      <button
        type="button"
        disabled={!complete || !compressionResult?.downloadUrl}
        onClick={downloadFile}
        className={`flex min-h-[70px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-white transition ${
          complete && compressionResult?.downloadUrl
            ? "bg-blue-600 shadow-lg shadow-blue-600/20 hover:bg-blue-700"
            : "cursor-not-allowed bg-blue-400"
        }`}
      >
        <Download size={19} />

        <span>
          <span className="block">Download ZIP</span>

          <span className="block text-[10px] font-medium opacity-80">
            {complete ? "Ready to download" : `Enabled at 100% (${progress}%)`}
          </span>
        </span>
      </button>
    </section>
  );
}

/* =========================================================
   RESULT METRIC
========================================================= */

function ResultMetric({ label, value, accent }) {
  const isOrange = accent === "orange";

  return (
    <div
      className={`flex min-h-[70px] flex-col items-center justify-center rounded-xl border ${
        isOrange
          ? "border-orange-100 bg-orange-50/50 dark:border-orange-900/40 dark:bg-orange-950/10"
          : "border-emerald-100 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-emerald-950/10"
      }`}
    >
      <span className="text-[11px] font-medium text-slate-500">{label}</span>

      <span
        className={`mt-1 text-lg font-extrabold ${
          isOrange ? "text-orange-500" : "text-emerald-600"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   FORMAT BYTES
========================================================= */

function formatBytes(bytes) {
  if (!bytes || bytes <= 0) {
    return "0 B";
  }

  const units = ["B", "KB", "MB", "GB", "TB"];

  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  return `${(bytes / Math.pow(1024, i)).toFixed(i >= 2 ? 1 : 0)} ${units[i]}`;
}

export default SmartZip;
