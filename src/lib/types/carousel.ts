export interface CarouselCategory {
    id: string;
    title: string;
    description: string;
    videoSrc: string;
    bottomControlsData: {
      name: string;
      image: string;
      video: string;
    }[];
  }
  
  export interface SliderProps {
    height: number;
    y: number;
  }