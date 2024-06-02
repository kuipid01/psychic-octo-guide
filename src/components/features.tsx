import Image from "next/image";
import React from "react";

type Props = {};

function Features({}: Props) {
  return (
    <div className=" flex flex-col py-[100px] gap-7">
      {[1, 2, 3].map((section) => (
        <Section key={section} />
      ))}
    </div>
  );
}

export default Features;

const Section = () => {
  return (
    <div className=" flex   flex-col-reverse md:odd:flex-row-reverse md:flex-row md:w-[80%] mx-auto items-center w-[95%] md:h-[50vh] h-screen">
      <div className=" flex-1 flex flex-col gap-3">
        <h1 className="text-2xl mt-5 md:mt-0 font-bold">AI-Driven Precision</h1>
        <ol className=" flex flex-col gap-3">
          <li>
            Craft the Perfect Resume: Our advanced AI analyzes job descriptions
            and tailors your resume to highlight the most relevant skills and
            experiences.
          </li>
          <li>
            Get Noticed: Optimize your resume for Applicant Tracking Systems
            (ATS) to ensure it reaches hiring managers.
          </li>
        </ol>
      </div>
      <div className=" flex-1 flex justify-center items-center">
        <Image
          src="/resumesample.jpg"
          width={300}
          height={300}
          className="object-contain"
          alt="feature image"
        />
      </div>
    </div>
  );
};
