"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = useCallback(
    (href: string, delay: number = 300) => {
      if (href === pathname) return;

      setIsTransitioning(true);

      setTimeout(() => {
        router.push(href);
      }, delay);
    },
    [router, pathname]
  );

  const navigateBack = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      router.back();
    }, 300);
  }, [router]);

  return {
    isTransitioning,
    navigateWithTransition,
    navigateBack,
    setIsTransitioning,
  };
};

export default usePageTransition;
