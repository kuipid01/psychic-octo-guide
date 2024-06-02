import Features from "@/components/features";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import StepsSection from "@/components/step";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
export default function Home() {
  return (
    <main className="flex overflow-x-hidden  justify-between relative  flex-col ">
      <header className=" w-full h-[150vh]  md:h-svh  flex flex-col justify-between  items-center">
        <div className="w-full h-[150vh] md:h-screen absolute left-0 right-0">
          <Image
            fill
            src="/bg2.jpg"
            alt="bg image"
            className=" object-cover object-center  "
          />
        </div>
        <div className="w-full h-[150vh] md:h-screen bg-black/50 absolute left-0 right-0"></div>
        <div className=" w-[95%] text-white mx-auto h-fit flex-1 gap-5 items-center justify-center flex flex-col md:flex-row ">
          <div className=" relative md:max-w-[55%] flex flex-col gap-5">
            <h1 className=" text-3xl text-center md:text-4xl font-bold leading-[50px]">
              Unlock Your Dream Career with Our AI-Powered Resume Builder
            </h1>
            <p className=" text-base md:text-xl leading-[29px]">
              Create a professional, tailored resume in minutes with our
              state-of-the-art AI technology. Stand out from the competition and
              take the next step in your career with ease and confidence
            </p>
            <div className=" flex w-full gap-4 flex-wrap ">
              <button className=" bg-transparent border-[2px] border-white rounded-[6px] h-[50px] text-center flex-1 font-medium">
                <LoginLink>Sign in</LoginLink>
              </button>
              <button className=" bg-transparent border-[2px] border-white rounded-[6px] h-[50px] text-center flex-1 font-medium">
                <RegisterLink>Sign up</RegisterLink>
              </button>
            </div>
          </div>
          <div className=" flex md:flex-1 relative justify-center w-full h-[400px]  md:w-[600px] md:h-[500px] items-center   ">
            <Image
              fill
              src="/bgsample.png"
              className=" object-contain"
              alt="resume"
            />
          </div>
        </div>
      </header>
      <StepsSection />
      <Features />
      <Reviews />
      <Footer />
    </main>
  );
}
