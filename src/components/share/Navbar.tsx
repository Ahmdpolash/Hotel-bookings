"use client";
import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Wrapper from "./Wrapper";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("users") ?? "[]");

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Home
      </Link>
      <Link href="/about" className="lg:ml-4">
        About
      </Link>
      <Link href="/contact" className="lg:ml-4">
        Contact
      </Link>
      <Link href="/services" className="lg:ml-4">
        Services
      </Link>
    </>
  );

  return (
    <Wrapper>
      <div className="flex justify-between items-center">
        <div className="logo">
          <h1>Logo</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:block">
          <ul className="lg:flex lg:gap-4">{navList}</ul>
        </div>

        {/* Mobile menu */}
        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden transition-all duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform h-full w-[350px] bg-white text-black absolute top-0 left-0`}
        >
          <button
            className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 />
          </button>

          <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>

          <Link href={"/sign-in"}>
            <button className="flex justify-center items-center rounded-md bg-black w-full text-white py-2">
              Login
            </button>
          </Link>
        </div>

        <div className="flex items-center">
          {user ? (
            <>
              <h1>{user[0]?.name}</h1>
            </>
          ) : (
            <Link
              className="flex justify-center items-center rounded-md bg-black w-full text-white py-2"
              href={"/sign-in"}
            >
              <button>Login</button>
            </Link>
          )}
          <IoMdMenu
            className="text-2xl cursor-pointer lg:hidden ml-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
