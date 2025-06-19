"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { carouselShowcaseData } from "@/data/carouselShowcaseData";
import { useScrollAnimations } from "@/lib/hooks/useScrollAnimations";
import { useVideoControls } from "@/lib/hooks/useVideoControls";
import { useSectionNavigation } from "@/lib/hooks/useSectionNavigation";
import { useControlsNavigation } from "@/lib/hooks/useControlsNavigation";
import { calculateSliderProps } from "@/lib/utils/sliderUtils";
import { bottomControlsContainerVariants } from "@/lib/utils/animationVariants";
import { SectionNavigation } from "../CarouselSection/SectionNavigation";
import { ControlButtons } from "../CarouselSection/ControlButtons";

const CarouselSection: React.FC = () => {
  const {
    targetRef,
    headingY,
    headingScale,
    panelOpacity,
    panelY,
    scrollYProgress,
    contentFadeEnd,
  } = useScrollAnimations();

  const {
    videoRef,
    currentVideoSrc,
    setCurrentVideoSrc,
    isPlaying,
    setIsPlaying,
    videoProgress,
    handlePlayPause,
    handleVideoEnded,
    handleTimeUpdate,
  } = useVideoControls(carouselShowcaseData?.[0]?.videoSrc || "");

  const sectionsContainerRef = useRef<HTMLDivElement>(null);

  const {
    activeCarouselCategory,
    activeSectionIndex,
    sectionElements,
    handleSectionClick,
  } = useSectionNavigation(
    carouselShowcaseData,
    scrollYProgress,
    contentFadeEnd
  );

  const { activeControlIndex, handleControlClick, resetActiveControl } =
    useControlsNavigation();

  // Sync video and controls when section changes
  useEffect(() => {
    setCurrentVideoSrc(activeCarouselCategory.videoSrc);
    resetActiveControl();
    setIsPlaying(true);
  }, [
    activeCarouselCategory,
    setCurrentVideoSrc,
    resetActiveControl,
    setIsPlaying,
  ]);

  // Handle control clicks
  const onControlClick = (videoSrc: string, index: number) => {
    const result = handleControlClick(videoSrc, index);
    setCurrentVideoSrc(result.videoSrc);
    setIsPlaying(true);
  };

  // Handle section clicks
  const onSectionClick = (sectionIndex: number) => {
    handleSectionClick(sectionIndex);
    resetActiveControl();
    setIsPlaying(true);
  };

  // Only calculate slider props if the ref is available
  const sliderProps = sectionsContainerRef.current
    ? calculateSliderProps(
        sectionElements,
        activeSectionIndex,
        sectionsContainerRef as React.RefObject<HTMLDivElement>
      )
    : null;

  return (
    <div
      ref={targetRef}
      className="relative bg-black text-white"
      style={{ height: "350vh" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Main heading with scroll animations */}
        <motion.div
          style={{ y: headingY, scale: headingScale }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-4 mb-5"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight">
            Evolving the drive with{" "}
            <span className="font-bold">360-degree</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mt-2">
            comprehensive solutions
          </h2>
        </motion.div>

        {/* Interactive content panel */}
        <motion.div
          style={{ opacity: panelOpacity, y: panelY }}
          className="absolute inset-0 z-10 flex flex-col justify-between"
        >
          <div className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 flex-shrink-0" />

          {/* Main content layout */}
          <div className="flex-grow flex flex-col lg:flex-row justify-between items-stretch px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mb-4 min-h-0">
            {/* Solution categories navigation panel */}
            <div className="relative w-full lg:w-2/5 xl:w-1/3 flex-shrink-0 mb-6 lg:mb-0 lg:pr-6 xl:pr-8">
              <SectionNavigation
                carouselShowcaseData={carouselShowcaseData}
                activeSectionIndex={activeSectionIndex}
                sectionsContainerRef={sectionsContainerRef}
                sliderProps={sliderProps}
                onSectionClick={onSectionClick}
              />
            </div>

            {/* Video showcase panel */}
            <div className="w-full lg:w-1/2 xl:w-3/5 flex items-center justify-center lg:pl-6 xl:pl-8 min-h-0">
              <div className="relative w-full h-full max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] lg:max-h-[65vh] xl:max-h-[70vh]">
                <video
                  ref={videoRef}
                  key={currentVideoSrc}
                  src={currentVideoSrc}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Interactive controls section */}
          <motion.div
            className="flex-shrink-0 py-4 md:py-6 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
            variants={bottomControlsContainerVariants}
            initial="hidden"
            animate={panelOpacity.get() > 0.5 ? "visible" : "hidden"}
          >
            <ControlButtons
              activeCarouselCategory={activeCarouselCategory}
              activeControlIndex={activeControlIndex}
              isPlaying={isPlaying}
              videoProgress={videoProgress}
              onControlClick={onControlClick}
              onPlayPause={handlePlayPause}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CarouselSection;
