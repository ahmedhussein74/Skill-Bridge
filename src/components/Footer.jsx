import logo from "../images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white pt-[50px]">
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-[30px]">
        <ul className="flex flex-col gap-[20px]">
          <li className="w-[40px] h-[40px] rounded bg-[#FF9500] flex items-center justify-center">
            <img src={logo} className="w-[30px] h-[30px]" />
          </li>
          <li>
            <i className="fa-solid fa-envelope mr-[10px]"></i>
            hello@skillbridge.com
          </li>
          <li>
            <i className="fa-solid fa-phone mr-[10px]"></i>+91 91813 23 2309
          </li>
          <li>
            <i className="fa-solid fa-location-dot mr-[10px]"></i>Somewhere in
            the World
          </li>
        </ul>
        <ul className="text-center md:text-start">
          <li className="font-bold text-[20px] pb-[10px]">Home</li>
          <li>Benefits</li>
          <li>Our Courses</li>
          <li>Our Testimonials</li>
          <li>Our FAQ</li>
        </ul>
        <ul className="text-center md:text-start">
          <li className="font-bold text-[20px] pb-[10px]">About Us</li>
          <li>Company</li>
          <li>Achievements</li>
          <li>Our Goals</li>
        </ul>
        <ul className="text-center md:text-start">
          <li className="font-bold text-[20px] pb-[10px]">Social Profiles</li>
          <li className="flex gap-[20px] justify-center text-[20px]">
            <i className="fa-brands fa-square-facebook"></i>
            <i className="fa-brands fa-linkedin"></i>
            <i className="fa-brands fa-square-twitter"></i>
          </li>
        </ul>
      </div>
      <p className="py-[15px] text-[#656567] text-center mt-[15px]">
        © 2023 Skillbridge. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
