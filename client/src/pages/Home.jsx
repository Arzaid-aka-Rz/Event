import React from "react";
// import Banner from "../assets/images/Banner.jpg";
import Banner from "../assets/images/Arab.jpeg";
import HighlightText from "../components/HighlightText";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import SpeakerSection from "../components/SpeakerSection";
import JobsSection from "../components/JobsSection";
import IndustrySection from "../components/IndustrySection";
import JobsSectionTemp from "../components/JobsSectionTemp";
import UIClogo from "../assets/images/UIC.png";


export default function Home() {
  return (
    <div className="bg-[#000814] flex flex-col font-inter overflow-hidden">
      <section
        className="relative bg-cover bg-center xl:h-screen sm:h-screen md:h-screen items-center"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-[#1616169a]"></div>

        <Header />

        <div className="max-w-[950px] xl:py-0 py-11 xl:max-w-[850px] xl:px-0 px-7 flex flex-col gap-5 mx-auto items-center justify-between text-center relative z-10">
          <h1 className="text-xl sm:text-3xl md:text-5xl text-center xl:mt-16 md:mt-24 sm:mt-14 font-bold text-white">
            THE UIC DATA ANALYTICS & LOW CODE NO CODE CONFERENCE{" "}
            <HighlightText text={"& AWARDS 2024"} />
          </h1>

          <div className="max-w-1/12 h-1 mt-1  bg-deepBlue mx-auto"></div>

          <div className="flex  gap-4 items-center justify-center">
            <h2 className="text-lg sm:text-xl md:text-4xl font-bold text-center text-[#cdd1d6]">
              Hosted by
            </h2>
            <a href="/" className="cursor-pointer ">
        <img src={UIClogo} className="logo" alt="UIC Logo" />
      </a>
          </div>

          <p className="text-md sm:text-lg md:text-2xl mt-2 text-center bg-gradient-to-b from-[#eef1f3] via-[#dee2e4] to-[#98b5a4] text-transparent bg-clip-text font-bold">
            11 SEPTEMBER 2024, RIYADH, SAUDI ARABIA
          </p>
        </div>
      </section>

      <section
        className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="about"
      >
        <AboutSection />
      </section>

      <section
        className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="speakers"
      >
        <SpeakerSection />
      </section>

      <section
        className="relative mx-auto mt-20  flex w-full max-w-maxContent flex-col items-center justify-between gap-8 bg-white text-white"
        id="industry"
      >
        <IndustrySection />
      </section>

      {/* <section className="relative mx-auto mt-20 mb-5 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white" id="jobs" >
      <JobsSection/>
      </section> */}

      <section
        className="relative mx-auto mt-10 mb-5 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-[#000814] text-white"
        id="jobs"
      >
        <JobsSectionTemp />
      </section>




      <style jsx>{`
        @media (max-width: 768px) {
          .logo {
            width: 100px; /* Adjust as needed for smaller screens */
          }
        }
        @media (min-width: 769px) {
          .logo {
            width: 130px; /* Adjust as needed for larger screens */
          }
        }
      `}</style>
      
    </div>
  );
}
