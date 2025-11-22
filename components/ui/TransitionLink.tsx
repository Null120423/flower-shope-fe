"use client";

import usePageTransition from "@/hooks/usePageTransition";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const { navigateWithTransition } = usePageTransition();
  const router = useRouter();

  const handleClick = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (onClick) {
      onClick();
    }

    // Check if it's an external link or anchor
    const isSameOrigin =
      window.location.origin.replace(/\/$/, "") ===
      window.location.origin + href.replace(/\/$/, "");

    if (
      href.startsWith("http") ||
      href.startsWith("mailto") ||
      href.startsWith("tel") ||
      href.startsWith("#") ||
      href.startsWith("/#") ||
      isSameOrigin
    ) {
      if (!isSameOrigin) window.location.href = href;
      if (isSameOrigin) {
        window.location.href = "#";
      }
      return;
    }
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    router.push(href);
    await sleep(1000);

    body?.classList.remove("page-transition");

    navigateWithTransition(href);
  };

  // For anchor links, use regular href
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
