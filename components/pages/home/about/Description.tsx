import TransitionLink from "@/components/ui/TransitionLink";

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
        <TransitionLink
          href={href}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          {linkLabel ?? "Learn more"}
          <span aria-hidden>→</span>
        </TransitionLink>
      )}
    </div>
  );
}
