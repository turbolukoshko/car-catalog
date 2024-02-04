"use client";

import React, { forwardRef } from "react";
import Image from "next/image";

import { Button } from "@/components";
import { HeroBannerProps } from "@/types";

const HeroBanner = ({ anchorRef }: HeroBannerProps) => {
  const handleScroll = () => {
    anchorRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car -- quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with out efforless booking
          process.
        </p>

        <Button
          title="Explore Cars"
          className="bg-primary-blue text-white rounded-full mt-10"
          onClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default HeroBanner;
