import React from "react";
import GOVERNMENT from "../assets/images/government.webp";
import BFSI from "../assets/images/BFSI.jpg";
import FINTECH from "../assets/images/fintech.jpeg";
import HEALTH from "../assets/images/Healthcare.jpg";
import FMCG from "../assets/images/FMCG.png";
import MANUFACTURING from "../assets/images/manufacturingb.jpg";
import RETAIL from "../assets/images/Retail.png";
import ECOMMERCE from "../assets/images/ecommerce.jpg";
import MEDIA from "../assets/images/mediaEntertainment.jpeg";
import ENERGY from "../assets/images/energy.jpeg";
import REALESTATE from "../assets/images/realestate.jpg";
import TRANSPORTATION from "../assets/images/transport.jpeg";
import TOURISM from "../assets/images/toursim.jpeg";
import UTILITIES from "../assets/images/Ban.jpg";
import LOGISTICS from "../assets/images/logistics.avif";
import EDUCATION from "../assets/images/education.webp";

const industries = [
  { name: "GOVERNMENT", image: GOVERNMENT },
  { name: "BFSI", image: BFSI },
  { name: "FINTECH", image: FINTECH },
  { name: "HEALTHCARE & PHARMACEUTICALS", image: HEALTH },
  { name: "FMCG/CPG", image: FMCG },
  { name: "MANUFACTURING", image: MANUFACTURING },
  { name: "RETAIL", image: RETAIL },
  { name: "E-COMMERCE", image: ECOMMERCE },
  { name: "MEDIA AND ENTERTAINMENT", image: MEDIA },
  { name: "ENERGY AND UTILITIES", image: ENERGY },
  { name: "REAL ESTATE & INFRASTRUCTURE", image: REALESTATE },
  { name: "TRANSPORTATION", image: TRANSPORTATION },
  { name: "TOURISM AND HOSPITALITY", image: TOURISM },
  { name: "UTILITIES", image: UTILITIES },
  { name: "LOGISTICS", image: LOGISTICS },
  { name: "EDUCATION", image: EDUCATION },
];

export default function IndustrySection() {
  return (
    <div className="bg-white max-w-[1080px] py-8 px-5 flex flex-col">
      <div className="flex gap-5 px-5 items-center">
        <div className="h-16 w-1 mt-1 bg-deepBlue mx-auto"></div>
        <h1 className="lg:w-[100%] text-deepBlue font-mullish text-5xl font-semibold ">
          INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden bg-white px-6 pt-6 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <div className="relative z-10">
              <div className="pt-2 transition-all duration-300">
                <img
                  src={industry.image}
                  alt=""
                  className="w-full h-auto"
                />
              </div>
              <div className="pt-5 text-sm font-semibold leading-5">
                <p className="text-deepBlue transition-all duration-300 text-center ">
                  {industry.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
