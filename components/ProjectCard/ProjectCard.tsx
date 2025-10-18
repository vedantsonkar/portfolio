"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/constants";

export default function ProjectCard({ title, url, description }: Project) {
  const [isOpen, setIsOpen] = useState(true);
  const [isIframeActive, setIsIframeActive] = useState(false);

  return (
    <div className="group block w-full rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition dark:shadow-white">
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
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition"
            aria-label="Open project in new tab"
            title="Fullscreen"
          />
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-xs text-gray-500 truncate dark:text-white"
          >
            {url}
          </Link>
        </div>

        {/* Website Preview with animation */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="iframe"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative bg-gray-200 overflow-hidden w-full"
            >
              <div className="aspect-[9/16] md:aspect-video w-full relative">
                {/* Iframe */}
                <iframe
                  src={url}
                  className="w-full h-full"
                  loading="lazy"
                  style={{ pointerEvents: isIframeActive ? "auto" : "none" }}
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Title + URL section */}
      <div className="p-4 bg-white dark:bg-gray-800 space-y-4">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-base line-clamp-5 text-gray-700 dark:text-gray-300">
          {description}
        </p>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 dark:text-blue-400 truncate flex items-center gap-x-1"
        >
          <span>Open Project</span> <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
