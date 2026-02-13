import Image from "next/image";
import Link from "next/link";

/*
 * Export slides from Figma node 388:8217 → content children
 * and place them in /public/koottu/
 *
 * Figma node → filename:
 *   388:8230  →  slide-01.png  (logo — green "k" icon with "koottu." text)
 *   388:8586  →  slide-02.png  (launch poster — "We're building a better way to rent out your room")
 */

const SLIDES = [
    {
        src: "/koottu/slide-01.png",
        alt: "koottu — Logo design",
        aspect: "512/272",
    },
    {
        src: "/koottu/slide-02.png",
        alt: "koottu — Launch poster",
        aspect: "512/272",
    },
];

export default function KoottuPage() {
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
                            Logo and Launch Poster for a room renting platform.
                        </h1>
                        <p className="font-sans text-base leading-[24px] text-black">
                            Logo and promotional poster for koottu.
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
                            className="relative w-full overflow-hidden rounded-none"
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
