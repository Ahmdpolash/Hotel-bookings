"use client";

import Wrapper from "@/components/share/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaTrash } from "react-icons/fa";

const Bookings = () => {
  const [bookingsRoom, setBookingsRoom] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );
      setBookingsRoom(storedBookings);
    }
  }, []);

  //delete bookings

  const handleDelete = (id: number) => {
    const updatedBookings = bookingsRoom.filter(
      (booking: { id: number }) => booking?.id !== id
    );
    setBookingsRoom(updatedBookings);
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    toast.success("Bookings deleted successfully");
  };

  return (
    <div>
      <Wrapper>
        {bookingsRoom && bookingsRoom.length > 0 ? (
          <>
            <div className="my-5">
              <h1 className="text-center font-semibold text-xl lg:text-3xl text-slate-700">
                My Bookings Hotels
              </h1>
            </div>

            <table className="lg:w-full mt-2  overflow-x-auto">
              <thead className="border-b  overflow-x-auto text-slate-700 dark:text-white border-slate-600 py-2 h-8 rounded-md">
                <tr className="">
                  <th className="py-2 lg:px-2 px-4 font-semibold text-[15px] lg:text-[16px]">
                    No
                  </th>
                  <th className="py-2 lg:px-4 px-8 font-semibold text-[15px] lg:text-[16px]">
                    Image
                  </th>
                  <th className="py-2 lg:px-2 px-8  font-semibold text-[15px] lg:text-[16px]">
                    Name
                  </th>

                  <th className="py-2 lg:px-2 px-10 font-semibold text-[16px]">
                    Action{" "}
                  </th>
                </tr>
              </thead>

              <tbody className="text-center ">
                {bookingsRoom?.map((hotels: any, i: number) => (
                  <tr key={i} className=" border-slate-300 border-b">
                    <td className="py-1">{i + 1}</td>
                    <td className="py-1">
                      <Image
                        className="rounded-md h-[50px] w-[50px] mx-auto"
                        src={hotels?.image}
                        height={70}
                        width={70}
                        alt="img"
                      />
                    </td>
                    <td className="whitespace-nowrap py-1 dark:text-white  text-slate-700">
                      {hotels?.name}
                    </td>

                    <td className="flex justify-center items-center gap-2">
                      <Link className="" href={`/hotel/${hotels?.id}`}>
                        <FaEye className="text-[16px] text-blue-500 mx-auto relative top-1  mt-4 ml-[6px]" />
                      </Link>
                      <button onClick={() => handleDelete(hotels?.id)}>
                        <FaTrash className="text-[16px] text-[#BE123C]  mx-auto relative top-1  mt-4 ml-[6px]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div className="h-[60vh] flex justify-center items-center">
            <div className="flex flex-col gap-y-">
              <h1 className="text-xl lg:text-3xl">
                You have not bookings yet !!
              </h1>
              <br />
              <p className="mx-auto text-center">
                Bookings Now{" "}
                <a className="text-blue-500 font-bold" href="/all-hotels">
                  hotels
                </a>{" "}
              </p>
            </div>
          </div>
        )}

        <Toaster />
      </Wrapper>
    </div>
  );
};

export default Bookings;
