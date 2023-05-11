import { createBrowserRouter } from "react-router-dom";
import Main from "../Layoute/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import CheckOut from "../CheckOut/CheckOut";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "/checkout/:id",
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`http://localhost:3000/services/${params.id}`)
        }
      ]
    },
  ]);


  export default router