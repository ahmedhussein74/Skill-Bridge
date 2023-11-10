import React, { useState } from "react";

const P1S7 = () => {
  const elements = [
    {
      title: "Can I enroll in multiple courses at once?",
      description:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "What kind of support can I expect from instructors?",
      description:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title:
        "Are the courses self-paced or do they have specific start and end dates?",
      description:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "Are there any prerequisites for the courses?",

      description:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
    {
      title: "Can I download the course materials for offline access?",
      description:
        "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section className="w-[90%] lg:w-[80%] mx-auto mb-[50px] lg:mb-[100px] py-[50px] lg:py-[100px] bg-white rounded">
      <h1 className="font-bold text-center text-[20px] lg:text-[50px]">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-[#333333]">
        Still you have any questions? Contact our Team via
        support@skillbridge.com
      </p>
      <div className="w-full lg:w-[85%] flex flex-col gap-[20px] mx-auto mt-[30px] px-[10px]">
        {elements.map((e, index) => (
          <div
            key={index}
            onClick={() => handleToggle(index)}
            className="min-h-[50px] flex items-center flex-wrap border rounded p-2"
          >
            <p className="w-full h-fit flex justify-between items-center gap-[10px]">
              <span className="font-bold text-[12px] lg:text-[16px]">{e.title}</span>
              {activeIndex == index ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </p>
            {activeIndex === index && (
              <p className="p-[5px] pt-[10px] text-sm text-[#4C4C4D]">
                {e.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default P1S7;
