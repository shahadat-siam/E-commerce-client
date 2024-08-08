import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/SignUp";
import Contact from "../Components/Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/contact',
          element: <Contact/>
        }
      ]
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <SignUp/>
    }
  ]);