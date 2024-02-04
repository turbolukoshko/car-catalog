"use client";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

import { SearchManufacturerProps } from "@/types";
import { manufacturers } from "@/constants";

export const SearchManufacturer = ({
  selected,
  setSelected,
  validationError,
  setValidationError,
}: SearchManufacturerProps) => {
  const [inputValue, setInputValue] = useState("");
  const filteredManufacturers =
    inputValue === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(inputValue.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </Combobox.Button>

          <Combobox.Input
            className={`search-manufacturer__input ${
              validationError ? "border border-red-600" : ""
            }`}
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => {
              return manufacturer;
            }}
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={(e) =>
              e.target.value === ""
                ? setValidationError("Please fill in the search bar")
                : setValidationError("")
            }
          />

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setInputValue("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && inputValue !== "" ? (
                <Combobox.Option
                  value={inputValue}
                  className="search-manufacturer__option"
                >
                  Nothing found
                </Combobox.Option>
              ) : (
                filteredManufacturers.map((item) => (
                  <Combobox.Option
                    key={item}
                    className={({ active }) =>
                      `relative search-manufacturer__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};
