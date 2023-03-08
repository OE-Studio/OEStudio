import React from "react";
// import bgLight from "../assets/images/hero.svg";
import NavBar from "./NavBar";

const Hero = () => {
  return (
    <section className="bg-bg pb-[27px] xl:pb-[66px] relative overflow-hidden xl:h-screen">
      <div className="relative z-10">
        <NavBar />
        </div>
      {/* <img
        src={bgLight}
        alt=""
        className="absolute left-1/2 -translate-x-1/2 top-0 scale-[250%] md:scale-[175%] xl:scale-100 xl:-top-[10%] z-0"
      /> */}
      <div className="container p-5 md:p-8 lg:px-20 mx-auto lg:py-0">
        <div className="max-w-[1016px]">
          <div className="inline-flex items-start justify-start px-4 py-3 border border-gray-700 mb-[51px] md:mb-5">
            <p className="text-base font-semibold font-lexend text-white uppercase">
              Compelling designs that converts
            </p>
          </div>

          <div className="space-y-9 xl:space-y-10">
            <p className="text-[44px] md:text-[80px] lg:text-8xl font-bold font-cabinet text-white leading-[50px] md:leading-[85px] xl:leading-[100px]">
              Innovative Designs
              <br clasName="hidden xl:inline-block" /> to elevate your Business
            </p>

            <p className="text-xl md:text-[28px] xl:text-[32px] font-light text-white font-lexend leading-[150%]">
              We are a multidisciplinary creative studio partnering with
              business and individuals to craft compelling identities that
              scales their businesses, ideas or projects.{" "}
            </p>

            <div className="flex space-x-4 items-center justify-center xl:w-96 py-4 bg-[#BD0020]">
              <p className="text-2xl font-light text-white font-lexend">
                Start a project
              </p>
              <svg
                width="29"
                height="18"
                viewBox="0 0 29 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0.994385"
                  y1="8.97803"
                  x2="28.0056"
                  y2="8.97803"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M28.0056 8.99997C27.2163 8.99997 26.4347 8.84451 25.7055 8.54246C24.9763 8.24041 24.3137 7.79769 23.7556 7.23958C23.1975 6.68147 22.7548 6.01889 22.4527 5.28968C22.1507 4.56048 21.9952 1.77891 21.9952 0.989624"
                  stroke="white"
                  stroke-width="2"
                />
                <path
                  d="M28.0056 8.99991C27.2163 8.99991 26.4347 9.15537 25.7055 9.45742C24.9763 9.75947 24.3137 10.2022 23.7556 10.7603C23.1975 11.3184 22.7548 11.981 22.4527 12.7102C22.1507 13.4394 21.9952 16.221 21.9952 17.0103"
                  stroke="white"
                  stroke-width="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
