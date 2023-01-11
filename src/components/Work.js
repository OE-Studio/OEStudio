import React from "react";
import logoBg from "../assets/images/bgLogo.svg";
const Work = () => {
  return (
    <section className="bg-bg py-[86px]">
      <div className="container p-5 md:p-8 lg:px-20 mx-auto">
        <div className="flex justify-center">
          <img src={logoBg} alt="" />
        </div>
        <div className="flex justify-center">

        <div class="mt-[40px] inline-flex justify-center px-4 py-3 border border-[#494949] mx-auto">
          <p class="text-base font-semibold text-center text-white uppercase">
            We are putting them all together, check back later
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
