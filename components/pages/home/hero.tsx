"use client";
import { HERO_DATA } from "@/lib/hero-data";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Flower2Icon,
  ShoppingBagIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"left" | "right" | null>(null);

  // Touch/swipe states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentSwipeDistance, setCurrentSwipeDistance] = useState(0);
  const [swipeDirection, setSwipeDirection] = useState<"left" | "right" | null>(
    null
  );
  const [isActiveSwiping, setIsActiveSwiping] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const currentData = HERO_DATA[currentIndex];

  // Swipe detection
  const minSwipeDistance = 75;
  const maxSwipeDistance = 200;
  const swipeThreshold = 30;

  const onTouchStart = (e: React.TouchEvent) => {
    if (isTransitioning) return;
    e.preventDefault(); // Prevent default touch behavior

    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setCurrentSwipeDistance(0);
    setSwipeDirection(null);
    setIsActiveSwiping(true);
    setShowSwipeHint(true);

    console.log("Touch start:", e.targetTouches[0].clientX);
  };

  // Mouse events for desktop testing
  const onMouseDown = (e: React.MouseEvent) => {
    if (isTransitioning) return;
    e.preventDefault();

    setTouchEnd(null);
    setTouchStart(e.clientX);
    setCurrentSwipeDistance(0);
    setSwipeDirection(null);
    setIsActiveSwiping(true);
    setShowSwipeHint(true);

    console.log("Mouse down:", e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !isActiveSwiping || isTransitioning) return;
    e.preventDefault(); // Prevent scrolling

    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);

    const rawDistance = touchStart - currentTouch;
    const clampedDistance = Math.max(
      -maxSwipeDistance,
      Math.min(maxSwipeDistance, rawDistance)
    );
    setCurrentSwipeDistance(clampedDistance);

    if (Math.abs(rawDistance) > swipeThreshold) {
      setSwipeDirection(rawDistance > 0 ? "left" : "right");
    } else {
      setSwipeDirection(null);
    }

    console.log(
      "Touch move - Distance:",
      rawDistance,
      "Direction:",
      rawDistance > 0 ? "left" : "right"
    );
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!touchStart || !isActiveSwiping || isTransitioning) return;
    e.preventDefault();

    const currentMouse = e.clientX;
    setTouchEnd(currentMouse);

    const rawDistance = touchStart - currentMouse;
    const clampedDistance = Math.max(
      -maxSwipeDistance,
      Math.min(maxSwipeDistance, rawDistance)
    );
    setCurrentSwipeDistance(clampedDistance);

    if (Math.abs(rawDistance) > swipeThreshold) {
      setSwipeDirection(rawDistance > 0 ? "left" : "right");
    } else {
      setSwipeDirection(null);
    }
  };

  const onTouchEnd = () => {
    console.log("Touch end - Start:", touchStart, "End:", touchEnd);

    setShowSwipeHint(false);
    setIsActiveSwiping(false);

    if (!touchStart || !touchEnd || isTransitioning) {
      console.log("Touch end - Early return");
      // Reset states
      setCurrentSwipeDistance(0);
      setSwipeDirection(null);
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    console.log(
      "Touch end - Distance:",
      distance,
      "Min distance:",
      minSwipeDistance
    );

    if (isLeftSwipe) {
      console.log("Triggering handleNext()");
      handleNext();
    } else if (isRightSwipe) {
      console.log("Triggering handlePrev()");
      handlePrev();
    } else {
      console.log("Swipe distance too small");
    }

    // Reset with smooth animation
    setTimeout(() => {
      setCurrentSwipeDistance(0);
      setSwipeDirection(null);
    }, 100);

    setTouchStart(null);
    setTouchEnd(null);
  };

  const onMouseUp = () => {
    console.log("Mouse up - Start:", touchStart, "End:", touchEnd);

    setShowSwipeHint(false);
    setIsActiveSwiping(false);

    if (!touchStart || !touchEnd || isTransitioning) {
      setCurrentSwipeDistance(0);
      setSwipeDirection(null);
      setTouchStart(null);
      setTouchEnd(null);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    setTimeout(() => {
      setCurrentSwipeDistance(0);
      setSwipeDirection(null);
    }, 100);

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    setDirection("right");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_DATA.length);
    }, 250);

    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setDirection("left");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + HERO_DATA.length) % HERO_DATA.length
      );
    }, 250);

    setTimeout(() => {
      setIsTransitioning(false);
      setDirection(null);
    }, 500);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Flower2Icon":
        return Flower2Icon;
      case "ShoppingBagIcon":
        return ShoppingBagIcon;
      default:
        return Flower2Icon;
    }
  };

  const LeftIconComponent = getIconComponent(currentData.tagLeft);
  const RightIconComponent = getIconComponent(currentData.tagRight);

  // Calculate swipe progress for smooth animations
  const swipeProgress = Math.abs(currentSwipeDistance) / maxSwipeDistance;
  const swipeRotation = (currentSwipeDistance / maxSwipeDistance) * 15; // Max 15 degrees
  const swipeScale = 1 - Math.abs(swipeProgress) * 0.05; // Slight scale effect
  const swipeOpacity = 1 - Math.abs(swipeProgress) * 0.3; // Slight fade effect

  return (
    <section
      ref={heroRef}
      className="relative min-h-[120vh] bg-gradient-to-br overflow-hidden pt-12 touch-pan-y select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      style={{ touchAction: "pan-y" }}
    >
      {/* Enhanced Swipe Direction Indicator */}
      {isActiveSwiping && (
        <div className="absolute inset-0 z-[90] flex items-center justify-center pointer-events-none">
          <div
            className="bg-white/90 backdrop-blur-md rounded-full p-6 shadow-2xl transform transition-all duration-100 ease-out"
            style={{
              transform: `translateX(${-currentSwipeDistance * 0.5}px) rotate(${
                swipeRotation * 2
              }deg) scale(${1 + swipeProgress * 0.3})`,
              opacity: 0.7 + swipeProgress * 0.3,
            }}
          >
            {swipeDirection === "left" ? (
              <ArrowRightIcon
                className="w-10 h-10 text-primary transition-transform duration-100"
                style={{ transform: `rotate(${swipeProgress * 360}deg)` }}
              />
            ) : swipeDirection === "right" ? (
              <ArrowLeftIcon
                className="w-10 h-10 text-primary transition-transform duration-100"
                style={{ transform: `rotate(${-swipeProgress * 360}deg)` }}
              />
            ) : (
              <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
            )}
          </div>

          {/* Swipe Progress Bar */}
          {swipeDirection && (
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2">
              <div className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg">
                <div className="w-32 h-2 bg-primary/20 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-100 ease-out"
                    style={{ width: `${swipeProgress * 100}%` }}
                  />
                </div>
                <div className="text-center mt-2">
                  <span className="text-primary font-medium text-xs">
                    {Math.round(swipeProgress * 100)}%{" "}
                    {swipeProgress > 0.75 ? "- Release!" : ""}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Enhanced Swipe Instruction */}
      {!isActiveSwiping && !isTransitioning && (
        <div className="absolute bottom-[290px] left-1/2 transform -translate-x-1/2 z-[80]">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl px-6 py-4 shadow-xl animate-pulse hover:animate-none transition-all duration-300 hover:scale-105 border border-primary/20">
            <div className="flex flex-col items-center gap-2">
              {/* Main swipe instruction */}
              <span className="text-primary font-bold text-base flex items-center gap-3">
                <ArrowLeftIcon
                  className="w-6 h-6 animate-bounce text-primary"
                  style={{ animationDelay: "0ms" }}
                />
                <span className="relative">
                  Swipe Left & Right to Navigate
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                </span>
                <ArrowRightIcon
                  className="w-6 h-6 animate-bounce text-primary"
                  style={{ animationDelay: "500ms" }}
                />
              </span>

              {/* Secondary instruction */}
              <span className="text-gray-600 font-medium text-xs">
                Use mouse drag or touch gestures • {HERO_DATA.length}{" "}
                collections available
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="absolute top-0 right-1/2 translate-x-1/2 w-[32rem] rounded-b-[180px] bg-bg-secondary h-[40rem]"></div>

      {/* Title with slide animation */}
      <div className="absolute z-50 top-12 w-full">
        <div className="flex justify-center items-center flex-col gap-2 overflow-hidden">
          <h1
            className={`font-[800] text-[4rem] transition-all duration-600 ${
              isTransitioning
                ? direction === "left"
                  ? "transform translate-x-8 opacity-0 blur-sm scale-98"
                  : "transform -translate-x-8 opacity-0 blur-sm scale-98"
                : "transform translate-x-0 opacity-100 blur-0 scale-100"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDelay: isTransitioning ? "0ms" : "100ms",
              transform: isActiveSwiping
                ? `translateX(${-currentSwipeDistance * 0.1}px) rotate(${
                    swipeRotation * 0.2
                  }deg) scale(${1 - swipeProgress * 0.02})`
                : undefined,
            }}
            key={`title-${currentIndex}`}
          >
            {currentData.name}
          </h1>
        </div>
      </div>

      <div className="absolute z-[51] top-[12rem] w-full -translate-y-32">
        <div className="flex relative w-full justify-around items-center gap-2">
          {/* Left Description with slide animation */}
          <div
            className={`absolute top-[8rem] left-[10rem] w-[20rem] transition-all duration-550 ${
              isTransitioning
                ? direction === "left"
                  ? "transform translate-x-6 opacity-0 blur-sm"
                  : "transform -translate-x-6 opacity-0 blur-sm"
                : "transform translate-x-0 opacity-100 blur-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transitionDelay: isTransitioning ? "50ms" : "150ms",
            }}
            key={`desc-left-${currentIndex}`}
          >
            {currentData.descriptionLeft}
          </div>

          {/* Right Description with slide animation */}
          <div
            className={`absolute top-[10rem] right-[10rem] w-[20rem] transition-all duration-550 ${
              isTransitioning
                ? direction === "left"
                  ? "transform -translate-x-6 opacity-0 blur-sm"
                  : "transform translate-x-6 opacity-0 blur-sm"
                : "transform translate-x-0 opacity-100 blur-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              transitionDelay: isTransitioning ? "75ms" : "175ms",
            }}
            key={`desc-right-${currentIndex}`}
          >
            {currentData.descriptionRight}
          </div>

          {/* Left Feature Card with enhanced animations */}
          <div
            className={`absolute bottom-[4rem] p-4 rounded-lg left-[10rem] w-[24rem] border-solid border-2 border-primary bg-bg-primary animate-float-slow hover:shadow-2xl hover:scale-105 transition-all duration-650 ${
              isTransitioning
                ? direction === "left"
                  ? "transform translate-x-12 opacity-0 scale-90 rotate-2"
                  : "transform -translate-x-12 opacity-0 scale-90 -rotate-2"
                : "transform translate-x-0 opacity-100 scale-100 rotate-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: isTransitioning ? "100ms" : "200ms",
              transform: isActiveSwiping
                ? `translateX(${currentSwipeDistance * 0.2}px) rotate(${
                    -swipeRotation * 0.5
                  }deg) scale(${swipeScale})`
                : undefined,
            }}
            key={`card-left-${currentIndex}`}
          >
            <LeftIconComponent className="text-primary scale-125 mb-2" />
            <p>{currentData.descriptionLeft}</p>
          </div>

          {/* Right Feature Card with enhanced animations */}
          <div
            className={`absolute bottom-[12rem] p-4 rounded-lg right-[10rem] w-[24rem] border-solid border-2 border-primary bg-bg-primary animate-float-delayed hover:shadow-2xl hover:scale-105 transition-all duration-650 ${
              isTransitioning
                ? direction === "left"
                  ? "transform -translate-x-12 opacity-0 scale-90 -rotate-2"
                  : "transform translate-x-12 opacity-0 scale-90 rotate-2"
                : "transform translate-x-0 opacity-100 scale-100 rotate-0"
            }`}
            style={{
              transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
              transitionDelay: isTransitioning ? "125ms" : "225ms",
              transform: isActiveSwiping
                ? `translateX(${currentSwipeDistance * 0.15}px) rotate(${
                    swipeRotation * 0.3
                  }deg) scale(${swipeScale})`
                : undefined,
            }}
            key={`card-right-${currentIndex}`}
          >
            <RightIconComponent className="text-primary scale-125 mb-2" />
            <p>{currentData.descriptionRight}</p>
          </div>

          {/* Enhanced CSS Animations */}
          <style jsx>{`
            @keyframes float-slow {
              0%,
              100% {
                transform: translateY(0px) scale(1);
              }
              25% {
                transform: translateY(-3px) scale(1.01);
              }
              50% {
                transform: translateY(-8px) scale(1.02);
              }
              75% {
                transform: translateY(-3px) scale(1.01);
              }
            }

            @keyframes float-delayed {
              0%,
              100% {
                transform: translateY(0px) scale(1);
              }
              33% {
                transform: translateY(-2px) scale(1.01);
              }
              66% {
                transform: translateY(-6px) scale(1.015);
              }
            }

            @keyframes gentle-pulse {
              0%,
              100% {
                transform: scale(1);
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              }
              50% {
                transform: scale(1.02);
                box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
              }
            }

            @keyframes spring-in {
              0% {
                transform: scale(0.8) rotate(-10deg);
                opacity: 0;
              }
              50% {
                transform: scale(1.05) rotate(2deg);
                opacity: 0.8;
              }
              100% {
                transform: scale(1) rotate(0deg);
                opacity: 1;
              }
            }

            .animate-float-slow {
              animation: float-slow 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }

            .animate-float-delayed {
              animation: float-delayed 4.5s cubic-bezier(0.4, 0, 0.6, 1)
                infinite 1.2s;
            }

            .btn-secondary {
              animation: gentle-pulse 3s ease-in-out infinite;
            }

            @keyframes spin-reverse {
              from {
                transform: rotate(360deg);
              }
              to {
                transform: rotate(0deg);
              }
            }

            .animate-spin-reverse {
              animation: spin-reverse 1s linear infinite;
            }

            .border-3 {
              border-width: 3px;
            }
          `}</style>

          {/* Navigation Buttons with enhanced interactions */}
          <button
            className="btn-nav hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-white z-[60]"
            onClick={handlePrev}
            disabled={isTransitioning}
          >
            <ArrowLeftIcon />
          </button>

          {/* Main Image with smooth transitions */}
          <div
            className="overflow-hidden  w-[50vw] h-[90vh] rounded-2xl relative transition-transform duration-100 ease-out"
            style={{
              transform: isActiveSwiping
                ? `translateX(${
                    -currentSwipeDistance * 0.3
                  }px) rotate(${swipeRotation}deg) scale(${swipeScale})`
                : "translateX(0px) rotate(0deg) scale(1)",
              opacity: isActiveSwiping ? swipeOpacity : 1,
            }}
          >
            <Image
              src={currentData.img}
              alt={currentData.name}
              fill
              className={`block transition-all duration-400 ${
                isTransitioning
                  ? direction === "left"
                    ? "transform translate-x-4 opacity-0 scale-98"
                    : "transform -translate-x-4 opacity-0 scale-98"
                  : "transform translate-x-0 opacity-100 scale-100"
              }`}
              style={{
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                transitionDelay: isTransitioning ? "0ms" : "50ms",
              }}
              key={`image-${currentIndex}`}
            />

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {HERO_DATA.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-white shadow-lg scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => {
                    if (!isTransitioning && index !== currentIndex) {
                      setDirection(index > currentIndex ? "right" : "left");
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setCurrentIndex(index);
                      }, 250);
                      setTimeout(() => {
                        setIsTransitioning(false);
                        setDirection(null);
                      }, 500);
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <button
            className="btn-nav hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-white z-[60]"
            onClick={handleNext}
            disabled={isTransitioning}
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      {/* Shop Now Button */}
      <button className="btn-secondary pt-4 pb-4 justify-center items-center flex hover:scale-[150%] absolute top-[40%] right-[46%] left-[46%] z-[900000] pl-10 scale-125 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-135 hover:-translate-y-1 active:scale-125">
        SHOP NOW
      </button>
    </section>
  );
}
