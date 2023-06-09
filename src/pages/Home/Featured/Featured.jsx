
import featuredImg from "../../../assets/slider/logo-design.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item bg-fixed text-white">
      <div className="bg-black bg-opacity-70 py-6 my-12">
        <SectionTitle
          heading={"Featured Class"}
          subHeading={"Check It Out"}
        ></SectionTitle>
        <div className="md:flex justify-center items-center px-24 pb-24">
          <div className="md:w-1/2">
            <img src={featuredImg} />
          </div>
          <div className="md:w-1/2 md:ml-10 my-4 space-y-4">
            <p>May 22, 2023</p>
            <p className="uppercase">The featured logo design class</p>
            <p>
              The competitive price of $1000 makes it accessible to a wide range
              of individuals interested in honing their design skills. The class
              has already enrolled 30 students out of the available 40 seats,
              indicating a high level of interest and demand. This enthusiastic
              response speaks to the quality of instruction and the value that
              students perceive in this logo design course. Enrolling in this
              class provides an opportunity to acquire practical knowledge and
              develop a strong foundation in the field of logo design under the
              guidance of an experienced instructor.
            </p>
            <button className="btn btn-outline border-0 border-b-4">
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
