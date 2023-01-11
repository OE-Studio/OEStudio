import React from "react";

const About = () => {
  return (
    <section className="bg-bg">
      <div className="container p-4 md:p-8 lg:px-20 mx-auto space-y-[90px]">
        <div className="h-[1px] w-full bg-[#383838]" />
        <div className="justify-between flex flex-col lg:flex-row gap-6">
          <p className="text-4xl lg:text-6xl font-bold text-white font-cabinet">
            About us
          </p>
          <p className="text-base font-light leading-normal text-white font-lexend lg:w-[60%]">
            Welcome to our creative studio! We are a multidisciplinary design
            agency partnering with businesses and individuals to craft
            compelling identities that help scale their businesses, ideas, or
            projects. Our team is made up of talented designers, strategists,
            and problem-solvers who are passionate about bringing our clients'
            visions to life.
            <br />
            <br />
            With years of experience in the industry, we have honed our skills
            in a variety of areas including branding, graphic design, web
            design, and packaging. We are dedicated to staying up-to-date with
            the latest design trends and techniques to ensure that our work is
            always fresh and innovative.
            <br />
            <br />
            Our process begins with a deep understanding of our clients' goals
            and needs. We take the time to get to know you and your business, so
            that we can create a unique and effective solution that truly speaks
            to your target audience.
            <br />
            <br />
            Whether you are a small start-up or a well-established business, we
            have the expertise and experience to help you achieve your goals.
            Let's work together to craft a compelling identity that will set you
            apart from the competition and help your business thrive.
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#383838]" />
      </div>
    </section>
  );
};

export default About;
