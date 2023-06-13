import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaImage,
  FaLaptop,
  FaUser,
} from "react-icons/fa";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <NavLink to="/dashboard/studenthome">
                <FaHome></FaHome>Student Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myselectedclass">
                <FaShoppingBag></FaShoppingBag>My Selected Classes
                <span>+{cart?.length || 0}</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myenrolledclass">
                <FaImage></FaImage>My Enrolled Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymenthistory">
                <FaWallet></FaWallet>Payment History
              </NavLink>
            </li>
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Homepage
              </NavLink>
            </li>
            <li>
              <NavLink to="/instructor">
                <FaUser></FaUser>Instructors
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes">
                <FaLaptop></FaLaptop>Classes
              </NavLink>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
