type Props = {
  label: string;
  className?: string;
};

export default function SectionLabel({ label, className }: Props) {
  return (
    <span
      className={`text-xs tracking-[0.25em] font-semibold text-primary uppercase ${
        className ?? ""
      }`}
    >
      {label}
    </span>
  );
}
