import { Variants } from "framer-motion";

export const bottomControlsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const bottomControlItemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

export const playButtonPulseVariants: Variants = {
  playing: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  paused: {
    scale: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const playButtonBgVariants: Variants = {
  playing: {
    background: [
      "linear-gradient(45deg, #ffffff20, #ffffff40, #ffffff20)",
      "linear-gradient(225deg, #ffffff20, #ffffff40, #ffffff20)",
      "linear-gradient(45deg, #ffffff20, #ffffff40, #ffffff20)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
  paused: {
    background: "transparent",
    transition: {
      duration: 0.3,
    },
  },
};