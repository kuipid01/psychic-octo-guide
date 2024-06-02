import React from "react";

interface Props {}

const StepsSection = (props: Props) => {
  const steps = [
    {
      id: 1,
      title: "Select a Template",
      sub: "Choose from our expertly crafted templates designed to pass ATS filters.",
    },
    {
      id: 2,
      title: "Input Your Details",
      sub: "Follow an easy, guided process with tips from recruiters.",
    },
    {
      id: 3,
      title: "Export Your Resume",
      sub: "Save your resume in PDF, MS Word, or TXT format.",
    },
  ];
  return (
    <div className=" py-[50px] bg-gray-200  h-fit min-h-[60vh]">
      <h1 className="text-4xl mx-auto text-center mb-[60px] font-semibold">
        Build your resume in just 3 easy steps:
      </h1>

      <div className="w-[95%] mx-auto flex-col md:flex-row gap-5 flex-wrap   flex ">
        {steps.map((step) => (
          <div
            key={step.id}
            className=" flex flex-1  py-5 bg-white shadow rounded-md flex-col items-center text-center gap-5"
          >
            <div className="bg-resGreen/70  text-2xl flex justify-center items-center rounded-md size-[70px]">
              {" "}
              {step.id}
            </div>
            <h1 className="text-3xl font-semibold">{step.title}</h1>
            <h1 className="text-base font-light">{step.sub}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepsSection;
