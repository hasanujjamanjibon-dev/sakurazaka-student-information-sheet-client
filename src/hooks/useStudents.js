import { useEffect, useState, useCallback } from "react";
import { getStudents } from "../services/studentApi";

export default function useStudents(page, search, limit, date) {
  const [students, setStudents] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getStudents(page, limit, search, date);

      console.log("API Response:", res.data);

      setStudents(res.data.students || []);
      setTotal(res.data.total || 0);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, [page, search, limit, date]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    students,
    total,
    loading,
    refetch: loadData,
  };
}
