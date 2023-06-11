import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCard from "../../../Shared/ClassCard/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.enroll - a.enroll);
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        heading={"Popular Classes"}
        subHeading={"based on the number of students"}
      ></SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
        {classes.map((perClass) => (
          <ClassCard key={perClass._id} perClass={perClass}></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
