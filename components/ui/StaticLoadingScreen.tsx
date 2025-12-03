// Server Component - no need for "use client"
// ;/
export default function StaticLoadingScreen() {
  return (
    <div className="fixed static-loading inset-0 z-[1000000]  flex flex-col">
      {/* Elegant Progress Bar */}
      <div className="w-full h-1 bg-white overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary to-primary animate-loading-bar shadow-sm" />
      </div>
    </div>
  );
}
