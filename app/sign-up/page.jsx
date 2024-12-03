"use client";
import { useState } from "react";
import Link from "next/link";
import { Toaster, toast } from "sonner";

const SignupPage = () => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/auth/signup`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        toast.success(data.message);

        // Clear the form fields by resetting the state
        setFormData({
          fullName: "",
          email: "",
          password: "",
          phone: "",
          address: "",
        });
      } 
      else if(response.status === 409){
        const wrn = await response.json();
        toast.warning(wrn.message)
      }
      else {
        const error = await response.json();
        toast.error(error.message);
      }
    } catch (error) {
      console.log("Error submitting form: ", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <Toaster richColors/>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="shadow-2xl px-10 py-10 bg-white text-gray-800 flex flex-col items-center">
          <h1 className="text-xl font-bold md:text-3xl">Create an account</h1>
          <form className="space-y-4 md:space-y-6 my-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="border border-gray-800 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
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
                className="block mb-2 text-sm font-medium"
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
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="border border-gray-800 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="+1234567890"
                required
              />
            </div>
            <div>
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                className="border border-gray-800 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Your address"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 text-center"
            >
              Sign Up
            </button>
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Already have an account?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
