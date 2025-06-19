import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils/utils";
import { CarouselCategory } from "@/lib/types/carousel";
import { bottomControlItemVariants } from "@/lib/utils/animationVariants";
import { PlayButton } from "./PlayButton";

interface ControlButtonsProps {
  activeCarouselCategory: CarouselCategory;
  activeControlIndex: number;
  isPlaying: boolean;
  videoProgress: number;
  onControlClick: (videoSrc: string, index: number) => void;
  onPlayPause: () => void;
}

export const ControlButtons: React.FC<ControlButtonsProps> = ({
  activeCarouselCategory,
  activeControlIndex,
  isPlaying,
  videoProgress,
  onControlClick,
  onPlayPause,
}) => (
  <>
    {/* Mobile Layout */}
    <div className="block sm:hidden">
      <div className="flex justify-center mb-4">
        <PlayButton
          isPlaying={isPlaying}
          videoProgress={videoProgress}
          onPlayPause={onPlayPause}
          className="p-3"
        />
      </div>
      <div className="flex justify-center gap-3 overflow-x-auto pb-2">
        {activeCarouselCategory.bottomControlsData.map((control, index) => (
          <motion.button
            key={`${activeCarouselCategory.id}-${control.name}`}
            onClick={() => onControlClick(control.video, index)}
            className={cn(
              "flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-300 flex-shrink-0",
              activeControlIndex === index
                ? "opacity-100"
                : "opacity-30 hover:opacity-70"
            )}
            variants={bottomControlItemVariants}
          >
            <motion.div
              animate={{
                scale: activeControlIndex === index ? 1.1 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <Image
                src={control.image || "/placeholder.svg"}
                alt={control.name}
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </motion.div>
            <span className="text-xs text-center leading-tight">
              {control.name}
            </span>
          </motion.button>
        ))}
      </div>
    </div>

    {/* Desktop Layout */}
    <div className="hidden sm:flex items-end justify-center lg:justify-end gap-3 md:gap-4 lg:gap-6">
      {activeCarouselCategory.bottomControlsData.map((control, index) => (
        <motion.button
          key={`${activeCarouselCategory.id}-${control.name}`}
          onClick={() => onControlClick(control.video, index)}
          className={cn(
            "flex flex-col items-center gap-2 p-2 rounded-lg transition-opacity duration-300",
            activeControlIndex === index ? "opacity-100" : "opacity-40"
          )}
          variants={bottomControlItemVariants}
        >
          <motion.div
            animate={{ scale: activeControlIndex === index ? 1.15 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Image
              src={control.image || "/placeholder.svg"}
              alt={control.name}
              width={60}
              height={60}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          </motion.div>
          <span className="text-xs sm:text-sm text-center">{control.name}</span>
        </motion.button>
      ))}

      <PlayButton
        isPlaying={isPlaying}
        videoProgress={videoProgress}
        onPlayPause={onPlayPause}
        className="self-center ml-4 lg:ml-6"
      />
    </div>
  </>
);
