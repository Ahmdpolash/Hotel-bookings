"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type LoginValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const router = useRouter();
  const [users, setUsers] = useState<LoginValues[]>([]);
  const [formData, setFormData] = React.useState<LoginValues>({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users") ?? "[]");
    setUsers(storedUsers);
  }, []);

  //get users info from local storage
  // const users =
  //   typeof window !== "undefined"
  //     ? JSON.parse(localStorage.getItem("users") ?? "[]")
  //     : [];

  // form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = formData;

    //check user exists or not
    if (users && users.length > 0) {
      const LocalEmail = users[0]?.email;
      const LocalPassword = users[0]?.password;
      // check if user credentials are valid
      if (email == LocalEmail && password == LocalPassword) {
        toast.success("Login successful");

        router.push("/");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        toast.error("Please check your credentials");
        // alert("wrong credentials");
      }
    } else {
      toast.error("user not found ");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
            className="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            href="/sign-up"
            className="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </a>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Login
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default LoginForm;
