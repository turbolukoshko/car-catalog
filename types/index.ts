import { MouseEventHandler, Ref, RefObject } from "react";

export type ButtonProps = {
  title: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  textStyles?: string;
  icon?: string;
  isDisabled?: boolean;
  role?: "button" | "link";
};

export type SearchManufacturerProps = {
  selected: string;
  setSelected: (manufacturer: string) => void;
  validationError: string | null;
  setValidationError: (errorMessage: string) => void;
};

export type CarProps = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
};

export type SearchButtonProps = {
  className: string;
};

export type CarInfoProps = {
  manufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
};

export type OptionProps = {
  title: string;
  value: string;
};

export type FilterProps = {
  title: string;
  options: OptionProps[];
  setFilter: any;
};

export type ShowMoreProps = {
  page: number;
  isNext: boolean;
  setLimit: (value: number) => void;
};

export type SearchBarProps = {
  setManufactured: (value: string) => void;
  setModel: (value: string) => void;
};

export type HeroBannerProps = {
  anchorRef: RefObject<HTMLDivElement>;
};
