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
            <div className="h-full w-full dark:bg-[#1E1E1E] bg-[#e0e3e4] relative z-10 rounded-[10px] overflow-hidden grayscale">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253229.1326584723!2d3.7649737550948412!3d7.386895614726906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d77eeff086f%3A0x3b33e0f76e8e04a9!2sIbadan!5e0!3m2!1sen!2sng!4v1666210677798!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="google map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
