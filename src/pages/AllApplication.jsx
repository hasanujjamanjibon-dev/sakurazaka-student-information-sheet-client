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

export default function AllApplication() {
  const [page, setPage] = useState(1);
  const [statistics, setStatistics] = useState({
    total: 0,
    thisMonth: 0,
    today: 0,
  });
  const [search, setSearch] = useState("");
  const { students, total, refetch } = useStudents(page, search);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const [openDelete, setOpenDelete] = useState(false);

  const [loadingDelete, setLoadingDelete] = useState(false);

  const handleDelete = async () => {
    try {
      setLoadingDelete(true);

      await deleteStudent(selectedStudent._id);

      await refetch();

      await loadStatistics();

      setOpenDelete(false);
      setSelectedStudent(null);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingDelete(false);
    }
  };

  const loadStatistics = async () => {
    try {
      const res = await getStatistics();

      setStatistics(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadStatistics();

    const interval = setInterval(() => {
      loadStatistics();
      refetch();
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch]);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-7xl mx-auto p-6">
        <Statistics statistics={statistics} />

        <SearchBar search={search} setSearch={setSearch} />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">
          {students.map((student) => (
            <StudentCard
              key={student._id}
              student={student}
              onDelete={(student) => {
                setSelectedStudent(student);
                setOpenDelete(true);
              }}
            />
          ))}
        </div>

        <Pagination page={page} total={total} setPage={setPage} />
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
