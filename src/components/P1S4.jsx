const P1S4 = () => {
  const benefits = [
    {
      title: "Flexible Learning Schedule",
      desc: "Fit your coursework around your existing commitments and obligations.",
    },
    {
      title: "Expert Instruction",
      desc: "Learn from industry experts who have hands-on experience in design and development.",
    },
    {
      title: "Diverse Course Offerings",
      desc: "Explore a wide range of design and development courses covering various topics.",
    },
    {
      title: "Updated Curriculum",
      desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    },
    {
      title: "Practical Projects and Assignments",
      desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    },
    {
      title: "Interactive Learning Environment",
      desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    },
  ];
  return (
    <section className="px-[5%] lg:px-[10%] mb-[50px] lg:mb-[100px]">
      <h1 className="font-bold text-[30px] lg:text-[40px]">Benefits</h1>
      <p className="w-full lg:w-[800px] text-[#4C4C4D]">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className="flex flex-wrap gap-[30px] justify-center lg:justify-between mt-[30px]">
        {benefits.map((e, index) => (
          <div
            key={index}
            className="xl:w-[400px] min-h-[200px] p-2 bg-white rounded-lg w-[300px] grow hover:shadow-lg"
          >
            <p className="font-bold text-[20px] text-end">0{index + 1}</p>
            <h2 className="font-bold text-[18px] my-[10px]">{e.title}</h2>
            <p className="text-[#4C4C4D]">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P1S4;
