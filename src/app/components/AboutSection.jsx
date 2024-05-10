"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-between ">
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>C++</li>
          <li>C</li>
          <li>Java</li>
          <li>Python</li>
          <li>React</li>

        </ul>

        <ul className="list-disc pl-2 px-44  " > 
          <li>R</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
          <li>Git</li>
          <li>JavaScript</li>
          <li>Power BI</li>
          <li>Agile Methodology </li></ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of São Paulo | (2021-2025)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Learning....</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Junior Company, Voll Jr | (2022-2024)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white texxt-base md:text-lg">
            Computer Science student at University of São Paulo, looking for
            opportunity to gain experience in other technologies. I always
            working as part of a team, cooperating with everyone and helping in
            the best way possible, with great satisfaction in teaching and
            learning. Learning is part of my daily routine and challenges always
            keep me motivated to find the best solutions. I'm looking for an
            opportunity to internship in systems development , where I can
            develop my technical knowledge and grow together with the company
            and my co-workers.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
