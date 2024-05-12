"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Title Project 1",
    description: "Project 1 description",
    image: "/images/projects/1.png",
    tag: ["All", "Web Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Title Project 2",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Title Project 3",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Title Project 4",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Data Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Title Project 5",
    description: "Project 5 description",
    image: "/images/projects/5.png",
    tag: ["All", "Data Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Title Project 6",
    description: "Project 6 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web Projects"],
    gitUrl: "https://github.com/pedrohspassos",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      
      <h2 className="text-center text-5xl font-bold mb-5 mt-20 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-700">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web Projects"
          isSelected={tag === "Web Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Projects"
          isSelected={tag === "Data Projects"}
        />
      </div>

      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
