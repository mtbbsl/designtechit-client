import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMyEnrollClass from "../../../hooks/useMyEnrollClass";

const MyEnrolledClass = () => {
  const [classes] = useMyEnrollClass();
  // console.log(classes);

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>DesignTechIT - Enrolled Classes</title>
      </Helmet>
      <SectionTitle
        heading={"My Enrolled Classes"}
        subHeading={"Student Dashboard"}
      ></SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-zebra-zebra">
          <thead>
            {/* Table Heading */}
            <tr className="bg-base-300">
              <th>#</th>
              <th>TransactionID</th>
              <th>Date Purchased</th>
              <th>Email</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Status</th>
              <th>Purchased Class Names</th>
            </tr>
          </thead>
          <tbody>
            {/* Table Body */}
            {classes.map((row, index) => (
              <tr key={row._id}>
                <td>{index + 1}</td>
                <td>{row.transactionId}</td>
                <td>
                  {new Date(row.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
                <td>{row.email}</td>
                <td>${row.price}</td>
                <td>{row.quantity}</td>
                <td>{row.status}</td>
                <td>
                  {row.itemNames.map((itemName, index) => (
                    <p key={index}>{itemName}</p>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;