interface SimplifiedPageTransitionProps {
  children: React.ReactNode;
}

// Chỉ component này cần "use client"
export default function SimplifiedPageTransition({
  children,
}: SimplifiedPageTransitionProps) {
  return <div className="animate-page-enter">{children}</div>;
}
