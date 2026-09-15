// src/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  // ইউজার লগইন করা না থাকলে সোজাসুজি /login পেজে পাঠাবে
  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
