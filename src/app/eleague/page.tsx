import Image from "next/image";
import Link from "next/link";

const SLIDES = [
    {
        src: "/eleague/slide-01-brace-yourselves.png",
        alt: "eLeague — Brace Yourselves launch banner",
        aspect: "1580/908",
    },
    {
        src: "/eleague/slide-02-red-devils.png",
        alt: "eLeague — Champions Red Devils announcement",
        aspect: "2106/1210",
    },
    {
        src: "/eleague/slide-03-gameday-14.png",
        alt: "eLeague — Gameday 14 fixture card",
        aspect: "525/902",
    },
    {
        src: "/eleague/slide-04-friendlies.png",
        alt: "eLeague — Matchday 1 Friendlies",
        aspect: "525/301",
    },
    {
        src: "/eleague/slide-05-score-3-1.png",
        alt: "eLeague — Match score 3-1",
        aspect: "529/305",
    },
    {
        src: "/eleague/slide-06-team-six.png",
        alt: "eLeague — Team Six champion banner",
        aspect: "2115/1219",
    },
    {
        src: "/eleague/slide-07-award-ceremony.png",
        alt: "eLeague — Award Ceremony",
        aspect: "529/305",
    },
    {
        src: "/eleague/slide-08-streaming-twitch.png",
        alt: "eLeague — Streaming Now on Twitch",
        aspect: "529/305",
    },
    {
        src: "/eleague/slide-09-matchday-01.png",
        alt: "eLeague — Matchday 01",
        aspect: "529/305",
    },
    {
        src: "/eleague/slide-10-rulebook.png",
        alt: "eLeague — Rulebook",
        aspect: "527/739",
    },
    {
        src: "/eleague/slide-11-champions-certificate.png",
        alt: "eLeague — Champions certificate",
        aspect: "527/739",
    },
    {
        src: "/eleague/slide-12-award.png",
        alt: "eLeague — Award",
        aspect: "529/348",
    },
];

export default function ELeaguePage() {
    return (
        <div className="min-h-screen">
            {/* Header: logo */}
            <header className="mx-auto flex max-w-[512px] items-center justify-between px-0 py-4">
                <Link href="/" className="font-sans text-xl font-semibold text-[#737373] transition-colors hover:text-[#171717]">
                    J.
                </Link>
            </header>

            <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-[32px] pt-10 pb-32">
                {/* Header Section */}
                <div className="flex w-full flex-col gap-6">
                    {/* Title & Subtitle */}
                    <section className="flex flex-col gap-2">
                        <h1 className="font-sans text-[32px] font-medium leading-[48px] text-black">
                            eLeague by marketfeed.
                        </h1>
                        <p className="font-sans text-base leading-[24px] text-black">
                            Branding and assets for the inter-organisational FIFA 2v2 league
                        </p>
                    </section>

                    {/* Software Used */}
                    <section className="flex items-center gap-6">
                        <span className="font-mono text-base uppercase text-[#737373]">Softwares used:</span>
                        <div className="flex items-center gap-6">
                            <div className="relative h-[22px] w-[15px]">
                                <Image src="/icons/figma-logo.png" alt="Figma" fill className="object-contain" unoptimized />
                            </div>
                        </div>
                    </section>
                </div>

                {/* Slides — vertical stack of graphic design work */}
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

            {/* Bottom accent line */}
            <div className="h-px w-full bg-[#d6d6d6]" aria-hidden />
        </div>
    );
}
