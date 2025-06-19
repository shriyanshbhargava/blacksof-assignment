import React from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import {
  playButtonBgVariants,
  playButtonPulseVariants,
} from "@/lib/utils/animationVariants";

interface PlayButtonProps {
  isPlaying: boolean;
  videoProgress: number;
  onPlayPause: () => void;
  className?: string;
}

export const PlayButton: React.FC<PlayButtonProps> = ({
  isPlaying,
  videoProgress,
  onPlayPause,
  className = "",
}) => (
  <motion.button
    onClick={onPlayPause}
    className={`relative p-1.5 xs:p-2 sm:p-2.5 md:p-3 border border-gray-600 rounded-full transition-colors hover:border-gray-400 active:scale-95 ${className}`}
    aria-label={isPlaying ? "Pause video" : "Play video"}
    variants={{
      ...playButtonPulseVariants,
    }}
    animate={isPlaying ? "playing" : "paused"}
  >
    <motion.div
      className="absolute inset-0 rounded-full"
      variants={playButtonBgVariants}
      animate={isPlaying ? "playing" : "paused"}
    />
    <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 relative z-10" viewBox="0 0 100 100">
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        stroke="#fff"
        strokeWidth="5"
        fill="transparent"
        pathLength="100"
        style={{
          strokeDasharray: "100",
          strokeDashoffset: 100 - videoProgress,
        }}
        className="transform -rotate-90 origin-center"
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center z-10">
      {isPlaying ? (
        <Pause className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
      ) : (
        <Play className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
      )}
    </div>
  </motion.button>
);