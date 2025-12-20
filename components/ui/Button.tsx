const ButtonPrimary = ({
  children,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-rose-500 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
};

export { ButtonPrimary };
