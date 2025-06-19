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
    className={`relative p-2 md:p-3 border border-gray-600 rounded-full transition-colors ${className}`}
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
    <svg className="w-6 h-6 md:w-8 md:h-8 relative z-10" viewBox="0 0 100 100">
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
        <Pause className="w-3 h-3 md:w-4 md:h-4" />
      ) : (
        <Play className="w-3 h-3 md:w-4 md:h-4" />
      )}
    </div>
  </motion.button>
);
