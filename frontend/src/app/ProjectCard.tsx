/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

interface ProjectProps {
  project: {
    Title: string;
    Link: string;
    Image: string;
    Description: string;
  };
}

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{ delay: 0, duration: 0.25 }}
      key={project.Title}
    >
      <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} className="w-full h-full">
        <Link
          href={project.Link}
          className="bg-gray-800 text-white rounded-lg shadow-md flex w-full h-full flex-col relative items-center p-5 py-8"
        >
          <img
            src={project.Image}
            alt={project.Title}
            className="max-w-full w-11/12 aspect-video object-cover rounded-md mb-3"
          />
          <h3 className="text-xl text-white w-11/12 mb-2 font-bold">
            {project.Title}
          </h3>
          <p className="text-gray-300 w-11/12 text-justify leading-relaxed">
            {project.Description}
          </p>
          <div className="absolute top-0 rounded-lg left-0 w-full h-full bg-gradient-to-br from-white/10 to-white/30 opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
        </Link>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
