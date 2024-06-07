"use client";
import useHotels from "@/components/hooks/useHotels";
import Wrapper from "@/components/share/Wrapper";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type HotelDataTypes = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  location: string;
  amenities: string[];
};
const SingleHotel = ({ params }: any) => {
  const { hotels } = useHotels();
  const [singleHotels, setSingleHotels] = useState<HotelDataTypes | null>(null);
  console.log(singleHotels);

  useEffect(() => {
    if (hotels && hotels.length > 0) {
      const filter = hotels?.find((hotel) => hotel?.id == params?.slug);
      setSingleHotels(filter || null);
    }
  }, [hotels, params?.slug]);

  return (
    <div>
      <Wrapper>
        <div className="flex lg:flex-row flex-col gap-4 p-1">
          <div className="flex-1">
            <Image
              width={450}
              height={200}
              className="rounded-lg w-full"
              alt="room_image"
              src={singleHotels?.image ?? ""}
            />
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-3">
              <Image
                width={250}
                height={200}
                className="rounded-lg w-full"
                src={singleHotels?.image ?? ""}
                alt="img"
              />
              <Image
                width={250}
                height={200}
                className="rounded-lg w-full"
                src={singleHotels?.image ?? ""}
                alt="img"
              />
              <Image
                width={250}
                height={200}
                className="rounded-lg w-full"
                src={singleHotels?.image ?? ""}
                alt="img"
              />
              <Image
                src={singleHotels?.image ?? ""}
                width={250}
                height={200}
                className="rounded-lg w-full"
                alt="img"
              />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse gap-4">
          <div className="lg:w-3/4  p-1">
            <h1 className="text-2xl font-semibold mb-1">
              {singleHotels?.name}
            </h1>
            <h3 className="text-lg font-medium mb-1">
              Per Nignt {singleHotels?.price} USD
            </h3>

            <p className="text-base text-gray-600 mb-1">
              Location : {singleHotels?.location}
            </p>
            <p className="text-base text-gray-600 mb-1">
              {singleHotels?.description}
            </p>
            <div>
              <p className="font-medium mb-1">Choose a date</p>
              <input
                type="date"
                className="mb-2 border border-[#BE123C] outline-[#BE123C] rounded-lg p-2"
                min="2024-06-06"
                defaultValue=""
              />
            </div>
            <button className="text-white bg-[#BE123C] flex items-center justify-center w-full font-semibold p-2 rounded-lg false  ">
              Book Now
            </button>
          </div>

          <div className="lg:w-1/4 p-1">
            <h2 className="text-xl font-bold">Room Details</h2>
            <h3 className="text-lg font-semibold">
              Special Offer: Early check-in available
            </h3>
            <h3>Room Size: 200 sq. ft</h3>
            <p>Seats Available: 0</p>
          </div>
        </div>

        <div className="my-4">
          <h1 className="text-xl font-semibold">
            Write a review For this room
          </h1>
          <div className="flex lg:flex-row flex-col gap-3 p-2">
            <div className="flex-1">
              <form className="flex flex-col">
                <div>
                  <p className="text-lg font-semibold ml-1">Rating</p>
                  <select
                    name="ratings"
                    className="border border-[#BE123C] w-[97%] rounded-lg p-2 m-1 outline-[#BE123C]"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                  </select>
                </div>
                <p className="text-lg font-semibold ml-1">Comment</p>
                <textarea
                  className="border rounded-lg p-2 outline-[#BE123C] border-[#BE123C] w-[97%] m-1"
                  name="review"
                  cols={10}
                  rows={5}
                  placeholder="Write Your Review Here..."
                  defaultValue={""}
                />
                <button className="text-white bg-[#BE123C] flex items-center justify-center w-[120px] font-semibold p-2 rounded-full">
                  Post Review
                </button>{" "}
              </form>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">Total Review : 3</h3>
              <div className="flex flex-col gap-2 mt-4">
                <div className="bg-base-100 p-2 rounded-lg border shadow">
                  <div className="flex">
                    <img
                      className="h-[50px] w-[50px] rounded-full object-cover"
                      src="https://i.ibb.co/DYKcxGF/avater.jpg"
                      alt=""
                    />
                    <div className="ml-4 w-full mb-5">
                      <h1 className="font-semibold text-lg">Polash Ahmed</h1>
                      <p />

                      <hr />
                    </div>
                  </div>
                  <p className="text-lg font-medium ml-16">
                    Affordable and convenient for solo travelers.
                  </p>
                </div>
                <div className="bg-base-100 p-2 rounded-lg border shadow">
                  <div className="flex">
                    <img
                      className="h-[50px] w-[50px] rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/a/ACg8ocJY3_kXUBdTxB8E6J91oTM7R9DMuc2r3NLPrLgjbve9=s96-c"
                      alt=""
                    />
                    <div className="ml-4 w-full mb-5">
                      <h1 className="font-semibold text-lg">Polash Ahmed</h1>
                      <p>2023-11-18</p>

                      <hr />
                    </div>
                  </div>
                  <p className="text-lg font-medium ml-16">
                    Perfect for single person. Room service are pretty good and
                    fast.
                  </p>
                </div>
                <div className="bg-base-100 p-2 rounded-lg border shadow">
                  <div className="flex">
                    <img
                      className="h-[50px] w-[50px] rounded-full object-cover"
                      src="https://lh3.googleusercontent.com/a/ACg8ocKrz6_DJFf3wuLeruRvNC46d16fDtPxOziTG3P-204Q=s96-c"
                      alt=""
                    />
                    <div className="ml-4 w-full mb-5">
                      <h1 className="font-semibold text-lg">Ashim Barman</h1>
                      <p>2023-12-19</p>

                      <hr />
                    </div>
                  </div>
                  <p className="text-lg font-medium ml-16">Nice Rooms</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default SingleHotel;
