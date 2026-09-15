// src/pages/Login.jsx
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: "success",
        title: "স্বাগতম!",
        text: "লগইন সফল হয়েছে।",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/dashboard/sakura-office");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "লগইন ব্যর্থ হয়েছে",
        text: "ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">
          অ্যাডমিন লগইন
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              ইমেইল অ্যাড্রেস
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="admin@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-600"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-violet-800 text-white font-bold rounded-xl hover:bg-violet-900 transition-colors"
          >
            {loading ? "প্রসেস হচ্ছে..." : "লগইন করুন"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
