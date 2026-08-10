import { createBrowserRouter } from "react-router-dom";

import Application from "../pages/Application";
import AllApplication from "../pages/AllApplication";
import StudentDetails from "../pages/StudentDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
  },
  {
    path: "/edit/:id",
    element: <Application />,
  },
  {
    path: "/dashboard/sakura-office",
    element: <AllApplication />,
  },
  {
    path: "/student/:id",
    element: <StudentDetails />,
  },
]);

export default Routes;
