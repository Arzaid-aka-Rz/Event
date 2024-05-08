import React from "react";
import HighlightText from "./HighlightText";
import Testimonial from "./Testimonial";
import reviews from "../data";

export default function JobsSection() {
  return (
    <div className="flex flex-col items-center">

      <div className="flex flex-col gap-4 justify-center">
        <h1 className="lg:w-[100%] text-center text-4xl font-semibold ">
          Who Should
          <HighlightText text={" Attend ?"} />
        </h1>

        <div className="w-1/4 h-1 mt-1 bg-white mx-auto"></div>

        <p className=" text-center text-lg font-bold text-[#838894]">
        JOB TITLE
        </p>
      </div>

      <Testimonial reviews={reviews} />

      <div></div>
    </div>
  );
}
