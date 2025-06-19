import { useState } from 'react';

export const useControlsNavigation = () => {
  const [activeControlIndex, setActiveControlIndex] = useState(0);

  const handleControlClick = (videoSrc: string, index: number) => {
    setActiveControlIndex(index);
    return { videoSrc, index };
  };

  const resetActiveControl = () => {
    setActiveControlIndex(0);
  };

  return {
    activeControlIndex,
    handleControlClick,
    resetActiveControl,
  };
};