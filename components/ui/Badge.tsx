function Badge({
  children,
  number,
  isShowZero = false,
}: {
  children: React.ReactNode;
  number: number;
  isShowZero?: boolean;
}) {
  return (
    <div className="relative">
      {children}
      {(number > 0 || isShowZero) && (
        <span className="absolute -top-0 -right-0 inline-flex items-center justify-center px-1 h-4 w-4 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {number}
        </span>
      )}
    </div>
  );
}

export default Badge;
