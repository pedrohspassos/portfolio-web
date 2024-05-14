"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "6",
    postfix: "+",
  },
  {
    prefix:"",
    metric: "Users",
    value: "2",
  },
  {
    metric: "Certifications",
    value: "0",
  },
  {
    metric: "Years",
    value: "2",
  },
];

const AchievementsSection = () => {
  return (
    <div className="xl:py-10 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[indigo] sm:border rounded-md py-8 px-16 flex flex-row sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
              <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="pt-BR"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tension: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
