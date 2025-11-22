import { ReactNode } from "react";
import PageTransitionProvider from "./PageTransitionProvider";
interface PageLayoutProps {
  children: ReactNode;
}

// Server Component - không cần "use client"
export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen">
      <PageTransitionProvider>
        <div className="animate-page-enter">{children}</div>
      </PageTransitionProvider>
    </div>
  );
}
