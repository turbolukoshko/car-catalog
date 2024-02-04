"use client";

import React, { useState } from "react";
import Image from "next/image";

import { SearchButton, SearchManufacturer } from "..";
import { SearchBarProps } from "@/types";

export const SearchBar = ({ setManufactured, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState<string>("");
  const [searchModel, setSearchModel] = useState<string>("");
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      setValidationError("Please fill in the search bar");
      return;
    }

    setModel(searchModel);
    setManufactured(searchManufacturer);
  };

  return (
    <div className="w-full">
      <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">
          <SearchManufacturer
            selected={searchManufacturer}
            setSelected={setSearchManufacturer}
            validationError={validationError}
            setValidationError={setValidationError}
          />
          <SearchButton className="sm:hidden" />
        </div>

        <div className="searchbar__item">
          <Image
            src="/model-icon.png"
            width={20}
            height={20}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="car model"
          />
          <input
            type="text"
            name="model"
            value={searchModel}
            onChange={(e) => setSearchModel(e.target.value)}
            placeholder="Tiguan"
            className="searchbar__input"
          />
          <SearchButton className="sm:hidden" />
        </div>
        <SearchButton className="max-sm:hidden" />
      </form>
      <span className="text-xs text-red-600 ml-2">{validationError}</span>
    </div>
  );
};
