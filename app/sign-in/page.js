"use client";
import { useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "sonner";

const signinPage = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/api/auth/signIn`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const userData = await response.json();
        toast.success(userData.message);
      } else if (response.status === 404) {
        const wrn = await response.json();
        toast.warning(wrn.message);
      } else {
        const error = await response.json();
        toast.error(error.message);
      }
    } catch (error) {
      console.log("Error", error);
      toast.error("An error occurred. please try again.");
    }
  };

  return (
    <div>
      <Toaster richColors />
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        {/* sign in section */}
        <div className="shadow-2xl px-10 py-10 bg-white p-5 text-gray-800 flex flex-col items-center">
          <h1 className="text-xl font-bold md:text-3xl">Welcome</h1>
          <form className="space-y-4 md:space-y-6 my-5" onSubmit={handleSignin}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-800 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Forgot password?
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                href={"/"}
                className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Back
              </Link>
              <button
                type="submit"
                className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
            </div>

            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                href="/sign-up"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default signinPage;
