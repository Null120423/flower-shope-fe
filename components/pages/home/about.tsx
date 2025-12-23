"use client";

import Description from "./about/Description";
import Headline from "./about/Headline";
import ImageMosaic from "./about/ImageMosaic";
import SectionLabel from "./about/SectionLabel";

export default function AboutSection() {
  const images = [
    {
      src: "https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
      alt: "Hand-picked bouquet with seasonal flowers",
    },
    {
      src: "https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2",
      alt: "Florist arranging stems on a wooden table",
    },
    {
      src: "https://images.pexels.com/photos/931164/pexels-photo-931164.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1000&dpr=2",
      alt: "Sunlit flower shop interior with vases",
    },
  ];

  return (
    <section className="container mx-auto px-6 md:px-8 lg:px-12 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <div className="max-w-xl">
          <SectionLabel label="Our Craft" />
          <Headline
            className="mt-4"
            title="Fresh, sustainable florals for every occasion"
            subtitle="About Bloom & Co."
          />
          <Description
            className="mt-6"
            text="Because Bloom & Co. takes floral design seriously, we source responsibly grown flowers, compost our trimmings, and use reusable vessels. Each arrangement is crafted with care so you get beauty that’s kind to the planet."
            href="/about"
            linkLabel="More info"
          />
        </div>

        {/* Right: images */}
        <ImageMosaic images={images} />
      </div>
    </section>
  );
}
