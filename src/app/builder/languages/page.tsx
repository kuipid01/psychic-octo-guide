"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import TransBtn from "@/components/TransBtn";
import { Eye, Lightbulb, Plus, Trash } from "lucide-react";
import { BackBtn } from "@/components/Buttons";
import Link from "next/link";

type Props = {};

const formSchema = z.object({
  language: z.string(),
  proficiency: z.string(),
});

const proficiencyLevels = [
  "Basic",
  "Conversational",
  "Fluent",
  "Native/Bilingual",
];

function Education({}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      language: "",
      proficiency: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-screen rounded-md flex flex-col bg-white size-4/5">
        <h1 className="font-black text-left mb-2 text-2xl">Languages</h1>
        <p className="text-lg mb-2 font-light">
          Add languages you know or may have studied. We’ve included a
          proficiency guide. You can also skip this step for now.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className="flex w-full flex-1 gap-10 justify-evenly">
          <div className="flex-1 px-3 flex justify-start py-2 items-start gap-3 flex-col rounded-xl bg-gray-300">
            <div className=" flex items-center justify-start ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8 w-[90%] mx-auto"
                >
                  <div className="flex gap-3">
                    <FormField
                      control={form.control}
                      name="language"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <Input placeholder="Language" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="proficiency"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Proficiency Level" />
                            </SelectTrigger>
                            <SelectContent>
                              {proficiencyLevels.map((level) => (
                                <SelectItem key={level} value={level}>
                                  {level}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </form>
              </Form>

              <div className=" flex flex-col items-center">
                <Trash />
              </div>
            </div>
            <div className=" w-1/2">
              <TransBtn icon={<Plus />} text="Add a new one" />
            </div>
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
            href="/builder/skills-tips"
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
