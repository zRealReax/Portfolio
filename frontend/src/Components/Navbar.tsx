"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  const links = [
    { title: "Web", link: "/web" },
    { title: "Game", link: "/game" },
    { title: "Mobile", link: "/mobile" },
    { title: "Desktop", link: "/desktop" },
  ];
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 2 }}
        >
          <Link
            href="/"
            className="text-white hover:text-white/70 font-bold text-xl"
          >
            My Portfolio
          </Link>
        </motion.div>
        <ul className="flex gap-5">
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={index}
              className="relative group"
              whileTap={{ scale: 2 }}
            >
              <div className="absolute left-0 bottom-[-2px] w-full h-[3px] bg-white scale-x-0 group-hover:scale-x-100 duration-300 transition-transform"></div>
              <Link
                href={link.link}
                className="text-white/70 text-lg font-semibold hover:text-white transition-all duration-500 hover:translate-y-[-3px] "
              >
                {link.title}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
