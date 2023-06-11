import { Helmet } from "react-helmet";
import classes from '../../assets/others/classes.jpg';

const Classes = () => {
  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Classes</title>
      </Helmet>
      <div>
        <img src={classes} alt="" />
        <h2 className="text-4xl text-center my-12">Classes</h2>
      </div>
    </div>
  );
};

export default Classes;
