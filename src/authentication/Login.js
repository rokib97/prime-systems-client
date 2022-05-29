import React, { useEffect } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import auth from "../firebase.init";
import useToken from "../hooks/useToken";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  const [token] = useToken(user || googleUser);
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  let signInError;
  useEffect(() => {
    if (token) {
      toast.success("Logged in Successfully");
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);
  if (loading || googleLoading || sending) {
    return <Loading></Loading>;
  }
  if (error || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || googleError?.message}</small>
      </p>
    );
  }
  const resetPassword = async (e) => {
    e.preventDefault();
    const emailValue = getValues("email");
    if (emailValue) {
      await sendPasswordResetEmail(emailValue);
      toast.success("Please Reset Your Password");
    } else {
      toast.error("Please Enter Email First!");
    }
  };

  return (
    <div className="h-full lg:h-[70vh] mt-20  flex justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <p>
                Forgot Password?
                <span>
                  <Link
                    onClick={resetPassword}
                    className="text-secondary"
                    to="/login"
                  >
                    Reset Password
                  </Link>
                </span>
              </p>
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              className="btn btn-primary text-uppercase font-bold bg-gradient-to-r from-secondary to-primary w-full max-w-xs text-white"
              type="submit"
              value="login"
            />
            <p className="mt-2">
              New to Prime Systems?
              <Link className="text-secondary" to="/signup">
                Create new account
              </Link>
            </p>
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline "
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
