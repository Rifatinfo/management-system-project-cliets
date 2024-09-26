import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Pages/Login";
import Users from "../Pages/Users";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
            path : "/users",
            element : <Users></Users>,
            loader : () => fetch('http://localhost:5000/users')
        }
        
      ],
    },
  ]);