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
        {/* Main heading with scroll animations - Enhanced mobile responsiveness */}
        <motion.div
          style={{ y: headingY, scale: headingScale }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 pointer-events-none px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 mb-2 xs:mb-3 sm:mb-5"
        >
          <h1 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light leading-tight max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            Evolving the drive with{" "}
            <span className="font-bold">360-degree</span>
          </h1>
          <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl font-light leading-tight mt-0.5 xs:mt-1 sm:mt-2 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            comprehensive solutions
          </h2>
        </motion.div>

        {/* Interactive content panel - Improved mobile layout */}
        <motion.div
          style={{ opacity: panelOpacity, y: panelY }}
          className="absolute inset-0 z-10 flex flex-col justify-between"
        >
          {/* Top spacer - More granular responsive height */}
          <div className="h-8 xs:h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 2xl:h-32 3xl:h-40 flex-shrink-0" />

          {/* Main content layout - Enhanced mobile-first approach */}
          <div className="flex-grow flex flex-col lg:flex-row justify-between items-stretch px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20 mb-2 xs:mb-3 sm:mb-4 min-h-0 gap-2 xs:gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
            {/* Solution categories navigation panel - Mobile optimized */}
            <div className="relative w-full lg:w-2/5 xl:w-1/3 2xl:w-2/5 flex-shrink-0 mb-2 xs:mb-3 sm:mb-4 md:mb-6 lg:mb-0">
              <SectionNavigation
                carouselShowcaseData={carouselShowcaseData}
                activeSectionIndex={activeSectionIndex}
                sectionsContainerRef={sectionsContainerRef}
                sliderProps={sliderProps}
                onSectionClick={onSectionClick}
              />
            </div>

            {/* Video showcase panel - Better mobile sizing */}
            <div className="w-full lg:w-3/5 xl:w-2/3 2xl:w-3/5 flex items-center justify-center min-h-0">
              <div className="relative w-full h-full max-h-[28vh] xs:max-h-[32vh] sm:max-h-[38vh] md:max-h-[45vh] lg:max-h-[50vh] xl:max-h-[55vh] 2xl:max-h-[60vh] 3xl:max-h-[65vh] rounded-md sm:rounded-lg overflow-hidden">
                <video
                  ref={videoRef}
                  key={currentVideoSrc}
                  src={currentVideoSrc}
                  muted
                  playsInline
                  onEnded={handleVideoEnded}
                  onTimeUpdate={handleTimeUpdate}
                  className="w-full h-full object-cover sm:object-contain rounded-md sm:rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Interactive controls section - Mobile optimized */}
          <motion.div
            className="flex-shrink-0 py-2 xs:py-3 sm:py-4 md:py-6 px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 3xl:px-20"
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