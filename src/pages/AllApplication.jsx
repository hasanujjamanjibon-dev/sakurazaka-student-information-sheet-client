import { useEffect, useState } from "react";

import Header from "../components/dashboard/Header";
import SearchBar from "../components/dashboard/SearchBar";
import Statistics from "../components/dashboard/Statistics";
import Pagination from "../components/dashboard/Pagination";
import { getStatistics, deleteStudent } from "../services/studentApi";
import useStudents from "../hooks/useStudents";
import DeleteModal from "../components/dashboard/DeleteModal";
import ApplicationTable from "../components/dashboard/ApplicationTable";

export default function AllApplication() {
  // =========================
  // Filters
  // =========================
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  // =========================
  // Pagination
  // =========================
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);

  // =========================
  // Statistics
  // =========================
  const [statistics, setStatistics] = useState({
    total: 0,
    thisMonth: 0,
    today: 0,
  });

  // =========================
  // Refresh
  // =========================
  const [refreshing, setRefreshing] = useState(false);

  // =========================
  // Students
  // =========================
  const { students, total, refetch } = useStudents(
    page,
    search,
    limit,
    selectedDate,
  );

  // =========================
  // Delete
  // =========================
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);

  // =========================
  // Load Statistics
  // =========================
  const loadStatistics = async () => {
    try {
      const res = await getStatistics();

      setStatistics(res.data);
    } catch (err) {
      console.error("Statistics Error:", err);
    }
  };

  // =========================
  // Manual Refresh
  // =========================
  const handleRefresh = async () => {
    try {
      setRefreshing(true);

      await Promise.all([refetch(), loadStatistics()]);
    } catch (err) {
      console.error("Refresh Error:", err);
    } finally {
      setRefreshing(false);
    }
  };

  // =========================
  // Delete Student
  // =========================
  const handleDelete = async () => {
    if (!selectedStudent?._id) return;

    try {
      setLoadingDelete(true);

      await deleteStudent(selectedStudent._id);

      await Promise.all([refetch(), loadStatistics()]);

      setOpenDelete(false);
      setSelectedStudent(null);
    } catch (err) {
      console.error("Delete Error:", err);
    } finally {
      setLoadingDelete(false);
    }
  };

  // =========================
  // First Load Statistics
  // =========================
  useEffect(() => {
    loadStatistics();
  }, []);

  // =========================
  // Search / Date Change
  // → Page 1
  // =========================
  useEffect(() => {
    setPage(1);
  }, [search, selectedDate]);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        {/* ================= Statistics ================= */}
        <Statistics statistics={statistics} />

        {/* ================= Search + Date + Refresh ================= */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          handleRefresh={handleRefresh}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          refreshing={refreshing}
        />

        {/* ================= Table ================= */}
        <ApplicationTable
          students={students}
          onDelete={(student) => {
            setSelectedStudent(student);
            setOpenDelete(true);
          }}
        />

        {/* ================= Pagination ================= */}
        <Pagination
          page={page}
          total={total}
          limit={limit}
          setPage={setPage}
          setLimit={setLimit}
        />

        {/* ================= Delete Modal ================= */}
        <DeleteModal
          open={openDelete}
          loading={loadingDelete}
          onClose={() => {
            setOpenDelete(false);
            setSelectedStudent(null);
          }}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
