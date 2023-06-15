import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMyClasses from "../../../hooks/useMyClasses";

const MyClass = () => {
    const [classes] = useMyClasses();
    // console.log(classes);

    return (
      <div className="w-full px-10">
        <Helmet>
          <title>DesignTechIT - My Classes</title>
        </Helmet>

        <SectionTitle
          heading={"My Classes"}
          subHeading={"Instructor Dashboard"}
        ></SectionTitle>

        
        <div className="overflow-x-auto">
          <table className="table table-zebra-zebra">
            <thead>
              {/* Table Heading */}
              <tr className="bg-base-300">
                <th>#</th>
                <th>Image</th>
                <th>Class Name</th>
                <th>Price</th>
                <th>Seats</th>
                <th>Enrolled</th>
                <th>Status</th>
                <th>Feedback</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {/* Table Body */}
              {classes.map((row, index) => (
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
                  <td>{row.seat}</td>
                  <td>{row.enroll}</td>
                  <td>{row.status}</td>
                  <td>None</td>
                  <td>
                    <button className="btn btn-info btn-xs">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyClass;