"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export const BackBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className=" font-bold justify-center items-center border-black border-2 px-4 py-1 flex gap-2 rounded-md "
    >
      <ChevronLeft className="  border-resGreen" />
      <span className="">Back</span>
    </button>
  );
};
