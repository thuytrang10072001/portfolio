"use client";

// import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

interface Props {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  setShowMenu: () => void;
}

const Menu = ({ handleScroll, setShowMenu }: Props) => {
  return (
    <div
      //   ref={(node) => (ref.current = node)}
      className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
    >
      <motion.div className="w-[80%] h-full overflow-y-scroll scrollbarHide bg-[#112240] flex flex-col items-center px-4 py-10 relative">
        <AiOutlineClose
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
          onClick={setShowMenu}
          className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
        />
        <div className="flex flex-col items-center gap-7">
          <ul className="flex flex-col text[13px] gap-7">
            <Link
              href={"#home"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
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
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.2, ease: "easeIn" }}
              >
                <span className="text-textGreen">01.</span> About
              </motion.li>
            </Link>
            <Link
              href={"#experience"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <span className="text-textGreen">02.</span> Experience
              </motion.li>
            </Link>
            <Link
              href={"#project"}
              onClick={handleScroll}
              className="flex items-center font-medium text-textDark hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
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
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
              >
                <span className="text-textGreen">04.</span> Contact
              </motion.li>
            </Link>
          </ul>
          <a href="" target="_blank">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, ease: "easeIn" }}
              className="px-4 py-2 rounded-sm text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Resume
            </motion.button>
          </a>
          <div className="flex flex-row gap-4">
            <a href="https://github.com/thuytrang10072001" target="=_blank">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translate-all duration-300">
                <TbBrandGithub />
              </span>
            </a>
            <a href="https://www.youtube.com/@TrangLe-px5pf" target="=_blank">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translate-all duration-300">
                <SlSocialYoutube />
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/trang-l%C3%AA-41a36b35a/"
              target="=_blank"
            >
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translate-all duration-300">
                <SlSocialLinkedin />
              </span>
            </a>
            <a
              href="https://www.facebook.com/thuy.trang.770277"
              target="=_blank"
            >
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translate-all duration-300">
                <SlSocialFacebook />
              </span>
            </a>
            <a href="https://www.instagram.com/ltttrang_1007" target="=_blank">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 translate-all duration-300">
                <SlSocialInstagram />
              </span>
            </a>
          </div>

          <a
            href=""
            className="text-sm w-72 tracking-widest text-textGreen text-center mt-4"
          >
            <p>lethithuytrang20070805@gmail.com</p>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
