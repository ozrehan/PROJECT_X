import Image from "next/image";

export default function HeroBanner() {
  return (
    <section className="max-w-7xl mx-auto mt-4 md:mt-6 px-2 md:px-4">
      <div className="relative h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] rounded-2xl md:rounded-3xl overflow-hidden">

        <Image
          src="/images/hero/hero-main.png"
          alt="Hero Banner"
          fill
          priority
          className="object-cover"
        />

      </div>
    </section>
  );
}
