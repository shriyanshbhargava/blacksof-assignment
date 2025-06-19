import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/utils";
import { CarouselCategory, SliderProps } from "@/lib/types/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SectionNavigationProps {
  carouselShowcaseData: CarouselCategory[];
  activeSectionIndex: number;
  sectionsContainerRef: React.RefObject<HTMLDivElement | null>;
  sliderProps: SliderProps | null;
  onSectionClick: (index: number) => void;
}

export const SectionNavigation: React.FC<SectionNavigationProps> = ({
  carouselShowcaseData,
  activeSectionIndex,
  sectionsContainerRef,
  onSectionClick,
}) => {
  const nextSection = () => {
    if (activeSectionIndex < carouselShowcaseData.length - 1) {
      onSectionClick(activeSectionIndex + 1);
    }
  };

  const prevSection = () => {
    if (activeSectionIndex > 0) {
      onSectionClick(activeSectionIndex - 1);
    }
  };

  return (
    <>
      {/* Mobile Navigation - Carousel Style */}
      <div className="lg:hidden">
        {/* Progress indicators */}
        <div className="flex justify-center mb-4">
          <div className="flex gap-2">
            {carouselShowcaseData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => onSectionClick(index)}
                className={cn(
                  "h-1 rounded-full transition-all duration-300",
                  activeSectionIndex === index
                    ? "w-8 bg-white"
                    : "w-2 bg-gray-600"
                )}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Navigation controls */}
        <div className="flex justify-between items-center mb-4">
          <motion.button
            onClick={prevSection}
            disabled={activeSectionIndex === 0}
            className="p-2 rounded-full border border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          
          <span className="text-sm text-gray-400">
            {activeSectionIndex + 1} of {carouselShowcaseData.length}
          </span>
          
          <motion.button
            onClick={nextSection}
            disabled={activeSectionIndex === carouselShowcaseData.length - 1}
            className="p-2 rounded-full border border-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Draggable section carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-4"
            drag="x"
            dragConstraints={{ left: -400, right: 400 }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              const threshold = 100;
              if (info.offset.x > threshold && activeSectionIndex > 0) {
                onSectionClick(activeSectionIndex - 1);
              } else if (info.offset.x < -threshold && activeSectionIndex < carouselShowcaseData.length - 1) {
                onSectionClick(activeSectionIndex + 1);
              }
            }}
            animate={{ x: -activeSectionIndex * (window.innerWidth * 0.8 + 16) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {carouselShowcaseData.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => onSectionClick(index)}
                className="flex-shrink-0 mt-[5rem] rounded-lg p-4 border border-black text-left snap-center"
                style={{ width: '80vw' }}
                animate={{
                  opacity: activeSectionIndex === index ? 1 : 0.6,
                  scale: activeSectionIndex === index ? 1 : 0.95,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold mb-2 leading-tight text-blue-400">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                  {section.description}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Desktop Navigation - Enhanced responsive breakpoints */}
      <div className="hidden lg:block relative mt-6 xl:mt-8 2xl:mt-10 3xl:mt-12">
        {/* Continuous line for all sections */}
        <div
          className="absolute top-0 left-0 w-0.5 bg-gray-600 rounded-full"
          style={{ height: "89%" }}
        />

        <div ref={sectionsContainerRef} className="relative">
          {carouselShowcaseData.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => onSectionClick(index)}
              animate={{
                opacity: activeSectionIndex === index ? 1 : 0.4,
                scale: activeSectionIndex === index ? 1 : 0.98,
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.5 }}
              className="section-item transform-gpu mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 3xl:mb-12 pl-3 lg:pl-4 xl:pl-6 pr-2 lg:pr-3 xl:pr-4 py-2 lg:py-3 xl:py-4 text-left w-full rounded-md lg:rounded-lg hover:bg-white/5 transition-colors relative"
            >
              {/* Active section indicator */}
              {activeSectionIndex === index && (
                <div className="absolute left-0 top-0 w-0.5 h-full bg-white rounded-full" />
              )}

              {activeSectionIndex === index && (
                <motion.div
                  className="absolute inset-0 rounded-md lg:rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              <div className="relative z-10 pl-6 lg:pl-8 xl:pl-10">
                <h3 className="text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl font-semibold mb-1 lg:mb-1.5 xl:mb-2 leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs lg:text-sm xl:text-base 2xl:text-lg 3xl:text-xl text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </>
  );
};