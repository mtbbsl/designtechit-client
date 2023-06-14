import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);

            const saveUser = {
              name: loggedInUser.displayName,
              email: loggedInUser.email,
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then(() => {
                  navigate(from, { replace: true });
              });
        })
    }

    return (
      <div>
        <div className="divider"></div>
        <div className="w-full text-center my-4 flex justify-center items-center">
          <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline bg-orange-600">
            <FaGoogle></FaGoogle>
          </button>
          <p className="ml-4">Login with Google</p>
        </div>
      </div>
    );
};

export default SocialLogin;