import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import SignUp from "../Components/Signup/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: '/',
            element: <Home/>
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