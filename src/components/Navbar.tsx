"use client";

import React, { useRef, useState } from "react";

//next
import Image from "next/image";
import Link from "next/link";

//animation
import { motion } from "framer-motion";

//component
import Menu from "./Menu";

//image
import logo from "src/assets/images/logo.png";

const Navbar = () => {
  const ref = useRef<string | any>("");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;

    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image width={150} height={150} src={logo} alt="logo" />
        </motion.div>
        <div className="hidden md:inline-flex items-center gap-7">
          <ul className="flex text-[18px] gap-7">
            <Link
              href={"#home"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href={"#about"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.2 }}
              >
                <span className="text-textGreen">01.</span> About
              </motion.li>
            </Link>
            <Link
              href={"#skill"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.3 }}
              >
                <span className="text-textGreen">02.</span> Key Skills
              </motion.li>
            </Link>
            <Link
              href={"#project"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.4 }}
              >
                <span className="text-textGreen">03.</span> Project
              </motion.li>
            </Link>
            <Link
              href={"#contact"}
              onClick={handleScroll}
              className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.5 }}
              >
                <span className="text-textGreen">04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          <Link
            href="https://drive.google.com/file/d/17KbveyAx-MJxlBLMdpBiDbq1OBTgorSG/view"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="px-4 py-2 rounded-sm text-textGreen text-sm border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </Link>
        </div>
        {/* Small Icon section */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
        >
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
        </div>
        {showMenu && (
          <Menu
            handleScroll={handleScroll}
            setShowMenu={() => setShowMenu(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
