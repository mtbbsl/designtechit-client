import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
                refetch();
              Swal.fire("Deleted!", "Your data has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard - Selected Classes</title>
      </Helmet>
      <div className="uppercase font-semibold h-16 items-center flex justify-between">
        <h3 className="text-2xl">Total Classes: {cart.length}</h3>
        <h3 className="text-2xl">Total Price: ${total}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            {/* Table Heading */}
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Body */}
            {cart.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={row.image} />
                    </div>
                  </div>
                </td>
                <td>{row.name}</td>
                <td className="text-end">${row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
                    className="btn btn-secondary btn-xs"
                  >
                    Del
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent btn-xs">Pay</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClasses;
