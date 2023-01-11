import React from "react";
import staffs from "./staffs";

const Individual = ({ name, title, image }) => {
  return (
    <div className="w-[47%] md:w-[30%] lg:w-[23%] xl:w-[230px] space-y-4 items-start justify-start ">
      <div className="bg-primary w-full h-[230px]" />
      <div className="flex flex-col space-y-2.5 items-start justify-start">
        <p className="text-[15px] lg:text-xl font-bold text-white font-cabinet">
          {name}
        </p>
        <p className="text-[15px] lg:text-xl font-bold text-[#383838] font-cabinet">
          {title}
        </p>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="bg-bg">
      <div className="container p-4 md:p-8 lg:px-20 mx-auto justify-between">
        <p className="text-4xl lg:text-6xl font-bold text-white font-cabinet">
          Meet the team
        </p>
        <div className="flex gap-x-5 gap-y-8 lg:gap-y-16 flex-wrap mt-[62px]">
          {staffs.map((staff, i) => {
            return (
              <Individual
                name={staff.name}
                title={staff.title}
                image={staff.image}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
