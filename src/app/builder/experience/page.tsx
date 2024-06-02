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

import React, { useState } from "react";
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
type Props = {};

const formSchema = z.object({
  job_title: z.string(),
  employer: z.string(),
  city_town: z.string(),
  country: z.string(),
  start_date: z.date(),
  end_date: z.date(),
});

function Contact({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      job_title: "",
      employer: "",
      city_town: "",
      country: "",
      start_date: new Date(),
      end_date: undefined,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-screen rounded-md flex flex-col bg-white size-4/5">
        <h1 className="font-black text-left mb-2 text-2xl">Work Experience</h1>
        <p className="text-lg mb-2 font-light">
          Let’s start with your most recent job.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className="flex w-full flex-1 gap-10 justify-evenly">
          <div className="flex-1 flex justify-center items-center gap-3 flex-col rounded-xl bg-gray-300">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-[90%] mx-auto"
              >
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="job_title"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Job Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Job Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employer"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Employer</FormLabel>
                        <FormControl>
                          <Input placeholder="Employer" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="city_town"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>City/Town</FormLabel>
                        <FormControl>
                          <Input placeholder="City/Town" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Country" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className=" flex gap-3">
                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => (
                      <FormItem className="w-1/2  flex gap-3 items-center">
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={startDate}
                            onChange={(date: any) => setStartDate(date)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }) => (
                      <FormItem className="w-1/2 flex gap-3 items-center">
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={endDate}
                            onChange={(date: any) => setEndDate(date)}
                          />
                          {/* <Input type="date" {...field} /> */}
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </form>
            </Form>
          </div>
          <div className="w-[28%] flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
            <div className="bg-white rounded-md h-full w-full relative">
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <TransBtn text="Preview" icon={<Eye />} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <BackBtn />
          <Link
            href="/builder/experience-description"
            className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Work Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
