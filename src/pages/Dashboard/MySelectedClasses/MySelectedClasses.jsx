import { Helmet } from "react-helmet";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MySelectedClasses = () => {
  const [cart, refetch] = useCart();
  // const total = cart.reduce((sum, item) => item.price + sum, 0);

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
    <div className="w-full px-10">
      <Helmet>
        <title>Dashboard - Selected Classes</title>
      </Helmet>
      <SectionTitle
        heading={"My Selected Classes"}
        subHeading={"Student Dashboard"}
      ></SectionTitle>
      
      <div className="overflow-x-auto">
        <table className="table table-zebra-zebra">
          <thead>
            {/* Table Heading */}
            <tr className="bg-base-300">
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
                <td>${row.price}</td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
                    className="btn btn-error btn-xs"
                  >
                    Del
                  </button>
                </td>
                <td>
                  <button className="btn btn-success btn-xs">Pay</button>
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
