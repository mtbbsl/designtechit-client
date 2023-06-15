import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Instructor from "../pages/Instructor/Instructor";
import Classes from "../pages/Classes/Classes";
import Dashboard from "../Layout/Dashboard";
import MySelectedClasses from "../pages/Dashboard/MySelectedClasses/MySelectedClasses";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "instructor",
        element: <Instructor></Instructor>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myselectedclass",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "manageuser",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "addclass",
        element: <AddClass></AddClass>,
      },
    ],
  },
]);
