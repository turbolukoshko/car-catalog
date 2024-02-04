import Image from "next/image";

import { SearchButtonProps } from "@/types";

export const SearchButton = ({ className }: SearchButtonProps) => (
  <button type="submit" className={`-ml-3 z-10 ${className}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
