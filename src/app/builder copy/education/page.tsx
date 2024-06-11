"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TransBtn from "@/components/TransBtn";
import { Eye, Lightbulb } from "lucide-react";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { BackBtn } from "@/components/Buttons";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {};

export interface formSchema {
  school_name: string;
  degree: string;
  location: string;
  field: string;
  start_date: Date | null;
  end_date: Date | null;
}
// Define a list of possible degree types
const degreeTypes = [
  "Associate Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Degree",
  "Certificate",
  "Diploma",
  "Other",
];
function Education({}: Props) {
  const router = useRouter();
  const [educationList, setEducationList] = useState<formSchema[]>([]);

  const [educationObject, setEducationObject] = useState<formSchema>({
    school_name: "",
    degree: "",
    location: "",
    field: "",
    start_date: null,
    end_date: null,
  });
  const handleValue = (name: string, value: any) => {
    setEducationObject({ ...educationObject, [name]: value });
  };
  console.log(educationObject);
  const saveEducation = () => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    const Job = {
      id: randomId,
      ...educationObject,
    };

    const updatedEducationList = [...educationList, Job];
    setEducationList(updatedEducationList);

    localStorage.setItem("education", JSON.stringify(updatedEducationList));
    localStorage.setItem("lastJobId", JSON.stringify(Job.id));

    router.push(" /builder/languages");
  };
  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-fit md:h-screen rounded-md flex flex-col bg-white size-4/5">
        <h1 className="font-black text-left mb-2 text-2xl">Education</h1>
        <p className="text-lg mb-2 font-light">
          Let’s start with your most recent educational qualification.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className="flex md:flex-row flex-col w-full flex-1 gap-10 justify-evenly">
          <div className="flex-1 flex justify-center items-center gap-3 flex-col rounded-xl bg-gray-300">
            <form className="w-full p-4 flex flex-col gap-5 ">
              <div className=" w-full  flex gap-2">
                <Input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="school_name"
                  className=" flex-1 w-1/2 min-h-[50px]  p-3 rounded-md border"
                  type="text"
                  placeholder="Enter School Name"
                />
                <Select onValueChange={(value) => handleValue("degree", value)}>
                  <SelectTrigger className="w-1/2 min-h-[50px] ">
                    <SelectValue placeholder="Select Degree Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {degreeTypes.map((degree) => (
                      <SelectItem key={degree} value={degree}>
                        {degree}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=" w-full  flex gap-2">
                <Input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="location"
                  className=" flex-1 min-h-[50px]  w-1/2  p-3 rounded-md border"
                  type="text"
                  placeholder="Enter School Location"
                />
                <Input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="field"
                  className=" flex-1 min-h-[50px]  p-3 rounded-md border"
                  type="text"
                  placeholder="Enter Field Of Study"
                />
              </div>
              <div className=" w-full  flex gap-2">
                <div className="flex w-1/2 flex-col gap-1">
                  <label htmlFor="start date">Start Date</label>
                  <Input
                    onChange={(e) => handleValue(e.target.name, e.target.value)}
                    name="start_date"
                    className=" flex-1 min-h-[50px] w-full p-3 rounded-md border"
                    type="date"
                    placeholder="Start Date"
                  />
                </div>
                <div className="flex w-1/2 flex-col gap-1">
                  <label htmlFor="start date">End Date</label>
                  <Input
                    onChange={(e) => handleValue(e.target.name, e.target.value)}
                    name="end_date"
                    className=" flex-1 min-h-[50px] w-full  p-3 rounded-md border"
                    type="date"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="md:w-[28%] w-full min-h-[40vh] flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
            <div className="bg-white rounded-md h-full w-full relative">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <TransBtn text="Preview" icon={<Eye />} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <BackBtn />
          <Button
            onClick={saveEducation}
            className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Save/Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Education;
