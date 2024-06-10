"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TransBtn from "@/components/TransBtn";
import {
  Download,
  Edit,
  Eye,
  FileArchive,
  Lightbulb,
  NotebookPen,
  Plus,
  Trash,
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
import { FormType } from "../experience/page";
type Props = {};
const formSchema = z.object({
  email: z.string().email(),

  city: z.string(),
  fullname: z.string(),
  country: z.string(),
  mobile_number: z.number(),
});
function Work_History({}: Props) {
  const [jobs, setJobs] = useState<[FormType] | []>([]);
  // 1. Define your form.

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  useEffect(() => {
    const userJobs = localStorage.getItem("job");
    if (!userJobs) return;
    setJobs(JSON.parse(userJobs));
  }, []);
  console.log(jobs);
  return (
    <div className=" h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center ">
      <div className=" p-[20px] h-screen  rounded-md flex flex-col bg-white size-[90%] ">
        <div className=" flex w-full flex-1 gap-10 justify-evenly">
          <div className=" flex-1 flex justify-start  items-left gap-3 flex-col rounded-xl ">
            <h1 className=" font-black  text-left mb-2 text-2xl">
              Work Experience Overview{" "}
            </h1>

            <p className=" mb-10 font-light">
              You can add, edit, re-arrange, or delete items from this section.
            </p>
            {jobs?.map((work) => (
              <div
                // href="/builder/experience"
                // @ts-ignore
                key={work.id}
                className="h-[15vh] items-center flex justify-between"
              >
                <div className=" p-3 rounded-md shadow-md w-full flex-1 border border-gray-500 h-full flex flex-col gap-3">
                  <h1 className="text-lg  capitalize font-bold">
                    {work.job_title} <span>{work?.employer}</span>
                  </h1>
                  <p className=" capitalize text-gray-400">{work?.city_town}</p>
                </div>
                <div className=" flex-col text-black gap-3 ml-3 flex">
                  <Edit className="" />
                  <Trash />
                </div>
              </div>
            ))}
            <Link href="/builder/experience" className=" w-1/2">
              <TransBtn icon={<Plus />} text="Add a new one" />
            </Link>
          </div>
          <div className=" w-[20%] flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
            <div className=" bg-white rounded-md h-full w-full relative">
              <div className=" absolute bottom-10 left-1/2 -translate-x-1/2">
                <TransBtn text="Preview" icon={<Eye />} />
              </div>{" "}
            </div>
          </div>
        </div>

        <div className=" mt-4 flex justify-between">
          <BackBtn />
          <Link
            href="/builder/education-tips"
            className=" bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work_History;
