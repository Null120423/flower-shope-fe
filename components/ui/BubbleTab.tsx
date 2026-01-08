"use client";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export interface TabItem<T extends string = string> {
  id: T;
  label: string;
  icon: LucideIcon;
}

interface BubbleTabProps<T extends string> {
  tabs: TabItem<T>[];
  activeTab: T;
  onTabChange: (tabId: T) => void;
  className?: string;
}

export default function BubbleTab<T extends string>({
  tabs,
  activeTab,
  onTabChange,
  className = "",
}: BubbleTabProps<T>) {
  const [bubbleStyle, setBubbleStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
    const activeTabElement = tabsRef.current[activeIndex];
    if (activeTabElement) {
      setBubbleStyle({
        left: activeTabElement.offsetLeft,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div
      className={`bg-white rounded-3xl shadow-lg p-2 overflow-x-auto ${className}`}
    >
      <div className="relative flex gap-2 min-w-max">
        {/* Animated Bubble Background with Enhanced Effects */}
        <div
          className="absolute rounded-2xl transition-all duration-500 ease-out"
          style={{
            left: `${bubbleStyle.left}px`,
            width: `${bubbleStyle.width}px`,
            height: "48px",
            top: "0px",
            background:
              "linear-gradient(135deg, #FB7185 0%, #F472B6 50%, #FB7185 100%)",
            backgroundSize: "200% 200%",
            animation: "gradientShift 3s ease infinite, bubblePulse 0.5s ease-out",
            boxShadow:
              "0 4px 20px rgba(251, 113, 133, 0.4), 0 0 40px rgba(244, 114, 182, 0.3)",
          }}
        >
          {/* Glow effect layers */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-600 to-pink-500 opacity-50 blur-md" />
        </div>

        {/* Tabs */}
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              onClick={() => onTabChange(tab.id)}
              className={`relative z-10 flex items-center gap-2 px-6 py-3 rounded-2xl transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white transform scale-105"
                  : "text-gray-600 hover:bg-pink-50 hover:scale-102"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span
                className={
                  activeTab === tab.id
                    ? "font-semibold text-white"
                    : "font-medium"
                }
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
