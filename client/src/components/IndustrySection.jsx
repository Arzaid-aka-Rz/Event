import React from "react";
import { RiGovernmentFill } from "react-icons/ri";
import { GiBank } from "react-icons/gi";
import { FaUserShield } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { GiFactory } from "react-icons/gi";
import { IoStorefront } from "react-icons/io5";
import { SiCoinmarketcap } from "react-icons/si";
import { FaFilm } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdEmojiTransportation } from "react-icons/md";
import { FaPlane } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { GiCargoShip } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";

const industries = [
  { name: "GOVERNMENT", icon: RiGovernmentFill  },
  { name: "BFSI", icon: GiBank  },
  { name: "INSURANCE", icon: FaUserShield },
  { name: "HEALTHCARE & PHARMACEUTICALS", icon: GiMedicines },
  { name: "FMCG/CPG", icon: FaShoppingCart },
  { name: "MANUFACTURING", icon: GiFactory },
  { name: "RETAIL", icon: IoStorefront  },
  { name: "E-COMMERCE", icon: SiCoinmarketcap  },
  { name: "MEDIA AND ENTERTAINMENT", icon: FaFilm },
  { name: "ENERGY AND UTILITIES", icon: FaBolt },
  { name: "REAL ESTATE & INFRASTRUCTURE", icon: FaCity },
  { name: "TRANSPORTATION", icon: MdEmojiTransportation },
  { name: "TOURISM AND HOSPITALITY", icon: FaPlane },
  { name: "UTILITIES", icon: FaTools },
  { name: "LOGISTICS", icon: GiCargoShip  },
  { name: "EDUCATION", icon: FaGraduationCap },
  
];

export default function IndustrySection() {
  return (
    <div className="bg-white max-w-[1150px] py-14 px-5 flex flex-col">
      <div className="flex gap-5 px-5 items-center">
        <div className="h-16 w-1 mt-1 bg-deepBlue mx-auto"></div>
        <h1 className="w-[100%] text-deepBlue font-mullish text-5xl font-semibold ">
          INDUSTRY
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden bg-white px-6 pt-6 pb-4 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-lg"
          >
            <div className="relative z-10 flex flex-col items-center">
              <div className="pt-2 transition-all duration-300 text-deepBlue text-7xl">
                <industry.icon />
              </div>
              <div className="pt-5 text-sm font-semibold leading-5 text-center">
                <p className="text-deepBlue transition-all duration-300">
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
