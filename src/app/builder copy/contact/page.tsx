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
function Contact({}: Props) {
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
        <h1 className=" font-black text-left mb-2 text-2xl">
          How can employers get in touch with you?
        </h1>
        <p className=" mb-2 font-light">
          For your resume header, include (at minimum) your name and email so
          employers can contact you.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className=" flex w-full flex-1 gap-10 justify-evenly">
          <div className=" flex-1 flex justify-center  items-center gap-3 flex-col rounded-xl bg-gray-300">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-[90%] mx-auto "
              >
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="fullname"
                    render={({ field }) => (
                      <FormItem className=" flex-1">
                        <FormLabel>Fullname</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Stephen Busayo Adegoke"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem className=" flex-1">
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="Kubwa Abuja" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className=" flex-1">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Stephen@res.com" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <FormItem className=" flex-1">
                        <FormLabel>Country</FormLabel>
                        <FormControl>
                          <Input placeholder="Finland" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="mobile_number"
                  render={({ field }) => (
                    <FormItem className=" w-1/2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <Button type="submit">Submit</Button> */}
              </form>
            </Form>
          </div>
          <div className=" w-[28%] flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
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
            href="/builder/experience-tips"
            className=" bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Work Experience
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
