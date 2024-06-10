"use client";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TransBtn from "@/components/TransBtn";
import {
  Download,
  Eye,
  FileArchive,
  Lightbulb,
  NotebookPen,
} from "lucide-react";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
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
import { Value } from "@radix-ui/react-select";
import { useRouter } from "next/navigation";
type Props = {};

export interface FormType {
  job_title: string;
  employer: string;
  city_town: string;
  country: string;
  start_date: Date | null;
  end_date: Date | null;
  descriptions: any;
}
function Contact({}: Props) {
  const router = useRouter();
  const [jobsList, setJobsList] = useState<FormType[]>([]);
  const [jobObject, setJobObject] = useState<FormType>({
    job_title: "",
    employer: "",
    city_town: "",
    country: "",
    start_date: null,
    end_date: null,
    descriptions: [],
  });
  const handleValue = (name: string, value: any) => {
    setJobObject({ ...jobObject, [name]: value });
  };

  const saveJob = () => {
    const randomId = Math.floor(Math.random() * 100) + 1;
    const Job = {
      id: randomId,
      ...jobObject,
    };

    const updatedJobsList = [...jobsList, Job];
    setJobsList(updatedJobsList);

    localStorage.setItem("job", JSON.stringify(updatedJobsList));
    localStorage.setItem("lastJobId", JSON.stringify(Job.id));

    router.push("/builder/experience-description");
  };

  useEffect(() => {
    const jobArray = localStorage.getItem("job");
    if (jobArray) {
      const parsedArr = JSON.parse(jobArray);
      setJobsList(parsedArr);
    }
  }, []);

  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-fit md:h-[120vh] rounded-md flex flex-col bg-white size-[90%]">
        <h1 className="font-black text-left mb-2 text-2xl">Work Experience</h1>
        <p className="text-lg mb-2 font-light">
          Let’s start with your most recent job.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className="flex md:flex-row flex-col w-full flex-1 gap-10 justify-evenly">
          <div className="flex-1 py-4 flex justify-center items-center gap-3 flex-col rounded-xl bg-gray-300">
            <form className="w-full p-4 flex flex-col gap-3 ">
              <div className=" w-full  flex gap-2">
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="job_title"
                  className=" flex-1 p-3 rounded-md border"
                  type="text"
                  placeholder="Enter JobTitle"
                />
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="employer"
                  className=" flex-1 p-3 rounded-md border"
                  type="text"
                  placeholder="Enter Employer Name"
                />
              </div>
              <div className=" w-full  flex gap-2">
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="city_town"
                  className=" flex-1 p-3 rounded-md border"
                  type="text"
                  placeholder="Enter City/Town"
                />
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="country"
                  className=" flex-1 p-3 rounded-md border"
                  type="text"
                  placeholder="Enter Country"
                />
              </div>
              <div className=" w-full  flex gap-2">
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="start_date"
                  className=" flex-1 p-3 rounded-md border"
                  type="date"
                />
                <input
                  onChange={(e) => handleValue(e.target.name, e.target.value)}
                  name="end_date"
                  className=" flex-1 p-3 rounded-md border"
                  type="date"
                />
              </div>
            </form>
          </div>
          <div className="md:w-[28%] relative h-[70vh] md:h-full w-full flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
            <div className=" rounded-md h-full w-full relative">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <TransBtn text="Preview" icon={<Eye />} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <BackBtn />
          <Button
            onClick={saveJob}
            className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Save Next
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
