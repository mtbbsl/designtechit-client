import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/others/login.png";
// import google from "../../assets/others/google.gif";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  // react hook form starts here
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { signIn } = useContext(AuthContext);

  // private route user redirect
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        reset();
      })
      .finally(() => {
        navigate(from, { replace: true });
      });
  };

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const loggedUser = result.user;
  //       console.log(loggedUser);
  //     })
  //     .catch((error) => {
  //       console.error(error.message);
  //     })
  //     .finally(() => {
  //       navigate(from, { replace: true });
  //     });
  // };

  // show password starts here
  const [show, setShow] = useState(false);

  return (
    <div>
      <Helmet>
        <title>DesignTechIT - Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-center">Please Login</h1>
            <img src={login} alt="Login Image" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? "text" : "password"}
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern:
                      /^(?!.*?[A-Z])(?!.*?[!@#$%^&*()_\-+=~`[\]{}|:;"'<>,.?\\/]).*$/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                <p onClick={() => setShow(!show)}>
                  <small>
                    {show ? (
                      <span className="label-text-alt link link-hover">
                        Hide Password
                      </span>
                    ) : (
                      <span className="label-text-alt link link-hover">
                        Show Password
                      </span>
                    )}
                  </small>
                </p>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password does not have any capital letter or special
                    characters
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn bg-orange-700"
                />
              </div>
            </form>
            {/* <button
              onClick={handleGoogleSignIn}
              className="btn btn-ghost btn-wide mx-auto"
            >
              <img src={google} className="w-4" /> Login with Google
            </button> */}
            <p className="text-center py-4">
              New Here? <Link to="/signup" className="hover:text-orange-500">Create an account</Link>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
