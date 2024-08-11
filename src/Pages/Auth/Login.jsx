import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div>

      <div className="max-w-screen-lg container mx-auto">
        <div className="my-10">

        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="font-bold text-lg">Login From Here !</h3>
          {/*Email */}
          <div className="mt-4 space-y-2">
            <span>First Name</span>
            <br />
            <input
              type="text"
              placeholder="enter your first name"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            <br />
            {errors.name && (
              <span className="text-sm text-red-600">
                First Name is required
              </span>
            )}
          </div>
          {/*Password */}
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="password"
              placeholder="enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br />
            {errors.password && (
              <span className="text-sm text-red-600">
                Password field is required
              </span>
            )}
          </div>
          {/*Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-700
                             text-white px-3 py-2 bordered rounded-md outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default Login;
