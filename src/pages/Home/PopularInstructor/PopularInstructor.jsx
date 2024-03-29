import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import InstructorCard from "../../../Shared/InstructorCard/InstructorCard";

const PopularInstructor = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
      fetch("https://designtechit-server.vercel.app/classes")
        .then((res) => res.json())
        .then((data) => {
          const sortedInstructor = data.sort((a, b) => b.instructor - a.instructor);
          const topInstructor = sortedInstructor.slice(0, 6);
          setInstructors(topInstructor);
        });
    }, []);

    return (
      <section>
        <SectionTitle
          heading={"Popular Instructors"}
          subHeading={"based on the number of students"}
        ></SectionTitle>
        <div className="grid grid-cols-1 px-12 md:px-6 lg:px-0 mb-12 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {instructors.map((inst) => (
            <InstructorCard key={inst._id} inst={inst}></InstructorCard>
          ))}
        </div>
      </section>
    );
};

export default PopularInstructor;