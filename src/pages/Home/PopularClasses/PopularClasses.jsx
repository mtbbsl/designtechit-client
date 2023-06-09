import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassCard from "../../../Shared/ClassCard/ClassCard";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("classes.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedClasses = data.sort((a, b) => b.enrolled - a.enrolled);
        const topClasses = sortedClasses.slice(0, 6);
        setClasses(topClasses);
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"based on the number of students"}
        heading={"Popular Classes"}
      ></SectionTitle>
      <div className="grid grid-cols-1 mb-12 lg:grid-cols-3 gap-12">
        {classes.map((perClass) => (
          <ClassCard key={perClass._id} perClass={perClass}></ClassCard>
        ))}
      </div>
    </section>
  );
};

export default PopularClasses;
