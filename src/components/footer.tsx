import { Github, Instagram, Twitter } from "lucide-react";
import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className=" h-fit flex flex-col justify-between  left-0 w-full bottom-0 min-h-[60vh]">
      <div></div>
      <div className=" bg-black min-h-[40vh] py-10 flex-col md:flex-row w-full  md:px-[70px]  items-center flex justify-between text-gray-200">
        <div className=" flex justify-center items-center gap-4 flex-col">
          <div className=" text-2xl font-black uppercase text-white">
            KuipidRes
          </div>
          <div className=" flex gap-2">
            <Twitter size={20} color="white" />
            <Instagram size={20} color="white" />
            <Github size={20} color="white" />
          </div>
        </div>
        <div className=" flex md:flex-row flex-col mt-5 md:mt-0 gap-7 text-gray-200">
          <ul className=" flex flex-col gap2 text-sm">
            <li>text1</li>
            <li>text1</li>
            <li>text1</li>
          </ul>
          <ul className=" flex flex-col gap2 text-sm">
            <li>text1</li>
            <li>text1</li>
            <li>text1</li>
          </ul>
          <ul className=" flex flex-col gap2 text-sm">
            <li>text1</li>
            <li>text1</li>
            <li>text1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
