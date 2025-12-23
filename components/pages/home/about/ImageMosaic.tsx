import Image from "next/image";

type MosaicImage = {
  src: string;
  alt: string;
};

export default function ImageMosaic({ images }: { images: MosaicImage[] }) {
  // Expect 3 images for the layout; gracefully handle fewer/more
  const [a, b, c] = images;
  return (
    <div className="relative grid grid-cols-2 gap-6 items-center">
      {/* Left column: two stacked cards */}
      <div className="flex flex-col gap-6">
        {a && (
          <div className="relative w-full h-[180px] sm:h-[220px] rounded-2xl overflow-hidden shadow-sm">
            <Image src={a.src} alt={a.alt} fill className="object-cover" />
          </div>
        )}
        {b && (
          <div className="relative w-full h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-sm">
            <Image src={b.src} alt={b.alt} fill className="object-cover" />
          </div>
        )}
      </div>

      {/* Right column: single large card */}
      <div className="relative">
        {c && (
          <div className="relative w-full h-[420px] sm:h-[520px] rounded-2xl overflow-hidden shadow-sm">
            <Image src={c.src} alt={c.alt} fill className="object-cover" />
          </div>
        )}
        {/* Soft backdrop plate behind the big image */}
        <div className="absolute -z-10 -left-8 -top-8 w-[85%] h-[85%] rounded-3xl bg-bg-secondary" />
      </div>
    </div>
  );
}
