import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  linkLabel?: string;
  className?: string;
};

export default function Description({
  text,
  href,
  linkLabel,
  className,
}: Props) {
  return (
    <div className={className ?? ""}>
      <p className="text-gray-600 leading-relaxed mb-6">{text}</p>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          {linkLabel ?? "Learn more"}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
