import { createBrowserRouter } from "react-router-dom";

import Application from "../pages/Application";
import AllApplication from "../pages/AllApplication";
import SmartZip from "../pages/SmartZip";
import StudentView from "../pages/StudentView";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const Routes = createBrowserRouter([
  // ১. পাবলিক রাউটস (লগইন ছাড়া ভিজিট করা যাবে)
  {
    path: "/",
    element: <Application />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  // ২. প্রটেক্টেড রাউটস (লগইন ছাড়া কেউ ঢুকতে পারবে না)
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/edit/:id",
        element: <Application />,
      },
      {
        path: "/dashboard/sakura-office",
        element: <AllApplication />,
      },
      {
        path: "/view/:id",
        element: <StudentView />,
      },
      {
        path: "/dashboard/sakura-office/smart-zip-compressesor",
        element: <SmartZip />,
      },
    ],
  },
]);

export default Routes;
