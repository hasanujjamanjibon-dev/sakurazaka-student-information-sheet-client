import { createBrowserRouter } from "react-router-dom";

import Application from "../pages/Application";
import AllApplication from "../pages/AllApplication";

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
    path: "/dashboard",
    element: <AllApplication />,
  },
]);

export default Routes;
