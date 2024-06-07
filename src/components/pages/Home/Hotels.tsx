"use client";
import Wrapper from "@/components/share/Wrapper";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { AuthProvider, useAuth } from "@/components/context/AuthContext";
import useHotels from "@/components/hooks/useHotels";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

type BookingTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
};
const Hotels = () => {
  const router = useRouter();
  const { hotels } = useHotels();
  const [bookingsRoom, setBookingsRoom] = useState<BookingTypes[]>([]);

  const { user } = useAuth();

  //get bookings from localstorage
  useEffect(() => {
    const bookingsRooms = JSON.parse(localStorage.getItem("bookings") || "[]");

    setBookingsRoom(bookingsRooms);
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

        bookingsRoom.push(data);

        // Save values to localstorage
        localStorage.setItem("bookings", JSON.stringify(bookingsRoom));

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
            EXPLORE OUR EXQUISITE HOTEL COLLECTION
          </h1>
          <p className="text-sm">
            Immerse yourself in elegance with our curated selection of
            world-class hotels.
          </p>
        </div>

        <div className=" mt-5 cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {hotels?.map((hotel, index) => (
            <div
              key={index}
              className="shadow-2xl rounded-xl border hover:-translate-y-[7px] duration-500 m-1 "
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
                      {" "}
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
                    {" "}
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Hotels;
