import { Alert, Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import baseUrl from "../Constant";
import apis from "../../utils";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      const response = await axios.post(`${baseUrl}/${apis.signupApi}`, e);

      reset();
      Swal.fire({
        icon: "success",
        title: "Login Successful!",
        text: "Welcome back 👋",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        position: "top", // top level alert
      });
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg flex flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
            Create Account
          </h2>

          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter your name"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Email</label>
            <input
              {...register("userEmail", {
                required: "Email is required",
                pattern: {
                  value: /^(?=.*\d)(?=.*@)[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email must contain @ and at least one number",
                },
              })}
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.userEmail && (
              <p className="text-red-500">{errors.userEmail.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-3 bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-all duration-200"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupPage;
