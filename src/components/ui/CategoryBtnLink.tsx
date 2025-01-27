"use client";

import React from "react";
import { motion } from "framer-motion";
import { progress, revealsText } from "@/data/animation";

interface DataProps {
  title: string;
  index: number;
}

interface CategoryBtnLinkProps {
  data: DataProps;
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  classNameLink: string;
  classNameHref: string;
}

export default function CategoryBtnLink({
    data,
    isActive,
    setSelectedIndicator,
    classNameLink,
    classNameHref,
  }: CategoryBtnLinkProps) {
    const { title, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(title);
      }}
      custom={index}
      variants={revealsText}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={progress}
        animate={isActive ? "open" : "closed"}
        className={`${classNameHref}`}
      ></motion.div>

      <div className={`${classNameLink}`}>
        {title}
      </div>
    </motion.div>
  )
}
