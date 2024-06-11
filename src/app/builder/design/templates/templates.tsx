export const ProfessionalTemp = ({ color }: { color: string }) => {
  return (
    <div className="w-[300px] px-2 select-none flex-col gap-2 shadow-orange-300 shadow h-[400px] bg-white flex items-center">
      <h1
        style={{
          color: color || "black",
        }}
        className="text-[1.5em] mt-4 font-medium"
      >
        Normal
      </h1>
      <div className=" flex justify-center items-center flex-col gap-[1px] text-[0.4vw]">
        <p className="">Jigawa Street,Niger State</p>
        <p className="">
          <span>0915701668</span> <span>0915701668</span>{" "}
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-[0.5em] text-center mb-[4px] uppercase tracking-wide font-bold text-gray-700">
          Professional Summary
        </h1>
        <hr className="w-full mb-[4px] h-[1px] bg-gray-300" />{" "}
        <p className="text-[0.4vw] font-medium text-gray-800 text-left leading-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur odio
          aliquid commodi vero minus eius, beatae, dolorum soluta deserunt
          tempora cum corporis iste perferendis tempore ea autem ratione
          voluptates corrupti?
        </p>
      </div>
      <div className="w-full">
        <h1 className="text-[0.5em] text-center mb-[4px] uppercase tracking-wide font-bold text-gray-700">
          Skills
        </h1>
        <hr className="w-full mb-[4px] h-[1px] bg-gray-300" />{" "}
        <ul className="text-[0.4vw] w-full  text-gray-500 flex-wrap gap-1  flex  font-medium  text-left leading-1">
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 10].map((skill) => (
            <li className="w-[45%] flex gap-[0.4vw] items-center " key={skill}>
              <span className="size-[2px] rounded-full bg-black"></span>{" "}
              Software designer Major
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full">
        <h1 className="text-[0.5em] text-center mb-[4px] uppercase tracking-wide font-bold text-gray-700">
          Experience
        </h1>
        <hr className="w-full mb-[4px] h-[1px] bg-gray-300" />{" "}
        <ul className="text-[0.4vw] w-full  text-gray-500 flex-wrap gap-1  flex  font-medium  text-left leading-1">
          {[1, 2, 3, 4, 5, 5, 6, 7, 8, 10].map((skill) => (
            <li
              className="w-[45%]  gap-[0.4vw]  flex items-center "
              key={skill}
            >
              <span className="size-[2px] rounded-full bg-black"></span>{" "}
              <div className=" flex flex-col text-start">
                <small>March 2024 - April 2025</small>
                <small>Test Engineer</small>
                <p>Maldina Engineering Comp</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
