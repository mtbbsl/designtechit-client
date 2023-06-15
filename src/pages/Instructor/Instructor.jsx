import { Helmet } from "react-helmet";
import coverImg from "../../assets/others/instructors.webp";
import Cover from "../Shared/Cover/Cover";
import { useEffect, useState } from "react";
import InstructorProfile from "./InstructorProfile";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://designtechit-server.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        const instructors = data.filter((item) => item.role === "Instructor");
        setInstructor(instructors);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Instructors</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"Our Instructors"}
        msg={"Learn from our young, energetic, talented instructors."}
      ></Cover>
      <div className="grid grid-cols-1 px-12 md:px-6 lg:px-0 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
        {instructor.map((inst) => (
          <InstructorProfile key={inst._id} inst={inst}></InstructorProfile>
        ))}
      </div>
    </div>
  );
};

export default Instructor;
