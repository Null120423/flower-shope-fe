import {
  Download,
  ExternalLink,
  Eye,
  Maximize2,
  Minimize2,
  Move,
  RotateCw,
  X,
  ZoomIn,
  ZoomOut,
} from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface ImgWithPreviewProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  showActions?: boolean;
  allowDownload?: boolean;
  allowExternalLink?: boolean;
  onImageClick?: () => void;
  placeholder?: string;
  errorFallback?: string;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  quality?: number;
}

const ImgWithPreview: React.FC<ImgWithPreviewProps> = ({
  src,
  alt = "Image",
  className = "",
  width = 400,
  height = 300,
  showActions = true,
  allowDownload = true,
  allowExternalLink = true,
  onImageClick,
  placeholder = "https://via.placeholder.com/400x300?text=No+Image",
  errorFallback = "https://via.placeholder.com/400x300?text=Error+Loading+Image",
  fill = false,
  sizes,
  priority = false,
  quality = 75,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const imageUrl = imageError ? errorFallback : src || placeholder;

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
    onImageClick?.();
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
    setIsFullscreen(false);
    // Restore body scroll
    document.body.style.overflow = "unset";
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "+":
        case "=":
          e.preventDefault();
          handleZoomIn();
          break;
        case "-":
          e.preventDefault();
          handleZoomOut();
          break;
        case "r":
        case "R":
          e.preventDefault();
          handleRotate();
          break;
        case "0":
          e.preventDefault();
          resetView();
          break;
        case "f":
        case "F":
          e.preventDefault();
          toggleFullscreen();
          break;
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isModalOpen, closeModal]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(prev + 0.25, 5));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(prev - 0.25, 0.25));
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  const handleDownload = async () => {
    try {
      // For Next.js, we need to handle CORS properly
      const response = await fetch(src, {
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Extract filename from URL or use alt text
      const filename = src.split("/").pop()?.split("?")[0] || alt || "image";
      link.download = filename;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: open in new tab
      window.open(src, "_blank", "noopener,noreferrer");
    }
  };

  const handleExternalLink = () => {
    window.open(src, "_blank", "noopener,noreferrer");
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoom(1);
    setRotation(0);
    setPosition({ x: 0, y: 0 });
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      {/* Main Image */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
        className={`relative group overflow-hidden rounded-lg ${className}`}
      >
        {/* Loading spinner */}
        {imageLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-600"></div>
          </div>
        )}

        {fill ? (
          <Image
            src={imageUrl}
            alt={alt}
            fill
            sizes={
              sizes ||
              "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            quality={quality}
            priority={priority}
            onError={handleImageError}
            onLoad={handleImageLoad}
            className="object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
            onClick={openModal}
          />
        ) : (
          <Image
            src={imageUrl}
            alt={alt}
            width={width}
            height={height}
            quality={quality}
            priority={priority}
            onError={handleImageError}
            onLoad={handleImageLoad}
            className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-105 cursor-pointer"
            onClick={openModal}
          />
        )}

        {/* Action Overlay */}
        {showActions && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal();
                }}
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                title="Preview"
              >
                <Eye className="w-4 h-4" />
              </button>

              {allowDownload && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload();
                  }}
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  title="Download"
                >
                  <Download className="w-4 h-4" />
                </button>
              )}

              {allowExternalLink && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleExternalLink();
                  }}
                  className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  title="Open in new tab"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed top-0 right-0 bottom-0 left-0 z-[100000] bg-black transition-colors duration-300 ${
            isFullscreen ? "bg-opacity-100" : "bg-opacity-80"
          }`}
          onClick={closeModal}
        >
          <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center p-4">
            {/* Controls */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
              <div
                className="flex gap-2"
                role="toolbar"
                aria-label="Image controls"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomOut();
                  }}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title="Zoom Out (-)"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleZoomIn();
                  }}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title="Zoom In (+)"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRotate();
                  }}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title="Rotate (R)"
                  aria-label="Rotate image"
                >
                  <RotateCw className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetView();
                  }}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title="Reset View (0)"
                  aria-label="Reset view"
                >
                  <Move className="w-5 h-5" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title={
                    isFullscreen ? "Exit Fullscreen (F)" : "Fullscreen (F)"
                  }
                  aria-label={
                    isFullscreen ? "Exit fullscreen" : "Enter fullscreen"
                  }
                >
                  {isFullscreen ? (
                    <Minimize2 className="w-5 h-5" />
                  ) : (
                    <Maximize2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex gap-2">
                <span
                  className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm"
                  aria-label={`Zoom level: ${Math.round(zoom * 100)} percent`}
                >
                  {Math.round(zoom * 100)}%
                </span>

                {allowDownload && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload();
                    }}
                    className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    title="Download"
                    aria-label="Download image"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                )}

                {allowExternalLink && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleExternalLink();
                    }}
                    className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    title="Open in new tab"
                    aria-label="Open image in new tab"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </button>
                )}

                <button
                  onClick={closeModal}
                  className="bg-white bg-opacity-20 text-white p-2 rounded-full hover:bg-opacity-30 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  title="Close (Esc)"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Image Container */}
            <div
              className="relative max-w-full max-h-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Use regular img for modal to support transformations */}
              <img
                src={imageUrl}
                alt={alt}
                className={`max-w-none transition-all duration-200 ${
                  zoom > 1 ? "cursor-move" : "cursor-zoom-in"
                }`}
                style={{
                  transform: `scale(${zoom}) rotate(${rotation}deg) translate(${
                    position.x / zoom
                  }px, ${position.y / zoom}px)`,
                  maxWidth: isFullscreen ? "none" : "90vw",
                  maxHeight: isFullscreen ? "none" : "90vh",
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onError={handleImageError}
                draggable={false}
              />
            </div>

            {/* Instructions */}
            {zoom > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
                Drag to pan • Scroll to zoom • Press Esc to close
              </div>
            )}

            {/* Keyboard shortcuts help */}
            {!zoom ||
              (zoom === 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm">
                  Use +/- to zoom • R to rotate • F for fullscreen • Esc to
                  close
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ImgWithPreview;
