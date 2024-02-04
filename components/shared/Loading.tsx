import Image from "next/image";

export const Loading = () => {
  return (
    <div className="mt-16 w-full flex-center">
      <Image
        src="/loading.svg"
        alt="loading"
        width={50}
        height={50}
        className="object-contain"
      />
    </div>
  );
};
