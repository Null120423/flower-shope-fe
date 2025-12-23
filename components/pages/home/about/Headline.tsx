type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function Headline({ title, subtitle, className }: Props) {
  return (
    <div className={className ?? ""}>
      {subtitle && (
        <h3 className="text-sm text-primary/70 font-semibold mb-2">
          {subtitle}
        </h3>
      )}
      <h2 className="text-[2rem] sm:text-[2.6rem] md:text-[3rem] leading-tight font-extrabold">
        {title}
      </h2>
    </div>
  );
}
