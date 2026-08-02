import { createRoot } from "react-dom/client";
import "./index.css";
import Routes from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Routes} />,
);
