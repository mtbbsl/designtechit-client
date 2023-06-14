import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const [disabled, setDisabled] = useState(false);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} now Admin`,
            showConfirmButton: false,
            timer: 1500,
          });
          if(user.role === "Admin"){
            setDisabled(true);
          }
          else {
            setDisabled(false);
          }
          refetch();
        }
      });
  };

  const handleMakeInstructor = (user) => {
    fetch(`http://localhost:5000/users/instructor/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} now Instructor`,
            showConfirmButton: false,
            timer: 1500,
          });
          if (user.role === "Instructor") {
            setDisabled(true);
          } else {
            setDisabled(false);
          }
          refetch();
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Manage Users</title>
      </Helmet>
      <h3 className="text-2xl font-semibold my-4">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Instructor</th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "Admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-accent btn-xs"
                      disabled={disabled}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                    {user.role === "Instructor" ? (
                    "Instructor"
                  ) : (
                  <button
                    onClick={() => handleMakeInstructor(user)}
                    className="btn btn-secondary btn-xs"
                    disabled={disabled}
                  >
                    Make Instructor
                  </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
