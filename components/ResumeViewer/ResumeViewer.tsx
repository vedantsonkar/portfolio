"use client";

import { useRef, useState } from "react";
import { RESUME_PREVIEW_URL, RESUME_DOWNLOAD_URL } from "@/constants";
import ZoomControls from "./ZoomControls";

export default function ResumeViewer() {
  const [scale, setScale] = useState(1);
  const constraintsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center min-h-screen p-6">
      {/* Resume Viewer */}
      <div
        ref={constraintsRef}
        className="relative w-full max-w-4xl h-[80vh] overflow-hidden border rounded-xl shadow-lg"
      >
        {/* Floating Zoom Controls */}
        <ZoomControls setScale={setScale} constraintsRef={constraintsRef} />

        {/* Resume Iframe */}
        <iframe
          src={RESUME_PREVIEW_URL}
          className="w-full h-full"
          style={{ transform: `scale(${scale})`, transformOrigin: "0 0" }}
        />
      </div>

      {/* Other Actions */}
      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={RESUME_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-black dark:border-white dark:text-white dark:shadow-white border text-black rounded-lg shadow hover:shadow-lg transition-shadow font-semibold"
        >
          Download PDF
        </a>

        <a
          href={RESUME_PREVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border-black dark:border-white dark:text-white dark:shadow-white border text-black rounded-lg shadow hover:shadow-lg transition-shadow font-semibold"
        >
          Open Fullscreen
        </a>
      </div>
    </div>
  );
}
