import { useEffect, useState, useCallback } from "react";
import { getStudents } from "../services/studentApi";

export default function useStudents(page, search) {
  const [students, setStudents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getStudents(page, 24, search);

      setStudents(res.data.students);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 5000);

    return () => clearInterval(interval);
  }, [loadData]);

  return {
    students,
    total,
    loading,
    refetch: loadData,
  };
}
