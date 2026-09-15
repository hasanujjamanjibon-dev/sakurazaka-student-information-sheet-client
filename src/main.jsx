import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={Routes} />
  </AuthProvider>,
);
