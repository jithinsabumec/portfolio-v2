import Image from "next/image";
import Link from "next/link";

/*
 * Export slides from Figma node 374:8195 → content children
 * and place them in /public/screenwriting-workshop/
 *
 * Figma node → filename:
 *   374:8204  →  slide-01.png  (workshop announcement — Malayalam text, orange theme)
 *   374:8100  →  slide-02.png  (course details — Day 1 & Day 2 schedule, pricing ₹999)
 */

const SLIDES = [
    {
        src: "/screenwriting-workshop/slide-01.png",
        alt: "Screenwriting Workshop — Announcement poster",
        aspect: "512/695",
    },
    {
        src: "/screenwriting-workshop/slide-02.png",
        alt: "Screenwriting Workshop — Course details and pricing",
        aspect: "512/695",
    },
];

export default function ScreenwritingWorkshopPage() {
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
                            Promotional Materials for Screenwriting & Film Pitching Live Workshop
                        </h1>
                        <p className="font-sans text-base leading-[24px] text-black">
                            Poster and detailed course structure for the workshop.
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
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                width={512}
                                height={695}
                                className="h-auto w-full object-cover"
                                style={{ color: "transparent" }}
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
