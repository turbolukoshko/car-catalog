import { CarInfoProps } from "@/types";

const key = "9592e20c4bmshbd78d252b5d6bb6p122104jsn92e33bf80dbf";
const host = "cars-by-api-ninjas.p.rapidapi.com";

export const fetchCars = async (carInfo: CarInfoProps) => {
  const { manufacturer, year, fuel, limit, model } = carInfo;
  const headers = {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": host,
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
};
