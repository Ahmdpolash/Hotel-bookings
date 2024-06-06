"use client";
import axios from "axios";
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
const useHotels = () => {
  const [hotels, setHotels] = useState<HotelDataTypes[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/constant/data.json");
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return { hotels };
};

export default useHotels;
