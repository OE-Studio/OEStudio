import React from "react";

const Service = () => {
  return (
    <section className="bg-bg py-[86px]">
      <div className="container p-5 md:p-8 lg:px-20 mx-auto">
        <div className="justify-between flex flex-col lg:flex-row gap-6">
          <p className="text-4xl lg:text-6xl font-bold text-white font-cabinet">
            Service
          </p>

          <div className="flex gap-[46px] lg:w-[60%] flex-wrap">
            <div className=" font-lexend md:w-[44%] space-y-3">
              <p className="text-xl leading-normal text-white">Branding-</p>
              <p className="text-base font-light leading-normal text-white">
                Brand strategy and positioning
                <br />
                Visual identity design (logo, colour palette, typography)
                <br />
                Brand guidelines and asset creation
                <br />
                Naming and messaging development
              </p>
            </div>
            <div className=" font-lexend md:w-[44%] space-y-3">
              <p className="text-xl leading-normal text-white">Web Design-</p>
              <p className="text-base font-light leading-normal text-white">
                Website design and development
                <br />
                Landing page design
                <br />
                E-commerce design and development
                <br />
                Mobile app design
                <br />
              </p>
            </div>

            <div className=" font-lexend md:w-[44%] space-y-3">
              <p className="text-xl leading-normal text-white">
                Product Design-
              </p>
              <p className="text-base font-light leading-normal text-white">
                Industrial design
                <br />
                Packaging design
                <br />
                User experience (UX) and user interface (UI) design
                <br />
                Prototyping and 3D modelling
                <br />
              </p>
            </div>
            <div className=" font-lexend md:w-[44%] space-y-3">
              <p className="text-xl leading-normal text-white">
                Motion Design-
              </p>
              <p className="text-base font-light leading-normal text-white">
                Animated explainer videos
                <br />
                Motion graphics for social media and marketing campaigns
                <br />
                2D and 3D animation for product demos and promotional materials
                <br />
                Cinemagraph creation
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
