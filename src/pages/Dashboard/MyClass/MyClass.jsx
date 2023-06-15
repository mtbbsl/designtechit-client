import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const MyClass = () => {

    return (
      <div className="w-full px-10">
        <Helmet>
          <title>DesignTechIT - My Classes</title>
        </Helmet>

        <SectionTitle
          heading={"My Classes"}
          subHeading={"Instructor Dashboard"}
        ></SectionTitle>

        

      </div>
    );
};

export default MyClass;