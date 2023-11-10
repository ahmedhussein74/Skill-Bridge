import img1 from "../images/p1.png";
import img2 from "../images/p2.png";
import img3 from "../images/p3.png";
import img4 from "../images/p4.png";

const P1S6 = () => {
  const testimonials = [
    {
      img: img1,
      auther: "Sarah L",
      desc: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    },
    {
      img: img2,
      auther: "Jason M",
      desc: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
    },
    {
      img: img3,
      auther: "Emily R",
      desc: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
    },
    {
      img: img4,
      auther: "Michael K",
      desc: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
    },
  ];
  return (
    <section className="px-[5%] lg:px-[10%] mb-[50px] lg:mb-[100px]">
      <h1 className="font-bold text-[30px] lg:text-[40px]">Our Testimonials</h1>
      <p className="w-full lg:w-[800px] text-[#4C4C4D]">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className="flex flex-wrap gap-[30px] justify-center lg:justify-between mt-[30px]">
        {testimonials.map((e, index) => (
          <div
            key={index}
            className="xl:w-[500px] min-h-[200px] p-2 bg-white rounded-lg w-[300px] grow hover:shadow-lg"
          >
            <img src={e.img} className="mx-auto" />
            <h2 className="font-bold text-[18px] text-center my-[10px]">{e.auther}</h2>
            <p className="text-[#4C4C4D] text-center px-2">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P1S6;
