"use client";
import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import Link from "next/link";
import Wrapper from "./Wrapper";
import { useRouter } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  //get users data from localstorage
  const user = JSON.parse(localStorage.getItem("users") ?? "[]");

  //logout user
  const handleLogOut = () => {
    localStorage.removeItem("users");
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setOpen(!open);
  };

  //dropdown code
  const [openDrop, setOpenDrop] = useState(false);
  const dropDownRef = useRef<HTMLDivElement | null>(null);
  const items = ["Log Out"];

  useEffect(() => {
    const close = (e: any) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(e.target as Node)
      ) {
        setOpenDrop(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => {
      document.removeEventListener("mousedown", close);
    };
  }, []);

  //dropdown ended

  const navList = (
    <>
      <Link href="/" className="lg:ml-4">
        Home
      </Link>
      <Link href="/all-hotels" className="lg:ml-4">
        Hotels
      </Link>
      <Link href="/about-us" className="lg:ml-4">
        About Us
      </Link>
      <Link href="/my-bookings" className="lg:ml-4">
        My Bookings
      </Link>
    </>
  );

  const handleRedirect = () => {
    router.push("/sign-in");
  };

  return (
    <div className="border-b border-slate-200 shadow-md">
      <Wrapper>
        <div className="flex justify-between  items-center">
          <div className="logo">
            <h1 className="text-[20px]">
              <span className="text-[22px] text-[#E11D48] font-bold">H</span>
              Booking
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:block ">
            <ul className="lg:flex lg:gap-4">{navList}</ul>
          </div>

          {/* Mobile menu */}
          <div
            className={`${
              open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } lg:hidden transition-all fixed z-50 duration-500 border border-gray-200 shadow-lg backdrop-blur-sm transform w-[350px] bg-white text-black h-screen top-0 left-0`}
          >
            <button
              className="px-4 py-2 text-3xl font-semibold flex absolute right-0 mt-2"
              onClick={() => setOpen(false)}
            >
              <RxCross1 />
            </button>

            <ul className="flex  flex-col p-5 gap-5 text-[18px]">{navList}</ul>

            {user && user.length > 0 ? (
              <div className="mx-auto flex justify-center items-center">
                <button
                  className="bg-red-500   px-4 py-2 rounded-md text-white"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <Link href={"/sign-in"}>
                <button className="flex justify-center items-center rounded-md bg-black w-full text-white py-2">
                  Login
                </button>
              </Link>
            )}
          </div>

          <div className="flex items-center">
            {user && user.length > 0 ? (
              <>
                <div
                  ref={dropDownRef}
                  className="relative hidden lg:block border border-blue-400 rounded-full py-1 px-2 mx-auto w-fit text-black"
                >
                  <button
                    className="flex gap-1 items-center"
                    onClick={() => setOpenDrop((prev) => !prev)}
                  >
                    <img
                      width={40}
                      height={40}
                      className="size-10 rounded-full bg-slate-500 object-cover duration-500 hover:scale-x-[98%] hover:opacity-80"
                      src="https://source.unsplash.com/300x300/?profile"
                      alt="avatar drop down navigate ui"
                    />

                    <h3>{user[0]?.name}</h3>
                    <FaAngleDown />
                  </button>
                  <ul
                    className={`${
                      openDrop ? "visible duration-300" : "invisible"
                    } absolute right-0 top-14 z-50 w-fit rounded-sm bg-slate-200 shadow-md`}
                  >
                    {items.map((item, idx) => (
                      <li
                        onClick={handleLogOut}
                        key={idx}
                        className={`rounded-sm px-6 py-2 cursor-pointer ${
                          openDrop ? "opacity-100 duration-300" : "opacity-0"
                        }  ${
                          item === "Log Out"
                            ? "text-red-500 hover:bg-red-600 hover:text-white"
                            : "hover:bg-slate-300"
                        }`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleRedirect}
                  className="hidden bg-black text-white py-2 rounded-md px-5 lg:block lg:ml-4"
                >
                  Login
                </button>
                <IoMdMenu
                  className="text-2xl cursor-pointer block lg:hidden ml-4"
                  onClick={toggleMenu}
                />
              </>
            )}

            <IoMdMenu
              className="text-2xl lg:hidden cursor-pointer block  ml-4"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
