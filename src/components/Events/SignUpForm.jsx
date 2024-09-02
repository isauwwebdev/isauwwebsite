import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const [phoneNumber, setPhoneNumber] = useState("");

  const onSubmit = (data) => {
    if (!phoneNumber) {
      setError("phone_number", {
        type: "manual",
        message: "Phone number is required",
      });
      return;
    }

    if (isValidPhoneNumber(phoneNumber)) {
      clearErrors("phone_number");
      data.phone_number = phoneNumber;
      console.log(data);
    } else {
      setError("phone_number", {
        type: "manual",
        message: "Invalid phone number",
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark ">
      <div className="bg-light p-4 rounded w-11/12 md:w-2/5">
        <h1 className="text-center mb-4 text-lg">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              className="form-control"
              {...register("firstName", {
                required: "First Name is required",
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.firstName && (
              <div className="text-danger">{errors.firstName.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              className="form-control"
              {...register("lastName", {
                required: "Last Name is required",
                pattern: /^[A-Za-z]+$/i,
              })}
            />
            {errors.lastName && (
              <div className="text-danger">{errors.lastName.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <div className="text-danger">{errors.email.message}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone_number" className="form-label">
              Phone Number
            </label>
            <PhoneInput
              id="phone_number"
              international
              defaultCountry="US"
              value={phoneNumber}
              onChange={(value) => {
                setPhoneNumber(value);
                clearErrors("phone_number");
              }}
              className="form-control"
            />
            {errors.phone_number && (
              <div className="text-danger">{errors.phone_number.message}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
