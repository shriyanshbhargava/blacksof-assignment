import { useState, useEffect, useRef } from 'react';
import { useTransform, type MotionValue } from 'framer-motion';
import { CarouselCategory, SliderProps } from '../types/carousel';

export const useSectionNavigation = (
    carouselShowcaseData: CarouselCategory[],
  scrollYProgress: MotionValue<number>,
  contentFadeEnd: number
) => {
  const sectionsContainerRef = useRef<HTMLDivElement>(null);
  const [activeCarouselCategory, setActiveCarouselCategory] = useState<CarouselCategory>(
    carouselShowcaseData[0]
  );
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [sectionElements, setSectionElements] = useState<HTMLElement[]>([]);

  const numSolutionCategories = carouselShowcaseData.length;
  const sectionInteractionStart = contentFadeEnd;
  const sectionInteractionEnd = 0.8;

  const activeSectionIndexMV: MotionValue<number> = useTransform(
    scrollYProgress,
    (value) => {
      if (value < sectionInteractionStart) return 0;
      if (value >= sectionInteractionEnd) return numSolutionCategories - 1;
      const progressInSections =
        (value - sectionInteractionStart) /
        (sectionInteractionEnd - sectionInteractionStart);
      return Math.min(
        numSolutionCategories - 1,
        Math.floor(progressInSections * numSolutionCategories)
      );
    }
  );

  // Collect DOM elements for slider positioning
  useEffect(() => {
    if (sectionsContainerRef.current) {
      const elements = Array.from(sectionsContainerRef.current.children).filter(
        (child) => child.classList.contains('section-item')
      ) as HTMLElement[];
      setSectionElements(elements);
    }
  }, []);

  // Handle scroll-based section updates
  useEffect(() => {
    const unsubscribe = activeSectionIndexMV.onChange((latestIndex) => {
      setActiveSectionIndex(latestIndex);
      const newSection = carouselShowcaseData[latestIndex];
      setActiveCarouselCategory(newSection);
    });
    return () => unsubscribe();
  }, [activeSectionIndexMV, carouselShowcaseData]);

  const handleSectionClick = (sectionIndex: number) => {
    const newSection = carouselShowcaseData[sectionIndex];
    setActiveSectionIndex(sectionIndex);
    setActiveCarouselCategory(newSection);
  };

  return {
    sectionsContainerRef,
    activeCarouselCategory,
    activeSectionIndex,
    sectionElements,
    handleSectionClick,
  };
};