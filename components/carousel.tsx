"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface CarouselImage {
  id?: string | number;
  url: string;
  alt: string;
  caption?: string;
}

interface CarouselProps {
  images: CarouselImage[];
  className?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "1/3" | "responsive";
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  className = "",
  autoPlay = false,
  autoPlayInterval = 5000,
  showDots = true,
  showArrows = true,
  aspectRatio = "responsive",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setCurrentIndex(index);
      setDragOffset(0);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning]
  );

  const goToNext = useCallback(() => {
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    goToSlide(nextIndex);
  }, [currentIndex, images.length, goToSlide]);

  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, images.length, goToSlide]);

  // Auto play functionality
  useEffect(() => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
      return () => {
        if (autoPlayRef.current) {
          clearInterval(autoPlayRef.current);
        }
      };
    }
  }, [autoPlay, autoPlayInterval, goToNext, images.length]);

  // Pause auto play on hover
  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    if (autoPlay && images.length > 1) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    }
  };

  // Touch handlers for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    pauseAutoPlay();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !isDragging) return;

    const currentTouch = e.targetTouches[0].clientX;
    const diff = touchStart - currentTouch;

    // Limit drag distance to prevent over-scrolling
    const maxDrag = carouselRef.current?.offsetWidth || 300;
    const limitedDiff = Math.max(-maxDrag * 0.3, Math.min(maxDrag * 0.3, diff));

    setDragOffset(limitedDiff);
    setTouchEnd(currentTouch);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      resumeAutoPlay();
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    } else {
      // Snap back to current position
      setDragOffset(0);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
    resumeAutoPlay();
  };

  // Mouse handlers for desktop drag
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
    pauseAutoPlay();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || !isDragging) return;

    const currentMouse = e.clientX;
    const diff = touchStart - currentMouse;

    const maxDrag = carouselRef.current?.offsetWidth || 300;
    const limitedDiff = Math.max(-maxDrag * 0.3, Math.min(maxDrag * 0.3, diff));

    setDragOffset(limitedDiff);
    setTouchEnd(currentMouse);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setDragOffset(0);
      resumeAutoPlay();
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    } else {
      setDragOffset(0);
    }

    setIsDragging(false);
    setTouchStart(null);
    setTouchEnd(null);
    resumeAutoPlay();
  };

  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      setTouchStart(null);
      setTouchEnd(null);
      resumeAutoPlay();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  if (!images || images.length === 0) {
    return (
      <div
        className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}
      >
        <p className="text-gray-500">No images to display</p>
      </div>
    );
  }

  const aspectRatioClass =
    {
      "16/9": "aspect-[16/9]",
      "4/3": "aspect-[4/3]",
      "1/1": "aspect-square",
      "3/2": "aspect-[3/2]",
      "1/3": "aspect-[3/1]",
      responsive: "h-[30vh] md:h-[40vh] lg:h-[46vh]", // Mobile: 1/2, Desktop: 2/3 of viewport height
    }[aspectRatio] || "aspect-[16/9]";

  return (
    <div
      className={`relative group ${className}`}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {/* Main carousel container */}
      <div
        ref={carouselRef}
        className={`relative overflow-hidden rounded-lg  ${aspectRatioClass} select-none`}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        {/* Images */}
        <div
          className="flex h-full transition-all duration-300 ease-out"
          style={{
            transform: `translateX(${
              -currentIndex * 100 +
              (isDragging
                ? (-dragOffset / (carouselRef.current?.offsetWidth || 1)) * 100
                : 0)
            }%)`,
            transition: isDragging ? "none" : "transform 0.3s ease-out",
          }}
        >
          {images.map((image, index) => {
            return (
              <div
                key={image.id || index}
                className="w-full h-full flex-shrink-0 relative"
              >
                <Image
                  src={image.url}
                  alt={"index" + index}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
                {image.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <p className="text-white text-sm md:text-base font-medium">
                      {image.caption}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation arrows */}
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 md:p-2 rounded-full shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </>
        )}

        {/* Loading indicator for dragging */}
        {isDragging && (
          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
            {Math.abs(dragOffset) > minSwipeDistance
              ? dragOffset > 0
                ? "Release to go next"
                : "Release to go back"
              : "Swipe to navigate"}
          </div>
        )}
      </div>
      {showDots && images.length > 1 && (
        <div className="flex justify-start md:justify-center  pt-2 space-x-2 md:space-x-3 overflow-x-auto overflow-y-hidden pb-2 px-2 md:px-0 scrollbar-hide">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-12 w-12 rounded-lg overflow-hidden transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-1 flex-shrink-0 ${
                index === currentIndex
                  ? "ring-2 ring-primary-600 scale-105 opacity-100"
                  : "opacity-70 hover:opacity-90 hover:scale-102"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <Image
                src={image.url}
                alt={image.alt || `Slide ${index + 1}`}
                width={50}
                height={50}
                className="w-full h-full object-cover"
                sizes="50px"
              />
            </button>
          ))}
        </div>
      )}
      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/60 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default Carousel;
