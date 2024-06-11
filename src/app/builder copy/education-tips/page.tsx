"use client";

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

import React from "react";
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
type Props = {};
const formSchema = z.object({
  email: z.string().email(),

  city: z.string(),
  fullname: z.string(),
  country: z.string(),
  mobile_number: z.number(),
});
function EducationTips({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      city: "",
      fullname: "",
      country: "",
      mobile_number: 0,
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className=" h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center ">
      <div className=" p-[20px] h-screen  rounded-md flex flex-col bg-white size-4/5 ">
        <div className=" flex w-full flex-1 gap-10 justify-evenly">
          <div className=" flex-1 flex justify-center  items-left gap-3 flex-col rounded-xl ">
            <h1 className=" font-black text-left mb-2 text-2lg">First up!</h1>
            <h1 className=" font-black text-left mb-2 text-5xl">Education</h1>
            <p className=" mb-10 font-light">
              If you are still attending school, list it with your expected
              graduation date. If you didnt attend college, list your high
              school. And most importantly, mention any honors, awards,
              scholarships, licenses, or professional certifications you may
              have.
            </p>
          </div>
          <div className=" w-[38%] flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
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
            href="/builder/education"
            className=" bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EducationTips;
