const P1S1 = () => {
  return (
    <section className="px-[5%] lg:px-[10%] flex flex-col justify-center items-center gap-[20px] mt-[160px]">
      <h1 className="font-bold text-center text-[20px] lg:text-[50px] flex items-center">
        <span className="text-[#FF9500] mr-1">Unlock</span>Your Creative
        Potential
      </h1>
      <h2 className="font-bold text-center lg:text-[30px]">
        with Online Design and Development Courses.
      </h2>
      <p className="text-center">
        Learn from Industry Experts and Enhance Your Skills.
      </p>
      <div className="w-full lg:w-fit h-[60px] flex justify-center items-center gap-[20px]">
        <button className="w-[130px] h-[40px] rounded shadow bg-stone-50 font-bold">
          View Pricing
        </button>
        <button className="w-[130px] h-[40px] text-white rounded shadow bg-[#FF9500]">
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default P1S1;
