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

type Props = {};

const formSchema = z.object({
  school_name: z.string().min(1, "School name is required"),
  degree: z.string().min(1, "Degree is required"),
  location: z.string().min(1, "Location is required"),
  field: z.string().min(1, "Field of study is required"),
  start_date: z.date(),
  end_date: z.date().nullable(),
});
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
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      school_name: "",
      degree: "",
      location: "",
      field: "",
      start_date: new Date(),
      end_date: null,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-screen rounded-md flex flex-col bg-white size-4/5">
        <h1 className="font-black text-left mb-2 text-2xl">Education</h1>
        <p className="text-lg mb-2 font-light">
          Let’s start with your most recent educational qualification.
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
                    name="school_name"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>School Name</FormLabel>
                        <FormControl>
                          <Input placeholder="School Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="degree"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Degree</FormLabel>
                        <Select>
                          <SelectTrigger>
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
                        ;
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="Location" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="field"
                    render={({ field }) => (
                      <FormItem className="flex-1">
                        <FormLabel>Field of Study</FormLabel>
                        <FormControl>
                          <Input placeholder="Field of Study" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="start_date"
                    render={({ field }) => (
                      <FormItem className="w-1/2 flex gap-3 items-center">
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => {
                              setStartDate(date);
                              field.onChange(date);
                            }}
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
                            onChange={(date) => {
                              setEndDate(date);
                              field.onChange(date);
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* <Button type="submit">Submit</Button> */}
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
            href="/builder/languages"
            className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Languages
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Education;
