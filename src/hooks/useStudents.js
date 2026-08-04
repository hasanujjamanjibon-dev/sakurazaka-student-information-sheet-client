import { useEffect, useState, useCallback } from "react";
import { getStudents } from "../services/studentApi";

export default function useStudents(page, search, limit) {
  const [students, setStudents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      console.log("API Response:", res.data);
      const res = await getStudents(page, limit, search);

      setStudents(res.data.students);
      setTotal(res.data.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page, search, limit]);

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
