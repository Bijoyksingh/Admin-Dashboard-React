import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'


import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Extra from "./pages/Extra"
import ErrorPage from "./ErrorPage.jsx"
// import SignIn from './pages/Signin.jsx'
import SignUp from "./pages/SignUp.jsx"
import Root from './routes/root.jsx'
import Home from "./pages/Home.jsx"
import EmsHome from "./pages/Dashboard/EMS/EmsHome.jsx"
import WaterHome from "./pages/Dashboard/Water/WaterHome.jsx"
import DGHome from "./pages/Dashboard/DG/DGHome.jsx"
import HVACHome from "./pages/Dashboard/HVAC/HVACHome.jsx"
import UPSHome from "./pages/Dashboard/UPS/UPSHome.jsx"
import TempHome from "./pages/Dashboard/Temp/TempHome.jsx"
import FireHome from "./pages/Dashboard/Fire/FireHome.jsx"
import NBSafeHome from "./pages/Dashboard/NBSafe/NBSafeHome.jsx"
import TransHome from "./pages/Dashboard/Transformer/TransHome.jsx"


export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "ems/home",
          element:<EmsHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "water/home",
          element:<WaterHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "dg/home",
          element:<DGHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "ups/home",
          element:<UPSHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "temp/home",
          element:<TempHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "hvac/home",
          element:<HVACHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "fire/home",
          element:<FireHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "nbsafe/home",
          element:<NBSafeHome/>,
          errorElement: <ErrorPage />,
        },
        {
          path: "trans/home",
          element:<TransHome/>,
          errorElement: <ErrorPage />,
        },
      ],
    },
    {
      path: "signup",
      element:<SignUp/>,
      errorElement: <ErrorPage />,
    },
      {
        path: "extra",
        element:<Extra/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "contact",
        errorElement: <ErrorPage />,
      },
  ]);
  
  return (
    <>
<RouterProvider router={router} />
    </>
  )
}
