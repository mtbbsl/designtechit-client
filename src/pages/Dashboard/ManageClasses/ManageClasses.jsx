import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClass from "../../../hooks/useClass";

const ManageClasses = () => {
    const [classes] = useClass();

    return (
      <div className="w-full px-10">
        <Helmet>
          <title>DesignTechIT - Manages Classes</title>
        </Helmet>

        <SectionTitle
          heading={"Manage Classes"}
          subHeading={"Admin Dashboard"}
        ></SectionTitle>

        <div className="overflow-x-auto">
          <table className="table table-zebra-zebra">
            {/* head */}
            <thead className="bg-base-300">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Instructor Name</th>
                <th>Instructor Email</th>
                <th>Seats</th>
                <th>Price</th>
                <th>Status</th>
                <th>Approve</th>
                <th>Deny</th>
                <th>Feedback</th>
              </tr>
            </thead>
            {/* body */}
            <tbody>
              {classes.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.instructor}</td>
                  <td>{item.email}</td>
                  <td>{item.seat}</td>
                  <td>${item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn btn-success btn-xs">Approve</button>
                  </td>
                  <td>
                    <button className="btn btn-error btn-xs">Deny</button>
                  </td>
                  <td>
                    <button className="btn btn-info btn-xs">Feedback</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageClasses;