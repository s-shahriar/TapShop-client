import { createBrowserRouter } from "react-router-dom";
import LoginProtector from "../Components/LoginProtect";
import RegisterProtect from "../Components/RegisterProtect";
import Brand from "../Pages/Brands/Brands";
import Categories from "../Pages/Categories/Categories";
import ErrorPage from "../Pages/Error-Page/ErrorPage";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Join/Register";
import Layout from "../Pages/Layout/Layout";
import Login from "../Pages/Login/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "login",
        element: (
          <RegisterProtect>
            <Login></Login>
          </RegisterProtect>
        ),
      },
      {
        path: "register",
        element: (
          <RegisterProtect>
            <Register></Register>
          </RegisterProtect>
        ),
      },
      {
        path: "/categories",
        element: (
          <LoginProtector>
            <Categories></Categories>
          </LoginProtector>
        ),
      },
      {
        path: "/brands",
        element: (
          <LoginProtector>
            <Brand></Brand>
          </LoginProtector>
        ),
      },
    ],
  },
]);

export default router;
