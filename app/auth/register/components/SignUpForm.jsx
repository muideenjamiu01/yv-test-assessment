"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

import { BeatLoader } from "react-spinners";
import { useRouter } from "next/navigation";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../../firebase";


import Logo from "../../../../public/assets/logo/logo.svg";
import Link from "next/link";
import Image from "next/image";

const SignUpForm = () => {
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("The Email field is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSignUp = async (values, { setSubmitting }) => {
    setSubmitting(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      const user = userCredential.user;
      // Update the user's display name
      await updateProfile(user, {
        displayName: values.email.split('@')[0], // You can use any value you want for the display name
      });

      sessionStorage.setItem("user", JSON.stringify(user));
      router.push("/");
      toast.success("Registration successful!");
      setIsLoggedIn(true);
    } catch (error) {
      const errorMessage =
        error.message || "Registration failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setSubmitting(false);
    }
  };

 

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSignUp}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="w-full bg-white px-8">
            <div className="flex  flex-col  w-full  overflow-hidden">
              <Image
                src={Logo}
                alt="Logo"
                width={150}
                height={"auto"}
                className="mb-10"
              />
              <div className="mb-10">
                <p className="text-lightPrimary text-2xl sm:text-3xl font-normal ">
                  Create Your Account Here....
                </p>
                <div className="mt-1 space-y-6">
                  <div>
                    Sign up with your email and password to use the Invoice app
                  </div>
                </div>
              </div>              
            </div>

            <div className="mb-6">
              {/* Email */}
              <div className="flex flex-col mb-6">
                <div className="flex relative  ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500  text-sm">
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
                    className="rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-3 px-4 bg-transparent text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-[#46B2C8]   hover:border-[#46B2C8] focus:border-transparent"
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
                <div className="flex relative focus:border-[#46B2C8]  hover:border-[#46B2C8]
                ">
                  <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 hover:border-[#46B2C8] text-gray-500  text-sm">
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
                    className="flex-1 appearance-none border-l border-b border-t  border-gray-300 w-full py-3 px-4 bg-white text-gray-700 placeholder-gray-400  text-base focus:outline-none focus:ring-2 focus:ring-[#46B2C8]  hover:border-[#46B2C8] focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="inline-flex rounded-r-lg  appearance-none  items-center px-3 border-t bg-white border-r border-b border-gray-300 text-gray-500  text-sm cursor-pointer focus:outline-none "
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
            
            <div className="flex items-center justify-end  mb-10 -mt-4 w-full">
              <div className="text-sm text-primaryGrey ">
              Already Have An Account?
                <Link
                  href="/"
                  className="ml-2 font-bold text-sm  text-[#46B2C8] hover:text-darkGreen/90"
                >
                  Log in
                </Link>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                disabled={isSubmitting || isLoggedIn}
               className="bg-[#46B2C8] hover:bg-#46B2C8/70 text-white w-full mt-2  rounded-md cursor-pointer font-bold py-3 px-6">
                {isSubmitting ? (
                  <div className="flex justify-center">
                    <BeatLoader color="#fff" />
                  </div>
                ) : isLoggedIn ? (
                  "Already signed Up"
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
