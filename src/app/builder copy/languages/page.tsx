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
import { ChevronRight, Eye, Lightbulb, Plus, Trash } from "lucide-react";
import { BackBtn } from "@/components/Buttons";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

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

function Languages({}: Props) {
  const router = useRouter();
  const [languages, setLanguages] = useState<any>([]);
  const [language, setLanguage] = useState("");
  const [expertise, setExpertise] = useState("");
  const addNewLanguage = () => {
    // console.log(language, expertise);
    if (!language || !expertise) return;
    const randomId = Math.floor(Math.random() * 100) + 1;

    let jobObject = {
      id: randomId,
      language,
      expertise,
    };
    setLanguages([...languages, jobObject]);
    setLanguage("");
  };
  const saveLanguages = () => {
    localStorage.setItem("languages", JSON.stringify(languages));
    router.push("/builder/skills-tips");
  };
  return (
    <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
      <div className="p-[20px] h-fit md:h-[120vh] rounded-md flex flex-col bg-white size-4/5">
        <h1 className="font-black text-left mb-2 text-2xl">Languages</h1>
        <p className="text-lg mb-2 font-light">
          Add languages you know or may have studied. We’ve included a
          proficiency guide. You can also skip this step for now.
        </p>
        <div className="flex mb-2 justify-end items-end">
          <TransBtn text="Tips" icon={<Lightbulb />} />
        </div>
        <div className="flex  md:flex-row flex-col w-full flex-1 gap-10 justify-evenly">
          <div className="flex-1 px-3 flex justify-start py-2 items-start gap-3 flex-col rounded-xl bg-gray-300">
            <div className=" flex w-full gap-5 items-center justify-start ">
              <Input
                value={language}
                className="w-1/2 h-[70px]"
                placeholder="Language"
                onChange={(e) => setLanguage(e.target.value)}
              />

              <Select
                onValueChange={(value) => {
                  setExpertise(value);
                  value = "";
                }}
              >
                <SelectTrigger className="w-1/2 h-[70px]">
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
            </div>
            <Button onClick={addNewLanguage} className=" py-6 w-[30%]">
              <Plus />
              Add a new one
            </Button>
            <div className=" flex max-h-[40vh] overflow-y-auto flex-col gap-3 bg-white p-2 w-full items-center">
              {languages?.map((l: any, i: string) => (
                <div
                  key={l.id}
                  className=" w-full flex border bg-gray-300 justify-between items-center"
                >
                  <span className="text-lg font-bold px-4  py-3 w-full">
                    {l.language}
                    {l.expertise}
                  </span>
                  <Trash
                    onClick={() =>
                      setLanguages((p: any) =>
                        p.filter((language: any) => language.id !== l.id)
                      )
                    }
                    stroke="red"
                    className="cursor-pointer "
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-[50vh] md:h-full md:w-[28%] relative flex p-5 justify-center gap-3 items-center flex-col text-center rounded-xl bg-gray-300">
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
            onClick={saveLanguages}
            className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
          >
            Next:Skills <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Languages;
