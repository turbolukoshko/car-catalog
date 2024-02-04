"use client";

import { useRouter } from "next/navigation";

import { ShowMoreProps } from "@/types";
import { Button } from ".";

export const ShowMore = ({ page, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();

  const handleNavigation = () => {
    const newLimit = (page + 1) * 10;
    setLimit(newLimit);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <Button
          title="Show More"
          type="button"
          className="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};
