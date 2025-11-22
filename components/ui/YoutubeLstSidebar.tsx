import { Clock, ExternalLink, Play, X, Youtube } from "lucide-react";
import { useState } from "react";
import { YoutubeLink } from "./SideBarInfo";
import TransitionLink from "./TransitionLink";

// Helper to extract YouTube video ID from URL
function getYouTubeVideoId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Loading skeleton component
function VideoSkeleton() {
  return (
    <div className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 bg-white">
      <div className="w-32 h-18 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse" />
        <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg w-2/3 animate-pulse" />
      </div>
    </div>
  );
}

// Enhanced video card component
function VideoCard({
  video,
  index,
  onClick,
}: {
  video: YoutubeLink;
  index: number;
  onClick: () => void;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  //
  const videoId = getYouTubeVideoId(video.youtubeVideoUrl);

  return (
    <div
      className="group relative flex items-center gap-4 p-2 rounded-2xl border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-red-50 hover:to-pink-50 hover:border-red-200 hover:shadow-xl hover:shadow-red-100/25 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      style={{
        animationDelay: `${index * 100}ms`,
        animation: "slideInUp 0.6s ease-out forwards",
      }}
      tabIndex={0}
      role="button"
      aria-label={`Watch video: ${video.title}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
        }
      }}
    >
      {/* Video Thumbnail */}
      <div className="relative w-44 h-32 rounded-xl overflow-hidden flex-shrink-0 shadow-md group-hover:shadow-lg transition-shadow duration-300">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse" />
        )}
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={video.title}
          className={`w-full h-full object-cover transition-all duration-300 ${
            imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-110`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />

        {/* Play button overlay */}
        <div
          className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110">
            <Play className="w-4 h-4 text-white ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Video Info */}
      <div className="flex-1 min-w-0 space-y-1">
        <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-5 group-hover:text-red-700 transition-colors duration-300">
          {video.title}
        </h4>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <h5
            className="px-4 py-2 line-clamp-1 bg-gray-100 rounded-full font-medium group-hover:bg-red-100 group-hover:text-red-600 transition-all duration-300"
            style={{ lineHeight: "2.2rem" }}
          >
            {video.slug}
          </h5>
        </div>
      </div>

      {/* Action Button */}
      <button
        className="opacity-0 group-hover:opacity-100 ml-2 p-2 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        onClick={(e) => {
          e.stopPropagation();
          window.open(`https://www.youtube.com/watch?v=${videoId}`, "_blank");
        }}
        aria-label={`Open ${video.title} in new tab`}
      >
        <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  );
}

function YoutubeLstSidebar({
  youtubeLinks,
}: {
  youtubeLinks?: YoutubeLink[];
}): JSX.Element {
  const inputVideos = [
    {
      title: "Bán Căn Hộ Sân Vườn 3PN Lumiere Midtown giá chỉ 15,869 tỷ all in",
      link: "https://www.youtube.com/watch?v=K5Ivg2LgzOU",
      propertySlug: "luxury-downtown-apt",
    },
    {
      title: "Bán Căn Hộ Sân Vườn 3PN Lumiere Midtown giá chỉ 15,869 tỷ all in",
      link: "https://www.youtube.com/watch?v=K5Ivg2LgzOU",
      propertySlug: "family-garden-home",
    },
    {
      title: "Bán Căn Hộ Sân Vườn 3PN Lumiere Midtown giá chỉ 15,869 tỷ all in",
      link: "https://www.youtube.com/watch?v=K5Ivg2LgzOU",
      propertySlug: "ocean-view-villa",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [lstYoutube, setLstYoutube] = useState<YoutubeLink[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<YoutubeLink | null>(null);

  return (
    <div className="w-full mt-32 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
            <Youtube className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">Video dự án</h2>
            <p className="text-sm text-gray-500">
              Khám phá các dự án nổi bật của chúng tôi
            </p>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-red-200 via-pink-200 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="space-y-4">
        <>
          {youtubeLinks &&
            youtubeLinks.map((video, index) => (
              <VideoCard
                key={index}
                video={video}
                index={index}
                onClick={() => {
                  setSelectedVideo(video);
                  setDialogOpen(true);
                }}
              />
            ))}
        </>
      </div>
      <VideoDialog
        video={selectedVideo}
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

// Video Dialog Component
function VideoDialog({
  video,
  isOpen,
  onClose,
}: {
  video: YoutubeLink | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  const videoId = getYouTubeVideoId(video?.youtubeVideoUrl || "");
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 text-white" fill="currentColor" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                {video.title}
              </h3>
              <p className="text-sm text-gray-500">{video.slug}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${videoId}`,
                  "_blank"
                )
              }
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
              title="Open in YouTube"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-xl transition-all duration-200"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Video Details & Action */}
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
            </div>
            <div className="flex items-center gap-1">
              <Youtube className="w-4 h-4" />
              <span>YouTube</span>
            </div>
          </div>
          <TransitionLink href={"/project/" + video.slug} className="mt-4">
            <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-bold rounded-xl shadow-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-200">
              Xem dự án
            </button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}

export default YoutubeLstSidebar;
