import { ReactNode } from "react";
import TransitionLink from "./TransitionLink";

interface ServerLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

// Server Component - không cần "use client"
export default function ServerLink({
  href,
  children,
  className,
}: ServerLinkProps) {
  // Nếu là anchor link, dùng thẻ a
  if (href.startsWith("#")) {
    return (
      <TransitionLink href={href} className={className}>
        {children}
      </TransitionLink>
    );
  }

  // Nếu là external link
  if (
    href.startsWith("http") ||
    href.startsWith("mailto") ||
    href.startsWith("tel")
  ) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  // Internal link với Next.js Link
  return (
    <TransitionLink href={href} className={className}>
      {children}
    </TransitionLink>
  );
}
