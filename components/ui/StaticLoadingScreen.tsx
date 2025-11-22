// Server Component - không cần "use client"
export default function StaticLoadingScreen() {
  return (
    <div className="fixed static-loading inset-0 z-[1000000] bg-primary flex flex-col">
      {/* Progress Bar - sử dụng CSS animation */}
      <div className="w-full h-1 bg-secondary">
        <div className="h-full bg-gradient-to-r from-primary to-secondary animate-loading-bar" />
      </div>

      {/* Loading Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md mx-auto">
          {/* Static Logo - Responsive size */}
          <div className="relative mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto gradient rounded-xl sm:rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
              <svg
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-light"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </div>

            {/* Static Particles - Responsive positioning */}
            <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-ping opacity-75" />
            <div className="absolute -top-1 -right-2 sm:-top-1 sm:-right-3 w-2 h-2 sm:w-3 sm:h-3 bg-secondary rounded-full animate-ping opacity-50 animate-delay-500" />
            <div className="absolute -bottom-1 left-1/2 sm:-bottom-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-ping opacity-60 animate-delay-1000" />
          </div>

          {/* Loading Text - Responsive typography */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-light animate-fade-in">
              Đang chuyển trang...
            </h2>
            <p className="text-sm sm:text-base text-light animate-fade-in-delay px-4">
              Vui lòng chờ trong giây lát
            </p>

            {/* Loading Spinner với CSS - Responsive size */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
              <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-xs sm:text-sm text-light">Đang tải...</span>
            </div>
          </div>

          {/* Animated Dots - Responsive spacing */}
          <div className="flex justify-center space-x-1.5 sm:space-x-2 mt-6 sm:mt-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce animate-delay-100" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-bounce animate-delay-200" />
          </div>
        </div>
      </div>

      {/* Static Wave - Responsive height */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12 sm:h-16 md:h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-primary animate-wave"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-primary animate-wave animate-delay-2000"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-primary animate-wave animate-delay-4000"
          />
        </svg>
      </div>

      {/* Mobile optimization - Add safe area for notch devices */}
      <div className="absolute top-0 left-0 w-full h-safe-area-inset-top bg-primary sm:hidden" />
    </div>
  );
}
