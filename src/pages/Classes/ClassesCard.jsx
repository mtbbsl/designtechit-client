import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";

const ClassesCard = ({ item }) => {
  const { image, name, instructor, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  const handleSelect = () => {
    // console.log(item);
    if (user && user?.email) {
      const cartItem = {classItemId: _id, name, image, price, instructor, email: user.email}
      fetch("https://designtechit-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update value
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Class added on the cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please login to select class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-200 shadow-xl mx-auto">
      <figure>
        <img src={image} className="object-cover w-96 h-64" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Class Name: {name}</h2>
        <p>Instructor: {instructor}</p>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleSelect(item)}
            className="btn btn-outline"
            disabled={isAdmin || isInstructor}
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
