"use client";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

type LoginValues = {
  name: string;
  email: string;
  password: string;
};
const RegisterForm = () => {
  const router = useRouter();

  const [formData, setFormData] = React.useState<LoginValues>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, password } = formData;

    //check if localstorage is empty
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    //check if email already exists
    const userExists = users.some(
      (user: { email: string }) => user.email === email
    );

    if (!userExists) {
      users.push({ name, email, password });

      //save values to localstorage

      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Account Register Success");

      router.push("/sign-in");
    } else {
      toast.error("Email already registered");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((val) => ({
                ...val,
                [e.target.name]: e.target.value,
              }))
            }
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Polash Ahmed"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((val) => ({
                ...val,
                [e.target.name]: e.target.value,
              }))
            }
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="your@email.com"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((val) => ({
                ...val,
                [e.target.name]: e.target.value,
              }))
            }
            className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter your password"
          />
          <a
            href="/"
            className="text-xs text-gray-600 cursor-not-allowed hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none"
            />
            <label
              htmlFor="remember"
              className="ml-2 block text-sm text-gray-700 dark:text-gray-300"
            >
              Remember me
            </label>
          </div>
          <a
            href="/sign-in"
            className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </a>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Registration
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default RegisterForm;
