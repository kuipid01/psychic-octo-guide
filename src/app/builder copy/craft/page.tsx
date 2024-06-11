import Link from "next/link";
import React from "react";

type Props = {};

function Craft({}: Props) {
  return (
    <div className=" h-screen flex md:flex-row bg-gray-300 flex-col justify-center items-center ">
      <div className=" p-[20px] gap-10 rounded-md flex flex-col bg-white size-4/5 ">
        <h1 className=" font-black text-center text-2xl">
          Choose which suites you
        </h1>
        <div className=" flex w-full flex-1 gap-10 justify-evenly">
          <div className=" flex-1 flex justify-center  items-center gap-3 flex-col rounded-xl bg-gray-300">
            <h1 className=" font-bold text-2xl">Blank Slate</h1>
            <p>We will work you through it from scratch</p>
            <Link
              href="/builder/contact"
              className="w-1/2  font-bold  bg-orange-700 text-white rounded-md text-center py-3 px-10"
            >
              Craft Fresh
            </Link>
          </div>
          <div className=" flex-1 flex justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
            <h1 className=" font-bold text-2xl">Use Your Current Resume</h1>
            <p>
              Edit the contents of your current resume into a fresh, new design
            </p>
            <small>Acceptable file types: DOC, DOCX, PDF, ODT, HTM, TXT</small>
            <div className="w-3/4 flex-col gap-2 px-5 h-fit py-7 border-dashed rounded-md border border-gray-700 flex justify-center items-center">
              <p>Drag and drop your resume file here or</p>

              <label
                className=" cursor-pointer  border-[3px]  w-full text-orange-700 font-bold border-orange-700  rounded-md text-center py-3 px-10"
                htmlFor="upload-doc"
              >
                Select File
              </label>
              <input
                accept=".pdf, .doc, .docx, .txt"
                hidden
                type="file"
                name=""
                id="upload-doc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Craft;
