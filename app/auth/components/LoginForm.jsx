"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import CryptoJS from "crypto-js";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import { api } from "@/api/auth";


const LoginForm = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const key = process.env.NEXT_PUBLIC_SECRET_KEY;

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const initialValues = {
    email: "",
    password: "",
    rememberMe: false,
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Password is Required"),
  });

  const handleLogin = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const response = await api.login({
        email: values.email,
        password: values.password,
      });
      if (response?.user.role === "Steward") {
        router.push("/admin/scanner");
      } else {
        router.push("/admin/overview");
      }
      toast.success(response.message);
      const encryptedToken = CryptoJS.AES.encrypt(
        response?.Token,
        key
      ).toString();
      sessionStorage.setItem("userToken", encryptedToken);
      sessionStorage.setItem("user", JSON.stringify(response?.user));
      setIsLoggedIn(true);
    } catch (error) {
      toast.error("error");
      toast.warning(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="w-full bg-white">
            <div className="flex  flex-col items-center justify-center w-full  overflow-hidden">
              <h1 className="text-2xl font-bold text-primary text-center mb-4">
                SE
              </h1>
              <p className="text-lightPrimary text-base font-medium mb-10">
                Login to Your Dashboard
              </p>
            </div>

            <div className="mb-6">
              {/* Email */}
              <div className="flex flex-col mb-6">
                <div className="flex relative  hover:border-primary">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                    </svg>
                  </span>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary   hover:border-primary focus:border-transparent"
                    placeholder="Enter email address"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-xs mt-2"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <div className="flex relative focus:border-primary  hover:border-primary">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 hover:border-primary text-gray-500 shadow-sm text-sm">
                    <svg
                      width="15"
                      height="15"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                    </svg>
                  </span>
                  <Field
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="flex-1 appearance-none border-l border-b border-t  border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-primary  hover:border-primary focus:border-transparent"
                    placeholder="Enter Admin Code"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="inline-flex rounded-r-lg  appearance-none  items-center px-3 border-t bg-white border-r border-b border-gray-300 text-gray-500 shadow-sm text-sm cursor-pointer focus:outline-none "
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-xs "
                />
              </div>
            </div>
            {/* Remember Me */}
            <div className="flex items-center justify-between  mb-2 -mt-4 w-full">
              <div className="flex items-center">
                <Field
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  className="p-4 text-sideBarBlue focus:ring-darkGreen border-gray-300 rounded"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block font-medium text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="flex">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoggedIn}
                  className="bg-primary hover:bg-primary/70 text-white w-full mt-2  rounded-md cursor-pointer font-bold py-2 px-6"
                >
                  {isSubmitting ? (
                    <div className="flex justify-center">
                      <BeatLoader color="#fff" />
                    </div>
                  ) : isLoggedIn ? (
                    "Logged in"
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              {/* <div className="text-sm">
                <Link
                  to="#"
                  className="font-bold text-sm  text-darkGreen hover:text-darkGreen/90"
                >
                  Forgot your password?
                </Link>
              </div> */}
            </div>
            <br />
            {/* Submit Button */}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
