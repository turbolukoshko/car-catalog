"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import { calculateCarRentalAmount } from "@/utils/calculateCarRentalAmount";
import { Button, CarDetails } from ".";
import { generateCarImageUrl } from "@/utils/generateCarImageUrl";

type CarCardProps = {
  car: CarProps;
};

enum CarTransmition {
  AUTOMATIC = "AUTOMATIC",
  MANUAL = "MANUAL",
}

export const CarCard = ({ car }: CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const carRentalAmount = calculateCarRentalAmount(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRentalAmount}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>

      <div className="relative w-full h-40 mv-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a"
                ? CarTransmition.AUTOMATIC
                : CarTransmition.MANUAL}
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <Button
            title="View More"
            className="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="flex flex-row text-white text-[14px] leading-[17px] font-bold"
            icon="/right-arrow.svg"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};
