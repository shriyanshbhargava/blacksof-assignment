import { useState, useEffect, useRef } from 'react';

export const useVideoControls = (initialVideoSrc: string) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoSrc, setCurrentVideoSrc] = useState(initialVideoSrc);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoProgress, setVideoProgress] = useState(0);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement
          .play()
          .catch((error) => console.error('Video play failed:', error));
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying, currentVideoSrc]);

  const handlePlayPause = () => setIsPlaying(!isPlaying);
  
  const handleVideoEnded = () => setIsPlaying(false);
  
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setVideoProgress(progress);
    }
  };

  return {
    videoRef,
    currentVideoSrc,
    setCurrentVideoSrc,
    isPlaying,
    setIsPlaying,
    videoProgress,
    handlePlayPause,
    handleVideoEnded,
    handleTimeUpdate,
  };
};