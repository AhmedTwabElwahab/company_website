import {createBrowserRouter} from "react-router-dom";
import ErrorPage from '../views/error-page.jsx';
import Home from "../views/Home";
import About from "../views/About.jsx";
import Service from "../views/Service";
import Project from "../views/Project";
import TeamPage from "../views/TeamPage.jsx";
import ContactPage from "../views/ContactPage.jsx";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement:<ErrorPage/>,
    },
    {
      path: '/about',
      element: <About />,
        errorElement:<ErrorPage/>
    },{
      path: '/service',
      element:<Service/>,
      errorElement:<ErrorPage/>
    },{
      path: '/project',
      element:<Project/>,
      errorElement:<ErrorPage/>
    },
    {
      path: '/team',
      element:<TeamPage/>,
      errorElement:<ErrorPage/>
    },
    {
      path: '/contact',
      element:<ContactPage/>,
      errorElement:<ErrorPage/>
    },
    {
        path: '*',
        element: <ErrorPage />,
        errorElement:<ErrorPage/>
    }
  ]);

export default router;
