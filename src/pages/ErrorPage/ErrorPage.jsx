import { Link } from "react-router-dom";
import errorImage from "../../assets/others/error-page.png";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img src={errorImage} alt="Error Page" className="" />
      <Link to="/">
        <button className="btn btn-outline btn-warning">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
