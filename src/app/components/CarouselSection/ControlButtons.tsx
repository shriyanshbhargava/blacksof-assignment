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
    {/* Mobile Layout - Carousel Style */}
    <div className="block sm:hidden">
      <div className=" justify-center mb-3 hidden">
        <PlayButton
          isPlaying={isPlaying}
          videoProgress={videoProgress}
          onPlayPause={onPlayPause}
          className="p-3"
        />
      </div>
      
      {/* Mobile carousel with drag */}
      <div className="relative">
        <motion.div
          className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          drag="x"
          dragConstraints={{ left: -200, right: 200 }}
          dragElastic={0.1}
        >
          {activeCarouselCategory.bottomControlsData.map((control, index) => (
            <motion.button
              key={`${activeCarouselCategory.id}-${control.name}`}
              onClick={() => onControlClick(control.video, index)}
              className={cn(
                "flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-300 flex-shrink-0 min-w-[80px] snap-center",
                activeControlIndex === index
                  ? "opacity-100 bg-white/10 scale-105"
                  : "opacity-50 hover:opacity-75 hover:bg-white/5"
              )}
              variants={bottomControlItemVariants}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: activeControlIndex === index ? 1.05 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 15,
              }}
            >
              <motion.div
                className="flex-shrink-0"
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
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              <span className="text-xs text-center leading-tight max-w-full whitespace-nowrap">
                {control.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
        
        {/* Control indicators */}
        <div className="flex justify-center gap-1 mt-3 mb-5">
          {activeCarouselCategory.bottomControlsData.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onControlClick(activeCarouselCategory.bottomControlsData[index].video, index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeControlIndex === index ? "bg-white" : "bg-gray-600"
              )}
              whileTap={{ scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </div>

    {/* Desktop Layout - Enhanced responsive breakpoints */}
    <div className="hidden sm:flex items-end justify-center lg:justify-end gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
      {activeCarouselCategory.bottomControlsData.map((control, index) => (
        <motion.button
          key={`${activeCarouselCategory.id}-${control.name}`}
          onClick={() => onControlClick(control.video, index)}
          className={cn(
            "flex flex-col items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-md lg:rounded-lg transition-opacity duration-300 hover:opacity-100 active:scale-95",
            activeControlIndex === index ? "opacity-100" : "opacity-40"
          )}
          variants={bottomControlItemVariants}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ 
              scale: activeControlIndex === index ? 1.1 : 1 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 15 
            }}
            className="flex-shrink-0"
          >
            <Image
              src={control.image || "/placeholder.svg"}
              alt={control.name}
              width={56}
              height={56}
              className="w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 object-contain"
            />
          </motion.div>
          <span className="text-xs xs:text-xs sm:text-sm md:text-sm lg:text-base text-center leading-tight">
            {control.name}
          </span>
        </motion.button>
      ))}

      <PlayButton
        isPlaying={isPlaying}
        videoProgress={videoProgress}
        onPlayPause={onPlayPause}
        className="self-center ml-2 xs:ml-3 sm:ml-4 lg:ml-6 xl:ml-8"
      />
    </div>
  </>
);