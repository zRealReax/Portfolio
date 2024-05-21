/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/Components/ProjectCard";
import InteractiveCard from "@/Components/InteractiveCard";

const Home = () => {
  const projects = [
    {
      Title: "Twitter Clone",
      Description: "I built a Twitter Clone using Next.js and Golang.",
      Image: "TwitterClone.png",
      Link: "https://github.com/zRealReax/TwitterClone",
    },
    {
      Title: "Project 2",
      Description:
        "This project was built using Tauri and Next.js. This is a cross platform project, that has seen huge success in the past. Isn't that great?",
      Image: "project2.png",
      Link: "https://github.com/zRealReax/TwitterClone",
    },
    {
      Title: "Project 3",
      Description:
        "This is a project that showcases my skills in Rust and JavaScript.",
      Image: "project3.png",
      Link: "https://github.com/zRealReax/TwitterClone",
    },
    {
      Title: "Project 4",
      Description:
        "This is another project I worked on. It was built using React and Go. This is another project I worked on. It was built using React and Go. This is another project I worked on. It was built using React and Go.",
      Image: "project2.png",
      Link: "https://github.com/zRealReax/TwitterClone",
    },
    {
      Title: "Project 5",
      Description:
        "This is a project that showcases my skills in Rust and JavaScript.",
      Image: "project3.png",
      Link: "https://github.com/zRealReax/TwitterClone",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-white font-bold mb-8"
      >
        Welcome to My Portfolio
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-gray-200 mb-8 text-center"
      >
        Explore my favourite Projects:
      </motion.p>
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.Title} />
          ))}
        </div>
      </section>
      <InteractiveCard
        title="Twitter Clone"
        description="was a very successfull learning experience for me, in learning to use Next.js and Golang."
        image="/TwitterClone.png"
      />
    </div>
  );
};

export default Home;
