import Image from "next/image";
import Link from "next/link";

/*
 * Export slides from Figma node 393:10060 → content children
 * and place them in /public/universal-mill/
 *
 * Figma node → filename:
 *   393:10070  →  slide-01.png  (poster 1 — Universal Oil & Flour Mill, spice photos, Malayalam text)
 *   393:10287  →  slide-02.png  (poster 2 — alternate layout, oil bottles, Malayalam text)
 */

const SLIDES = [
    {
        src: "/universal-mill/slide-01.png",
        alt: "Universal Oil & Flour Mill — Poster design 1",
        aspect: "512/729",
    }
];

export default function UniversalMillPage() {
    return (
        <div className="min-h-screen">
            <header className="mx-auto flex max-w-[512px] items-center justify-between px-0 py-4">
                <Link href="/" className="font-sans text-xl font-semibold text-[#737373] transition-colors hover:text-[#171717]">
                    J.
                </Link>
            </header>

            <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-[32px] pt-10 pb-32">
                <div className="flex w-full flex-col gap-6">
                    <section className="flex flex-col gap-2">
                        <h1 className="font-sans text-[32px] font-medium leading-[42px] text-black">
                            Ad for Universal Oil and Flour Mill
                        </h1>
                        <p className="font-sans text-base leading-[24px] text-black">
                            Magazine advertisement for Universal Oil and Flour Mill, a local business in my locality.
                        </p>
                    </section>

                    <section className="flex items-center gap-6">
                        <span className="font-mono text-base uppercase text-[#737373]">Softwares used:</span>
                        <div className="flex items-center gap-6">
                            <div className="relative h-[22px] w-[15px]">
                                <Image src="/icons/figma-logo.png" alt="Figma" fill className="object-contain" unoptimized />
                            </div>
                        </div>
                    </section>
                </div>

                <div className="flex w-full flex-col gap-[17px]">
                    {SLIDES.map((slide, i) => (
                        <div
                            key={i}
                            className="relative w-full overflow-hidden rounded-[4px]"
                            style={{ aspectRatio: slide.aspect }}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </main>

            <div className="h-px w-full bg-[#d6d6d6]" aria-hidden />
        </div>
    );
}
