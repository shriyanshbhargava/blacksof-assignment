import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useScrollAnimations = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const headingAnimEnd = 0.1;
  const contentFadeStart = 0.08;
  const contentFadeEnd = 0.15;

  const headingY = useTransform(scrollYProgress, [0, headingAnimEnd], [0, -250]);
  const headingScale = useTransform(scrollYProgress, [0, headingAnimEnd], [1, 0.8]);
  const panelOpacity = useTransform(
    scrollYProgress,
    [contentFadeStart, contentFadeEnd],
    [0, 1]
  );
  const panelY = useTransform(
    scrollYProgress,
    [contentFadeStart, contentFadeEnd],
    [100, 0]
  );

  return {
    targetRef,
    scrollYProgress,
    headingY,
    headingScale,
    panelOpacity,
    panelY,
    contentFadeEnd,
  };
};