"use client";

import React, { FC } from "react";
import Image from "next/image";

import { ButtonProps } from "@/types";

export const Button: FC<ButtonProps> = ({
  title,
  className,
  onClick,
  type = "button",
  textStyles,
  icon,
}) => {
  return (
    <button
      disabled={false}
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {icon && (
        <div className="relative w-6 h-6">
          <Image src={icon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};
