import { useEffect, useState } from "react";

import Header from "../components/dashboard/Header";
import SearchBar from "../components/dashboard/SearchBar";
import Statistics from "../components/dashboard/Statistics";
import StudentCard from "../components/dashboard/StudentCard";
import Pagination from "../components/dashboard/Pagination";
import { getStatistics } from "../services/studentApi";
import useStudents from "../hooks/useStudents";
import { deleteStudent } from "../services/studentApi";
import DeleteModal from "../components/dashboard/DeleteModal";
import ApplicationTable from "../components/dashboard/ApplicationTable";

export default function AllApplication() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(24);
  const [statistics, setStatistics] = useState({
    total: 0,
    thisMonth: 0,
    today: 0,
  });
  const [search, setSearch] = useState("");
  const { students, total, refetch } = useStudents(page, search, limit);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);

  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleRefresh = async () => {
    try {
      await Promise.all([refetch(), loadStatistics()]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      setLoadingDelete(true);

      await deleteStudent(selectedStudent._id);

      await refetch();

      await loadStatistics();

      setOpenDelete(false);
      setSelectedStudent(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingDelete(false);
    }
  };

  const loadStatistics = async () => {
    try {
      const res = await getStatistics();

      setStatistics(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadStatistics();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        <Statistics statistics={statistics} />

        <SearchBar
          search={search}
          setSearch={setSearch}
          handleRefresh={handleRefresh}
        />

        <ApplicationTable
          students={students}
          onDelete={(student) => {
            setSelectedStudent(student);
            setOpenDelete(true);
          }}
        />

        <Pagination
          page={page}
          total={total}
          limit={limit}
          setPage={setPage}
          setLimit={setLimit}
        />
        <DeleteModal
          open={openDelete}
          loading={loadingDelete}
          onClose={() => setOpenDelete(false)}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
