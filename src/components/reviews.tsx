import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {};

function Reviews({}: Props) {
  return (
    <div className=" flex flex-col bg-gray-300 relative py-[50px] items-center h-fit md:min-h-[70vh]">
      {/* <div className="w-full h-full absolute left-0 right-0">
        <Image
          fill
          src="/whitebg.jpg"
          alt="bg image"
          className=" object-cover object-center  "
        />
      </div>
      <div className="w-full h-full opacity-70 bg-gray-100 absolute left-0 right-0"></div> */}

      <h1 className="text-4xl relative mx-auto text-center mb-[60px] font-semibold">
        What our users say:
      </h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[90%] relative "
      >
        <CarouselContent className=" border-none">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className=" border-none rounded-lg md:basis-1/2 "
            >
              <div className="p-1">
                <Card>
                  <CardHeader className=" ">
                    <CardTitle>I enjoyed their services immensely</CardTitle>
                    <CardDescription>
                      It as free to use and intuitive
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex font-light text-gray-600 items-center justify-center p-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores error reiciendis magnam assumenda omnis rerum
                    deserunt aperiam tempore at a ad obcaecati dolor, alias
                    eaque aut libero eos dolorem amet explicabo odit quod illo.
                    Nemo modi soluta sapiente dolor commodi!
                  </CardContent>
                  <CardFooter className="flex border-t py-3 justify-between">
                    <div className=" flex justify-between">
                      <div className="flex gap-2 items-center">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className=" flex flex-col ">
                          <h1 className=" font-bold">Adegoke Stephen</h1>
                          <p className=" font-light text-gray-500">
                            {" "}
                            Lorem ipsum dolor
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Reviews;
