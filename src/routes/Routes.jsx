import { createBrowserRouter } from "react-router-dom";

import Application from "../pages/Application";
import AllApplication from "../pages/AllApplication";
import StudentDetails from "../pages/StudentDetails";
import SmartZip from "../pages/SmartZip";

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
  {
    path: "/dashboard/sakura-office/smart-zip-compressesor",
    element: <SmartZip />,
  },
]);

export default Routes;
