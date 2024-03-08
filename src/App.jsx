import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    // other pages....
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/portfolio",
      element: <Portfolio/>
    },
    {
      path: "/service",
      element: <Services/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;