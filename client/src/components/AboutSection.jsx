import React from "react";
import AboutImage from "../assets/images/Ban.jpg";
import HighlightText from "./HighlightText";

export default function AboutSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row mx-auto max-w-[1200px] gap-20 items-center">
        <div className="lg:w-[50%]">
          <img
            src={AboutImage}
            alt=""
            className="shadow-white shadow-[-20px_-20px_0_0]"
          />
        </div>
        <div className="lg:w-[50%] flex gap-10 flex-col">
          <h1 className="lg:w-[100%] text-center text-4xl font-semibold ">
            About<HighlightText text={" Conference"} />
          </h1>

          <p className="font-medium text-[16px] text-justify w-[100%] text-[#838894]">
            The UIC Data Analytics Conference & Awards 2024 stands out among
            data conferences as a pivotal gathering for chief data analytics
            officers (CDAOs) and leaders in data and analytics (D&A) striving to
            revolutionize their organizations through the power of data
            analytics and AI. In today's landscape, chief data officers and D&A
            leaders are navigating the dynamic complexities of data, analytics,
            and AI-driven enterprises to deliver substantial value to their
            businesses. By fostering synergies between artificial and human
            intelligence, D&A leaders can steer their organizations towards
            achieving strategic objectives. At the UIC Data Analytics Conference
            & Awards, we confront these challenges head-on, arming data and
            analytics leaders with the tools to scale your initiatives using
            best practices in data management, architecture, and governance.
            From maximizing business impact within budget constraints to
            aligning data and analytics strategies and embracing AI adoption,
            our conference ensures that attendees are not only equipped with
            technical expertise but also empowered with strategic insights to
            drive meaningful change and organizational success. Join us as we
            explore the latest trends, best practices, and success stories and
            celebrate the achievements of organizations and individuals pushing
            the boundaries of innovation in the digital age.
          </p>
        </div>
      </div>
    </div>
  );
}
