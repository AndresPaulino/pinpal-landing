import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <div className="inline-flex w-fit">
            <span className="bg-gold text-foreground px-4 py-2 rounded-full text-sm font-semibold">
              MVP Coming Soon
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            League Management<br />Made Simple
          </h1>

          {/* Subheadline */}
          <p className="text-gray text-lg lg:text-xl leading-relaxed max-w-lg">
            The bowling league app built for secretaries who want to spend less time on paperwork and more time enjoying the game.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <a
              href="#signup"
              className="bg-burgundy text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-burgundy/90 transition-colors text-center"
            >
              Get Early Access
            </a>
            <a
              href="#features"
              className="border-2 border-burgundy text-burgundy px-8 py-4 rounded-lg font-semibold text-base hover:bg-burgundy/5 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden bg-cream shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&q=80"
              alt="Bowling alley with pins"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
