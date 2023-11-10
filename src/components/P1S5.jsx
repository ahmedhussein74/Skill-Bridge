import c1 from "../images/course1.png";
import c2 from "../images/course2.png";
import c3 from "../images/course3.png";
import c4 from "../images/course4.png";
import c5 from "../images/course5.png";
import c6 from "../images/course6.png";

const P1S5 = () => {
  const courses = [
    {
      img: c1,
      duration: "4 Weeks",
      level: "Beginner",
      author: "By John Smith",
      title: "Web Design Fundamentals",
      desc: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
    },
    {
      img: c2,
      duration: "6 Weeks",
      level: "Intermediate",
      author: "By Emily Johnson",
      title: "UI/UX Design",
      desc: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
    },
    {
      img: c3,
      duration: "8 Weeks",
      level: "Intermediate",
      author: "By David Brownh",
      title: "Mobile App Development",
      desc: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
    },
    {
      img: c4,
      duration: "10 Weeks",
      level: "Beginner",
      author: "By Sarah Thompson",
      title: "Graphic Design for Beginners",
      desc: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
    },
    {
      img: c5,
      duration: "10 Weeks",
      level: "Intermediate",
      author: "By Michael Adams",
      title: "Front-End Web Development",
      desc: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
    },
    {
      img: c6,
      duration: "6 Weeks",
      level: "Advance",
      author: "By Jennifer Wilson",
      title: "Advanced JavaScript",
      desc: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence.",
    },
  ];
  return (
    <section className="px-[5%] lg:px-[10%] mb-[50px] lg:mb-[100px]">
      <h1 className="font-bold text-[30px] lg:text-[40px]">Our Courses</h1>
      <p className="w-full lg:w-[800px] text-[#4C4C4D]">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>
      <div className="flex flex-wrap flex-row gap-[30px] justify-center lg:justify-between mt-[30px]">
        {courses.map((e, index) => (
          <div
            key={index}
            className="w-[300px] grow xl:w-[500px] min-h-[200px] p-[10px] md:p-[20px] bg-white rounded-lg  hover:shadow-lg"
          >
            <img src={e.img} className="w-full" />
            <div className="flex justify-between mt-[10px]">
              <div className="flex gap-[10px]">
                <span className="border rounded px-1 text-[10px] lg:text-sm">
                  {e.duration}
                </span>
                <span className="border rounded px-1 text-[10px] lg:text-sm">
                  {e.level}
                </span>
              </div>
              <h2 className="font-bold text-sm">{e.author}</h2>
            </div>
            <h2 className="font-bold text-[18px] my-[10px]">{e.title}</h2>
            <p className="text-[#4C4C4D]">{e.desc}</p>
            <button className="w-full h-[40px] mt-[20px] bg-stone-50 rounded">
              Get it Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default P1S5;
