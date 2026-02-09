"use client";
import Link from "next/link";
import React, { useState, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/constants";

interface ProjectShowcaseProps {
  projects: Project[];
}

export default function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isIframeActive, setIsIframeActive] = useState(false);

  const activeProject = projects[activeIndex];
  const hasScreenshot = !!activeProject.bg;

  const handleProjectChange = useCallback((index: number) => {
    setActiveIndex(index);
    setIsIframeActive(false); // Reset iframe interaction when switching
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* Project Tabs - Horizontal scroll on mobile */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max sm:justify-center">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => handleProjectChange(index)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                border-2 cursor-pointer whitespace-nowrap
                ${
                  activeIndex === index
                    ? "bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-lg scale-105"
                    : "bg-transparent text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              {project.title}
            </button>
          ))}
        </div>
      </div>

      {/* Browser Window */}
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="group block w-full rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition dark:shadow-white"
      >
        {/* Browser-like window */}
        <div className="relative bg-white">
          {/* Fake browser top bar */}
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-700 border-b">
            {/* Close */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition cursor-pointer"
              aria-label="Close project preview"
              title={isOpen ? "Close" : "Open"}
            />
            {/* Minimize */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition cursor-pointer"
              aria-label="Minimize project preview"
              title={isOpen ? "Minimize" : "Maximize"}
            />
            {/* Fullscreen */}
            <Link
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition"
              aria-label="Open project in new tab"
              title="Fullscreen"
            />
            <Link
              href={activeProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 text-xs text-gray-500 truncate dark:text-white flex-1"
            >
              {activeProject.url}
            </Link>
          </div>

          {/* Website Preview with animation */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="preview"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative bg-gray-200 overflow-hidden w-full"
              >
                <div className="aspect-[9/16] md:aspect-video w-full relative">
                  {hasScreenshot ? (
                    <>
                      {/* Desktop Screenshot */}
                      <img
                        src={activeProject.bg}
                        alt={`${activeProject.title} desktop preview`}
                        className="hidden md:block w-full h-full object-cover object-top"
                      />
                      {/* Mobile Screenshot */}
                      <img
                        src={activeProject.bgMobile || activeProject.bg}
                        alt={`${activeProject.title} mobile preview`}
                        className="block md:hidden w-full h-full object-cover object-top"
                      />
                      {/* Overlay - clicks open project in new tab */}
                      <Link
                        href={activeProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-gray-900/50 backdrop-blur-sm cursor-pointer transition hover:bg-black/40 dark:hover:bg-gray-900/60"
                      >
                        <span className="text-white dark:text-gray-200 font-medium text-lg text-center px-4">
                          Tap / Click to visit the project!
                        </span>
                      </Link>
                    </>
                  ) : (
                    <>
                      {/* Iframe for projects without screenshots */}
                      <iframe
                        key={activeProject.url}
                        src={activeProject.url}
                        className="w-full h-full"
                        loading="lazy"
                        style={{
                          pointerEvents: isIframeActive ? "auto" : "none",
                        }}
                      />
                      {/* Frosted overlay */}
                      {!isIframeActive && (
                        <div
                          className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-gray-900/50 backdrop-blur-sm cursor-pointer transition"
                          onClick={() => setIsIframeActive(true)}
                        >
                          <span className="text-white dark:text-gray-200 font-medium text-lg text-center px-4">
                            Tap / Click to interact with the project!
                          </span>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Title + Description section */}
        <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
          <h3 className="text-lg font-semibold text-black dark:text-white">
            {activeProject.title}
          </h3>
          <p className="text-base line-clamp-5 text-gray-700 dark:text-gray-300">
            {activeProject.description}
          </p>
          <Link
            href={activeProject.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 truncate flex items-center gap-x-1"
          >
            <span>Open Project</span> <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>

      {/* Quick navigation dots for mobile */}
      <div className="flex justify-center gap-2 md:hidden">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => handleProjectChange(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 cursor-pointer
              ${
                activeIndex === index
                  ? "bg-black dark:bg-white w-6"
                  : "bg-gray-300 dark:bg-gray-600"
              }
            `}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
