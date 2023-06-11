import { Helmet } from "react-helmet";
import classImg from '../../assets/others/classes.jpg';
import Cover from "../Shared/Cover/Cover";
import { useState } from "react";
import { useEffect } from "react";
import ClassesCard from "./ClassesCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => {
        const classes = data.filter((item) => item.status === "approved");
        setClasses(classes);
      });
  } , [])

  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Classes</title>
      </Helmet>
      <Cover
        img={classImg}
        title={"Our Classes"}
        msg={
          "Seats are limited. So hurry to select your desired class to enroll."
        }
      ></Cover>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-12">
        {classes.map((item) => (
          <ClassesCard key={item._id} item={item}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
