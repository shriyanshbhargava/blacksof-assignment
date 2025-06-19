import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/utils";
import { CarouselCategory, SliderProps } from "@/lib/types/carousel";

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
}) => (
  <>
    {/* Mobile Navigation */}
    <div className="lg:hidden">
      <div className="flex justify-center mb-1.5">
        <div className="flex gap-2">
          {carouselShowcaseData.map((_, index) => (
            <motion.div
              key={index}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                activeSectionIndex === index
                  ? "w-8 bg-white"
                  : "w-2 bg-gray-600"
              )}
              animate={{
                scale: activeSectionIndex === index ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {carouselShowcaseData.map((section, index) => (
          <motion.button
            key={section.id}
            onClick={() => onSectionClick(index)}
            animate={{
              opacity: activeSectionIndex === index ? 1 : 0.4,
              scale: activeSectionIndex === index ? 1 : 0.95,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0 w-64 sm:w-80 text-left p-3 rounded-lg hover:bg-white/5 transition-colors"
          >
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">
              {section.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {section.description}
            </p>
          </motion.button>
        ))}
      </div>
    </div>

    {/* Desktop Navigation */}
    <div className="hidden lg:block relative mt-14">
      {/* Single continuous line for all sections */}
      <div
        className="absolute top-0 w-0.5 bg-gray-600 rounded-full"
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
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="section-item transform-gpu mb-8 xl:mb-10 pl-6 pr-4 py-4 text-left w-full rounded-lg hover:bg-white/5 transition-colors relative"
          >
            {/* Active section gets white line overlay */}
            {activeSectionIndex === index && (
              <div className="absolute left-0 top-0 w-0.5 h-full bg-white rounded-full" />
            )}

            {activeSectionIndex === index && (
              <motion.div
                className="absolute inset-0  rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            <div className="relative z-10 pl-10">
              <h3 className="text-xl sm:text-2xl font-semibold mb-1">
                {section.title}
              </h3>
              <p className="text-base xl:text-lg text-gray-300 leading-relaxed">
                {section.description}
              </p>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  </>
);
