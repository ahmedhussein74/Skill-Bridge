import logo from "../images/logo.svg";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const routes = [
    {
      url: "/",
      display: "home",
    },
    {
      url: "/courses",
      display: "courses",
    },
    {
      url: "/pricing",
      display: "pricing",
    },
    {
      url: "/about",
      display: "about",
    },
    {
      url: "/contact",
      display: "contact",
    },
  ];
  const [view, setView] = useState(false);
  const [icon, setIcon] = useState("fa-solid fa-bars");

  const changeHeight = () => {
    if (window.screen.width < 1024) {
      if (view) {
        setView(false);
        setIcon("fa-solid fa-bars");
        document.querySelector("nav").style.height = "60px";
      } else {
        setView(true);
        setIcon("fa-solid fa-xmark");
        document.querySelector("nav").style.height = "420px";
      }
    }
  };
  return (
    <nav className="w-full px-[10%] h-[60px] flex overflow-hidden flex-wrap lg:items-center lg:justify-between duration-1000 bg-white absolute">
      <div className="w-full lg:w-fit h-[60px] text-[#292F36] flex justify-between items-center">
        <p className="w-[40px] h-[40px] flex items-center justify-center bg-[#FF9500] rounded">
          <img src={logo} className="w-[30px] " />
        </p>
        <i
          onClick={changeHeight}
          className={`${icon} block lg:hidden text-[25px]`}
        ></i>
      </div>
      <aside className="w-full lg:w-fit flex flex-wrap gap-0 lg:gap-[40px]">
        {routes.map((link, index) => (
          <NavLink
            key={index}
            to={link.url}
            onClick={changeHeight}
            className="h-[60px] lg:h-fit w-full lg:w-fit capitalize text-[18px] flex items-center justify-center rounded-lg"
          >
            {link.display}
          </NavLink>
        ))}
      </aside>
      <div className="w-full lg:w-fit h-[60px] flex justify-center items-center gap-[20px]">
        <button className="w-[120px] h-[40px] rounded shadow bg-stone-50">
          Signup
        </button>
        <button className="w-[120px] h-[40px] text-white rounded shadow bg-[#FF9500]">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Nav;
