"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TransBtn from "@/components/TransBtn";
import {
  CheckCircle,
  Download,
  Eye,
  FileArchive,
  Lightbulb,
  NotebookPen,
  Plus,
  PlusCircle,
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
import { AiChatSession } from "../../../config/Aimodel";
import "react-datepicker/dist/react-datepicker.css";
import { FormType } from "../experience/page";
import { useRouter } from "next/navigation";

type Props = {};

const formSchema = z.object({
  job_title: z.string(),
  employer: z.string(),
  city_town: z.string(),
  country: z.string(),
  start_date: z.date(),
  end_date: z.date(),
});

function Summary({}: Props) {
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
  const router = useRouter();
  // 2. Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [job, setJob] = useState<FormType[] | []>([]);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [descriptions, setDescriptions] = useState<string[]>([]);
  const [singleJobDescription, setSingleJobDescription] = useState<string>("");
  const [fetching, setFetching] = useState(false);
  const [selectedDescriptions, setSelectedDescriptions] = useState<
    { id: number; value: string }[]
  >([]);
  console.log(jobDescription);
  const [textareaContent, setTextareaContent] = useState("");
  // Function to handle the Enter key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default form submission if needed
      // Perform your desired action here
      console.log("Enter key pressed");
      // For example, you could call a function to handle the job description search
      handleSearchJobDescription();
    }
  };
  // const handleKeyPressInput = (e: React.KeyboardEvent<HTMLInputElement>) => {

  const PROMPT =
    "On basis of description generate profession summary for someone in that field JSON form, make them 10 summaries, any expected user input should be represented in square brackets,remember just the json data ";

  const handleSearchJobDescription = async () => {
    try {
      setFetching(true);
      const result = await AiChatSession.sendMessage(
        `Description: ${jobDescription}. ${PROMPT}`
      );
      let resultText = await result.response.text();
      console.log(resultText);

      // Clean the result to make sure it's a valid JSON
      const jsonStart = resultText.indexOf("[");
      const jsonEnd = resultText.lastIndexOf("]") + 1;
      if (jsonStart !== -1 && jsonEnd !== -1) {
        resultText = resultText.slice(jsonStart, jsonEnd);
        const resultInJson = JSON.parse(resultText);
        console.log(resultInJson);
        const arrayOfSummary = resultInJson.map((res: any) => res.summary);
        setDescriptions(arrayOfSummary);

        setFetching(false);
      } else {
        setFetching(false);
        console.error("Invalid JSON format in response.");
      }
    } catch (error) {
      setFetching(false);
      console.error("Error fetching job descriptions:", error);
    }
  };

  const handleAddToSelectedDescriptions = (id: number, value: string) => {
    console.log(value);
    const alreadyInArray = selectedDescriptions.find((des) => des.id === id);
    console.log(alreadyInArray);
    let updatedDescriptions;
    if (alreadyInArray) {
      updatedDescriptions = selectedDescriptions.filter((des) => des.id !== id);
    } else {
      updatedDescriptions = [...selectedDescriptions, { id, value }];
    }
    setSelectedDescriptions(updatedDescriptions);
    setTextareaContent(updatedDescriptions.map((des) => des.value).join(" "));
  };
  console.log(textareaContent);
  const handleSaveSummaryToLocalStorage = () => {
    if (textareaContent.length === 0) {
      setIsDialogOpen(true);
      return;
    }
    localStorage.setItem("summary", JSON.stringify(textareaContent));
    router.push("/builder/design");
  };
  // const fetchInitialJobTitleDesc = async () => {
  //   if (!job) return;
  //   if (!job.job_title) return;
  //   setJobDescription(job.job_title);
  //   console.log(job.job_title);
  //   handleSearchJobDescription();
  // };

  useEffect(() => {
    const jobs = localStorage.getItem("job");
    if (!jobs) return;
    const jsonJob = JSON.parse(jobs);
    setJob(jsonJob);
  }, []);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-lg">
              No Summary 🙄🙄?
            </DialogTitle>
            <DialogDescription>
              Are you absolutely sure You want to proceed without adding a
              professional summary?
            </DialogDescription>
            <DialogClose className="w-full">
              {" "}
              <Button className="w-full">Add Summary</Button>{" "}
            </DialogClose>
            <Button
              className="bg-red-400"
              onClick={() => router.push("/builder/design")}
            >
              Proceed
            </Button>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      <div className="h-fit py-[40px] flex md:flex-row bg-gray-300 flex-col justify-center items-center">
        <div className="p-[20px] h-fit md:h-[110vh] rounded-md flex flex-col bg-white size-[90%]">
          <h1 className="font-black text-left mb-2 text-2xl">Summary</h1>
          <p className="text-lg mb-2 font-light">
            Briefly describe the value that you bring through your skills,
            background and experience.
          </p>
          <div className="flex mb-2 justify-end items-end">
            <TransBtn text="Tips" icon={<Lightbulb />} />
          </div>
          <div className="flex w-full md:flex-row flex-col-reverse flex-1 gap-10 justify-evenly">
            <div className="flex-1 flex justify-center min-h-[60vh] max-h-[80vh] items-center gap-3 flex-col rounded-xl bg-white border p-4">
              {/* Form Section */}
              <Form {...form}>
                <form
                  className=" flex-1  w-full"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="job_title"
                    render={({ field }) => (
                      <FormItem className=" flex flex-col">
                        <FormLabel className="text-xl font-bold mb-2">
                          Write brief Summary
                        </FormLabel>
                        <FormControl>
                          <textarea
                            value={textareaContent}
                            onChange={(e) => setTextareaContent(e.target.value)}
                            // value={selectedDescriptions?[0].value || }
                            // content={selectedDescriptions?[0].value||''}
                            // onKeyDown={(e) => handleKeyPressInput(e)}
                            // onChange={setJobDescription}
                            placeholder="Write a paragraph that simply describes you with relation to your skills,job ethics and experience,press enter to save"
                            className="min-h-[350px] h-fit outline-none placeholder:font-medium "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Add more fields as needed */}
                </form>
              </Form>
            </div>
            <div className="md:w-[45%] w-full h-[70vh] md:h-full  flex justify-center flex-col text-center rounded-xl bg-gray-300">
              <div className="flex flex-1 flex-col overflow-y-hidden gap-1">
                <div className="bg-black p-2 rounded-sm w-full flex flex-col">
                  <label
                    className="text-white text-lg font-bold mb-3 leading-9 text-start"
                    htmlFor="input"
                  >
                    Search by job title or keyword
                  </label>
                  <input
                    type="search"
                    onKeyDown={handleKeyPress}
                    className="h-[60px] rounded-md outline-none px-3 text-lg font-medium"
                    placeholder="Enter job title and see skills related to it"
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                </div>
                <div className="p-2 bg-white border border-gray-300 h-full flex-1 overflow-y-auto">
                  <ul className="h-[50vh] pb-5 p-2 flex flex-col gap-3">
                    {fetching && (
                      <div className=" w-full h-full flex justify-center items-center">
                        <span className="loading loading-infinity loading-lg"></span>
                      </div>
                    )}
                    {!fetching &&
                      descriptions?.map((description, index) => (
                        <div
                          onClick={() =>
                            handleAddToSelectedDescriptions(index, description)
                          }
                          className={`p-2 ${
                            selectedDescriptions.find((j) => j.id === index)
                              ? "bg-resGreen/50"
                              : "bg-white"
                          } border cursor-pointer hover:bg-gray-100 transition-all flex items-center gap-3`}
                          key={index}
                        >
                          {selectedDescriptions.find((j) => j.id === index) ? (
                            <CheckCircle
                              size={30}
                              className="text-resGreen size-[30px]"
                            />
                          ) : (
                            <PlusCircle
                              size={30}
                              className="text-resGreen size-[30px]"
                            />
                          )}
                          <li className="text-lg flex-1  text-left font-medium text-gray-500">
                            {description}
                          </li>
                        </div>
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-between">
            <BackBtn />
            <Button
              onClick={handleSaveSummaryToLocalStorage}
              className="bg-resGreen rounded-md text-center py-3 px-6 font-medium"
            >
              Save and Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Summary;
