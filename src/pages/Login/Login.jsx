import { Link } from "react-router-dom";
import login from "../../assets/others/login.png";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Login = () => {
    // react hook form starts here
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
      console.log(data);
    };

    // show password starts here
    const [show, setShow] = useState(false);
    
    return (
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
            <p className="text-center py-4">
              <small>
                New Here? <Link to="/signup">Create an account</Link>{" "}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Login;