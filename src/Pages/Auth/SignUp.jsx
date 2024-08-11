import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="max-w-screen-lg container mx-auto">
        <div className="my-10">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h3 className="font-bold text-lg">Create Account</h3>
              {/*First Name */}
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
                    First Name field is required
                  </span>
                )}
              </div>
              {/*Last Name */}
              <div className="mt-4 space-y-2">
                <span>Last Name</span>
                <br />
                <input
                  type="text"
                  placeholder="enter your last name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-600">
                    Last Name field is required
                  </span>
                )}
              </div>
              {/*Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-600">
                    Email field is required
                  </span>
                )}
              </div>
              {/*Contact Number*/}
              <div className="mt-4 space-y-2">
                <span>Contact Number</span>
                <br />
                <input
                  type="tel"
                  placeholder="enter your contact number"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("contact", { required: true })}
                />
                <br />
                {errors.contact && (
                  <span className="text-sm text-red-600">
                    Contact Number is required
                  </span>
                )}
              </div>
              {/*Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 bordered rounded-md outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
