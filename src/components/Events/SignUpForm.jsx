import React from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div className="bg-light p-4 rounded">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <input
              name="firstName"
              placeholder="First Name"
              className="form-control"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="mb-3">
            <input
              name="lastName"
              placeholder="Last Name"
              className="form-control"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="mb-3">
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="form-control"
              {...register("email", { required: true })}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
