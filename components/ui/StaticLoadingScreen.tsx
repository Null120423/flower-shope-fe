// Server Component - no need for "use client"
export default function StaticLoadingScreen() {
  return (
    <div className="fixed static-loading inset-0 z-[1000000] bg-gradient-to-br from-rose-50 via-white to-pink-50 flex flex-col">
      {/* Elegant Progress Bar */}
      <div className="w-full h-1 bg-rose-100">
        <div className="h-full bg-gradient-to-r from-rose-400 to-pink-500 animate-loading-bar shadow-sm" />
      </div>

      {/* Main Loading Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-rose-200/30 to-pink-200/30 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-20 right-16 w-40 h-40 bg-gradient-to-br from-pink-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse animate-delay-1000" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-xl animate-pulse animate-delay-500" />
        </div>

        <div className="text-center max-w-lg mx-auto relative z-10">
          {/* Sophisticated Logo with Flower Icon */}
          <div className="relative mb-8 sm:mb-12">
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-2xl animate-pulse relative overflow-hidden">
              {/* Flower SVG Icon */}
              <svg
                className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9C15 10.1 14.1 11 13 11S11 10.1 11 9V7.5L9 7.5V9C9 10.1 8.1 11 7 11S5 10.1 5 9V7L3 7V9C3 11.8 4.9 14.2 7.5 15.2V16C7.5 17.4 8.6 18.5 10 18.5H14C15.4 18.5 16.5 17.4 16.5 16V15.2C19.1 14.2 21 11.8 21 9ZM12 13.5C10.6 13.5 9.5 12.4 9.5 11S10.6 8.5 12 8.5S14.5 9.6 14.5 11S13.4 13.5 12 13.5Z" />
              </svg>

              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
            </div>

            {/* Floating Petals */}
            <div className="absolute -top-2 -left-3 w-4 h-4 bg-rose-300 rounded-full animate-float opacity-70" />
            <div className="absolute -top-1 -right-4 w-3 h-3 bg-pink-300 rounded-full animate-float opacity-60 animate-delay-700" />
            <div className="absolute -bottom-2 left-1/3 w-2 h-2 bg-rose-400 rounded-full animate-float opacity-50 animate-delay-1200" />
            <div className="absolute -bottom-1 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-40 animate-delay-300" />
          </div>

          {/* Elegant Branding */}
          <div className="space-y-4 sm:space-y-6 mb-8">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                Floral Wonderland
              </h1>
              <div className="w-24 h-0.5 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto animate-expand" />
            </div>

            <p className="text-lg sm:text-xl text-rose-600 font-medium animate-fade-in-delay">
              Your Beautiful Journey Awaits
            </p>

            <p className="text-sm sm:text-base text-gray-600 animate-fade-in-delay-2 px-4 leading-relaxed">
              Crafting moments of joy with nature's finest blooms
            </p>
          </div>

          {/* Sophisticated Loading Animation */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <div className="w-6 h-6 border-3 border-rose-200 border-t-rose-500 rounded-full animate-spin" />
              <div className="absolute inset-0 w-6 h-6 border-3 border-transparent border-r-pink-400 rounded-full animate-spin animate-reverse animate-delay-300" />
            </div>
            <span className="text-rose-600 font-medium animate-pulse">
              Preparing your experience...
            </span>
          </div>

          {/* Elegant Dots Animation */}
          <div className="flex justify-center space-x-3">
            <div className="w-2 h-2 bg-rose-400 rounded-full animate-bounce-elegant" />
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce-elegant animate-delay-200" />
            <div className="w-2 h-2 bg-rose-500 rounded-full animate-bounce-elegant animate-delay-400" />
          </div>
        </div>
      </div>

      {/* Elegant Bottom Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 sm:h-20 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".15"
            className="fill-rose-300 animate-wave"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".25"
            className="fill-rose-400 animate-wave animate-delay-2000"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-rose-500 animate-wave animate-delay-4000"
          />
        </svg>
      </div>

      {/* Floating Petals Background Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-rose-300/30 rounded-full animate-float-slow" />
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-pink-300/40 rounded-full animate-float-slow animate-delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-rose-200/30 rounded-full animate-float-slow animate-delay-2000" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-pink-400/30 rounded-full animate-float-slow animate-delay-3000" />
      </div>

      {/* Mobile optimization */}
      <div className="absolute top-0 left-0 w-full h-safe-area-inset-top bg-gradient-to-br from-rose-50 via-white to-pink-50 sm:hidden" />
    </div>
  );
}
