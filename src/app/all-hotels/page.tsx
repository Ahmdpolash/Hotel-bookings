"use client";

import Wrapper from "@/components/share/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/components/context/AuthContext";
import useHotels from "@/components/hooks/useHotels";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const AllHotels = () => {
  const router = useRouter();
  const { hotels } = useHotels();
  const { user } = useAuth();
  const [bookingsRoom, setBookingsRoom] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );
      setBookingsRoom(storedBookings);
    }
  }, []);

  const handleBookings = (
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    if (user && user.length > 0) {
      const bookingExists = bookingsRoom.some(
        (booking: { id: number }) => booking.id === id
      );

      if (!bookingExists) {
        const data = {
          id: id,
          name: name,
          price: price,
          image: image,
        };

        const updatedBookings = [...bookingsRoom, data];
        setBookingsRoom(updatedBookings as any);

        // Save values to localStorage
        if (typeof window !== "undefined") {
          localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        }

        toast.success("Booking Successful");
      } else {
        toast.error("Room already booked");
      }
    } else {
      toast.error("Please login to book");
      router.push("/sign-in");
    }
  };

  return (
    <div className="py-6">
      <Wrapper>
        <div className="text-center space-y-1">
          <h1 className="text-slate-800 font-semibold text-xl lg:text-3xl">
            Explore All Hotels
          </h1>
          <p className="text-sm">
            Immerse yourself in elegance with our curated selection of
            world-class hotels.
          </p>
        </div>

        <div className="mt-5 cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hotels?.map((hotel, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-xl border hover:-translate-y-[7px] duration-500 m-1"
            >
              <div className="relative">
                <Image
                  className="w-full h-[250px] object-cover bg-center mb-1 rounded-t-xl"
                  src={hotel?.image}
                  height={200}
                  width={350}
                  alt="hotel"
                />
              </div>
              <div className="p-2 flex flex-col flex-1">
                <h3 className="font-bold text-lg">{hotel?.name}</h3>
                <p className="font-semibold">
                  <span className="text-slate-600">
                    Price : {hotel?.price} / night
                  </span>
                </p>
                <p className="text-slate-700 mt-2 mb-1">{hotel?.description}</p>

                <div className="flex items-center justify-between">
                  <Link className="mb-2" href={`/hotel/${hotel.id}`}>
                    <button className="text-white bg-[#111111] hover:bg-[#E11D48] duration-300 mt-1 flex items-center justify-center w-[120px] font-medium p-2 rounded-full">
                      View Details
                    </button>
                  </Link>
                  <button
                    onClick={() =>
                      handleBookings(
                        hotel.id,
                        hotel.name,
                        hotel.price,
                        hotel.image
                      )
                    }
                    className="text-white bg-[#E11D48] hover:bg-[#111111] duration-300 mt-1 flex items-center justify-center w-[120px] font-medium p-2 rounded-full"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex justify-center items-center mt-6">
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>

        <Toaster />
      </Wrapper>
    </div>
  );
};

export default AllHotels;
