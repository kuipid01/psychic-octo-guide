import { Download, FileArchive, NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <div className="h-screen w-full bg-gradient-to-r flex flex-col gap-3 justify-center items-center from-resGreen/90 via-white to-white">
      <h1 className=" text-[20px] font-bold uppercase text-resGreen">
        How it works
      </h1>
      <p className="text-4xl capitalize font-medium">Getting Started</p>
      <div className="flex gap-5 max-w-[400px] flex-col">
        <div className=" flex gap-4 items-center">
          <div className=" size-[50px] flex justify-center items-center rounded-md bg-green-500/30">
            <FileArchive color="green" />
          </div>{" "}
          <span>
            Save time using pre-written bullets crafted by resume experts.
          </span>
        </div>
        <div className=" flex gap-4 items-center">
          <div className=" size-[50px] flex justify-center bg-purple-500/50 items-center rounded-md ">
            <NotebookPen color="purple" />
          </div>
          <span>
            Save time using pre-written bullets crafted by resume experts.
          </span>
        </div>
        <div className=" flex gap-4 items-center">
          <div className=" size-[50px] flex justify-center items-center rounded-md bg-orange-500/30">
            <Download color="orange" />
          </div>
          <span>
            Save time using pre-written bullets crafted by resume experts.
          </span>
        </div>
        <Link
          href="/builder/craft"
          className="w-full  font-bold  bg-resGreen rounded-md text-center py-3 px-6"
        >
          Lets Craft On!!
        </Link>
      </div>
    </div>
  );
}

export default page;
