import React from "react";

const Contact = () => {
  return (
    <section className="bg-bg pb-[86px]">
      <div className="container p-5 md:p-8 lg:px-20 mx-auto flex flex-col gap-9 xl:flex-row justify-between">
        <div>
          <p className="text-[40px] xl:text-[90px] font-bold text-white font-cabinet leading-[125%]">
            Partnering
            <br className="hidden xl:inline-block"/> for success
          </p>
        </div>
        <div className="flex flex-col gap-9">
          <div className="space-y-4">
            <p className="text-2xl font-bold text-primary">Reach out</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:hello@oestudio.digital"
              className="text-3xl lg:text-6xl font-bold text-[#565656] xl:pb-6 block"
            >
              hello@oestudio.digital
            </a>
            <div className="h-[1.5px] w-full bg-[#383838]" />
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-primary">Or call us</p>
            <a
              href="tel:+2348136143995"
              className="text-3xl lg:text-6xl font-bold text-[#565656] xl:pb-6 block"
            >
              +234 813 614 3995
            </a>
            <div className="h-[1.5px] w-full bg-[#383838]" />
          </div>
          <div className="space-y-4">
            <p className="text-2xl font-bold text-primary">Location</p>
            <div className="w-full h-64 rounded-lg bg-[#1D1D1D]">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
