import { SliderProps } from '../types/carousel';

export const calculateSliderProps = (
  sectionElements: HTMLElement[],
  activeSectionIndex: number,
  sectionsContainerRef: React.RefObject<HTMLDivElement>
): SliderProps => {
  if (
    sectionElements.length === 0 ||
    activeSectionIndex >= sectionElements.length
  ) {
    return { height: 0, y: 0 };
  }

  const activeElement = sectionElements[activeSectionIndex];
  const containerRect = sectionsContainerRef.current?.getBoundingClientRect();
  const elementRect = activeElement.getBoundingClientRect();

  if (!containerRect) return { height: 0, y: 0 };

  return {
    height: elementRect.height,
    y:
      elementRect.top -
      containerRect.top +
      sectionsContainerRef.current!.scrollTop,
  };
};