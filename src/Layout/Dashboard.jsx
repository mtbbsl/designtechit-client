import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaShoppingBag,
  FaWallet,
  FaHome,
  FaImage,
  FaLaptop,
  FaUser,
  FaUsers,
  FaSchool,
  FaBook,
  FaAtlas,
} from "react-icons/fa";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {
  const [cart] = useCart();

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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

            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/manageclass">
                    <FaSchool></FaSchool>Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageuser">
                    <FaUsers></FaUsers>Manage Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {isInstructor ? (
                  <>
                    <li>
                      <NavLink to="/dashboard/addclass">
                        <FaBook></FaBook> Add a Class
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/dashboard/myclass">
                        <FaAtlas></FaAtlas> My Classes
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </>
            )}

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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
