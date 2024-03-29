import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Avatar from "../assets/profile3.jpg";

function About() {
  return (
    <div
      id="about"
      className="px-4 sm:px-16 md:px-24 pt-10 pb-8 sm:pt-20 sm:pb-10 overflow-hidden "
    >
      <h1 className="purple text-center font-black text-2xl sm:text-4xl mb-7 ">
        About Me
      </h1>
      <div className=" flex flex-col lg:flex lg:flex-row-reverse lg:items-center ">
        <div className=" w-4/5 md:w-3/6  mx-auto lg:mx-0 mb-5 lg:mb-0">
          <LazyLoadImage
            className=" block w-full h-full max-w-[280px] sm:max-w-xs min-h-[340px] sm:min-h-[400px] mx-auto shadow-md rounded-md bg-slate-100 "
            src={Avatar}
            alt="developer-avater"
          />
        </div>
        <div className="lg:w-3/6">
          <div className="lg:w-5/6 lg:ml-auto">
            <p className="mb-2 sm:mb-3 text-sm sm:text-base leading-loose	">
              My name is Aung Myint Ko (aka) Lucifer. I'm first year Computer
              Science student at University of Computer Studies, Yangon.
            </p>
            <p className="mb-2 sm:mb-3 text-sm sm:text-base leading-loose	 ">
              The journey of my Web development career have been started since
              COVID-19 pandemic started and it's been 2 years that I'm in this
              field.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-loose	">
              Currently, I'm doing React.js related web project and trying to
              become MERN stack developer.
            </p>
            <div>
              <a
                href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:60e3fe8b-dd30-4f4b-b809-8fad29d1dbd9"
                target={"_blank"}
                rel="noreferrer"
                className="button"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
