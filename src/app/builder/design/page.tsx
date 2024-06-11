"use client";
import React, { useState } from "react";
import { ProfessionalTemp } from "./templates/templates";
import { Button } from "@/components/ui/button";

const Design = () => {
  const [color, setColor] = useState("black");
  const colorsArray = [
    "#6C757D", // Ash Gray
    "#778899", // Light Slate Gray
    "#5F9EA0", // Cadet Blue
    "#708090", // Slate Gray
    "#A9A9A9", // Dark Gray
  ];

  return (
    <div className=" flex w-full h-[90vh] bg-white  justify-center items-center gap-[50px]">
      <div className="w-1/2 flex flex-col justify-center items-center h-[300px]">
        <small className=" font-bold text-xs capitalize mb-2 ">
          choose color
        </small>
        <div className="flex gap-3 flex-wrap w-fit">
          <div
            onClick={() => setColor("")}
            className="border size-10 cursor-pointer rounded-full"
          ></div>
          {colorsArray.map((col) => (
            <div
              onClick={() => setColor(col)}
              style={{
                background: col,
              }}
              className=" size-10 cursor-pointer rounded-full"
              key={col}
            ></div>
          ))}
        </div>
        <Button className="md:w-1/2 w-full mt-3  h-[50px]">
          Select this template
        </Button>
      </div>
      <div className="w-1/2 bg-gradient-to-tr  bg-blend-saturation h-full from-white via-orange-100 to-orange-300  flex justify-center items-center">
        <ProfessionalTemp color={color} />
      </div>
    </div>
  );
};

export default Design;
