"use client";

import React from "react";

function mergeClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type AuthShellProps = {
  hero: React.ReactNode;
  formCard: React.ReactNode;
  gradientClassName?: string;
};

function PetalBackdrop() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-10 left-6 text-rose-200 opacity-40 text-6xl animate-pulse">
        🌷
      </div>
      <div className="absolute top-24 right-10 text-pink-200 opacity-40 text-7xl animate-pulse delay-500">
        🌸
      </div>
      <div className="absolute bottom-16 left-12 text-rose-200 opacity-40 text-6xl animate-pulse delay-700">
        🌹
      </div>
      <div className="absolute bottom-10 right-14 text-pink-200 opacity-40 text-5xl animate-pulse delay-1000">
        💐
      </div>
    </div>
  );
}

export function AuthShell({
  hero,
  formCard,
  gradientClassName,
}: AuthShellProps) {
  return (
    <div className="w-full  flex justify-center items-center gap-4">
      <div
        className={mergeClasses(
          "min-h-screen flex  max-w-7xl items-center justify-center gap-4 px-4 py-12 relative overflow-hidden",
          gradientClassName ||
            "bg-gradient-to-br from-pink-50 via-rose-50 to-red-50"
        )}
      >
        <PetalBackdrop />
        <div className="flex-wrap w-full flex justify-center gap-10 items-center relative z-10">
          <div
            className="space-y-6 w-[40%]"
            style={{
              width: "40%",
            }}
          >
            {hero}
          </div>
          <div className=" w-[45%] ml-4 rounded-3xl shadow-2xl p-8 md:p-10 border border-rose-100 backdrop-blur-lg">
            {formCard}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthShell;
