import { AlignRight, ChevronDown, Menu } from "lucide-react";
import React from "react";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className=" text-white flex px-5 md:px-10 relative justify-between z-[100] w-full   items-center h-[10vh]">
      <h1 className=" font-black text-2xl">KuipidRes</h1>
      <ul className="hidden md:flex items-center text-base gap-4 font-medium">
        <li className=" flex items-center gap-[1px]">
          Resumes <ChevronDown />{" "}
        </li>
        <li className=" flex items-center gap-[1px]">
          Cover Letters <ChevronDown />{" "}
        </li>
        <li className=" flex items-center gap-[1px]">
          Contact Us <ChevronDown />{" "}
        </li>
        <li className=" flex items-center gap-[1px]">
          Sign In <ChevronDown />{" "}
        </li>
      </ul>
      <button className="hidden md:flex bg-resGreen rounded-md text-center py-3 px-6 font-medium">
        Create Button
      </button>
      <AlignRight size={25} className=" md:hidden flex" />
    </div>
  );
}

export default Navbar;
