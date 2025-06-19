// components/HeroSection.tsx
interface HeroSectionProps {
  tag: string;
  easyText: string;
  easyText2: string;
  video: string;
  heroText: string;
}

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/heroSection/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center bg-black/60 px-4">
        <span className="font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] leading-snug">
          Driven by performance
        </span>
        <h2 className="font-light leading-tight pb-2 text-3xl md:text-5xl">
          <span className="font-semibold">
            Soft trims and
            <span className="text-[#00BFFF]"> NVH solutions</span>
          </span>
          <br className="hidden md:block" />
          for seamless rides
        </h2>
      </div>
    </section>
  );
}

