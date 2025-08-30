"use client";

import { FC, RefObject, Dispatch, SetStateAction } from "react";
import { ZoomIn, ZoomOut, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

type ZoomControlsProps = {
  setScale: Dispatch<SetStateAction<number>>;
  constraintsRef: RefObject<HTMLDivElement | null>;
};

const ZoomControls: FC<ZoomControlsProps> = ({ setScale, constraintsRef }) => {
  return (
    <motion.div
      className="absolute top-3 left-3 z-10 flex gap-2 bg-white/50 dark:bg-gray-800/50 text-gray-800 dark:text-gray-100 backdrop-blur-sm p-2 rounded-lg shadow-md m-6"
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.05} // bounce at edges
      dragMomentum={true}
      whileTap={{ scale: 0.95 }}
      style={{ cursor: "grab", touchAction: "none" }}
    >
      <button
        onClick={() => setScale((s) => Math.min(s + 0.1, 2))}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Zoom In"
        type="button"
      >
        <ZoomIn size={20} />
      </button>

      <button
        onClick={() => setScale((s) => Math.max(s - 0.1, 0.5))}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Zoom Out"
        type="button"
      >
        <ZoomOut size={20} />
      </button>

      <button
        onClick={() => setScale(1)}
        className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label="Reset Zoom"
        type="button"
      >
        <RefreshCw size={20} />
      </button>
    </motion.div>
  );
};

export default ZoomControls;
