import Image from "next/image";
import Link from "next/link";

/*
 * Export slides from Figma node 374:6824 → 501:4950 → 374:8091 children
 * and place them in /public/phoenix-cafe/
 *
 * Figma node → filename:
 *   374:8092  →  slide-01.png  (poster — "Your 8th coffee is FREE")
 *   336:1715  →  slide-02.png  (poster — "You're already doing your best")
 *   374:8094  →  slide-03.png  (menu — "Our Menu / Phoenix Corner Coffee")
 *   374:8095  →  slide-04.png  (pricing — "Your Choice, Reusable Cup vs Paper Cup")
 */

const SLIDES = [
    {
        src: "/phoenix-cafe/slide-01.png",
        alt: "Phoenix Cafe — Your 8th coffee is FREE poster",
        aspect: "516/868",
    },
    {
        src: "/phoenix-cafe/slide-02.png",
        alt: "Phoenix Cafe — You're already doing your best poster",
        aspect: "516/730",
    },
    {
        src: "/phoenix-cafe/slide-03.png",
        alt: "Phoenix Cafe — Our Menu",
        aspect: "516/301",
    },
    {
        src: "/phoenix-cafe/slide-04.png",
        alt: "Phoenix Cafe — Reusable Cup vs Paper Cup pricing",
        aspect: "516/301",
    },
];

export default function PhoenixCafePage() {
    return (
        <div className="min-h-screen">
            <header className="mx-auto flex max-w-[512px] items-center justify-between px-0 py-4">
                <Link href="/" className="font-sans text-xl font-semibold text-[#737373] transition-colors hover:text-[#171717]">
                    J.
                </Link>
            </header>

            <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-[32px] pt-10 pb-32">
                <div className="flex flex-col gap-6">
                    <section className="flex flex-col gap-2">
                        <h1 className="font-sans text-[32px] font-medium leading-[42px] text-black">
                            Phoenix Cafe - Reusable Cup Ad Campaign
                        </h1>
                        <p className="font-sans text-base leading-[24px] text-black">
                            An ad campaign to promote in-house reusable cups.
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
