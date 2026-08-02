import { createBrowserRouter } from "react-router-dom";
// import PrintPreview from "../pages/PrintPreview";
import Application from "../pages/Application";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
  },
//   {
//     path: "print-preview",
//     element: <PrintPreview />,
//   },
]);
export default Routes;
