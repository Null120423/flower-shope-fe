"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface PageTransitionContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const PageTransitionContext = createContext<
  PageTransitionContextType | undefined
>(undefined);

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error(
      "usePageTransition must be used within PageTransitionProvider"
    );
  }
  return context;
};

interface PageTransitionProviderProps {
  children: ReactNode;
}

export default function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PageTransitionContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </PageTransitionContext.Provider>
  );
}
