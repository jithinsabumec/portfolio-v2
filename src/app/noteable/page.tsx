import Image from "next/image";
import Link from "next/link";

function SectionHeading({ label }: { label: string }) {
    return (
        <h3 className="font-mono text-base uppercase text-[#737373]">
            {label}
        </h3>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <h2 className="font-sans text-2xl font-medium text-[#171717]">
            {title}
        </h2>
    )
}

function Tag({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`inline-flex items-center justify-center gap-1 rounded-[12px] border border-[#d6d6d6] bg-white px-[12px] py-px font-medium text-xs leading-[28px] ${className}`}>
            {children}
        </span>
    );
}

export default function NoteablePage() {
    return (
        <div className="min-h-screen">
            {/* Header: logo, same max-width as main content */}
            <header className="mx-auto flex max-w-[512px] items-center justify-between px-0 py-4">
                <Link href="/" className="font-sans text-xl font-semibold text-[#737373] transition-colors hover:text-[#171717]">
                    J.
                </Link>
            </header>

            <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-[32px] pt-10 pb-32">
                {/* Header Section */}
                <div className="flex flex-col gap-6">
                    {/* Title & Tags */}
                    <section className="flex flex-col gap-6">
                        <h1 className="font-sans text-[32px] font-medium leading-[1.2em] text-black">
                            Designing a Voice-First Notes App for Instant Ideas
                        </h1>

                        <div className="flex flex-wrap gap-2">
                           
                            <Tag className="text-[#171717] rounded-[17px]">
                                <Image
                                    src="/icons/phone-icon.svg"
                                    alt=""
                                    width={12}
                                    height={12}
                                    className="shrink-0 mr-1"
                                    unoptimized
                                />
                                Mobile App
                            </Tag>
                        </div>
                    </section>

                    {/* Software Used */}
                    <section className="flex items-center gap-6">
                        <span className="font-mono text-base uppercase text-[#737373]">Softwares used:</span>
                        <div className="flex items-center gap-6">
                            <div className="relative h-[22px] w-[15px]">
                                <Image src="/icons/figma-logo.png" alt="Figma" fill className="object-contain" unoptimized />
                            </div>
                            <div className="relative h-[26px] w-[26px]">
                                <Image src="/icons/rive-logo.png" alt="Rive" fill className="object-contain" unoptimized />
                            </div>
                        </div>
                    </section>

                    {/* Hero Image */}
                    <div className="w-full relative aspect-[512/380] rounded-[18px] overflow-hidden bg-gray-100 border border-[#d7d7d7] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
                        <Image
                            src="/noteable/noteable-header.jpg"
                            alt="Noteable Hero"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>

                {/* Overview: The Spark */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="Overview" />
                        <SectionTitle title="What if taking notes felt as natural as thinking?" />
                    </div>
                    <p className="font-sans text-base leading-[22.5px] text-[#171717]">
                        I&apos;m always getting ideas at the worst times—walking, commuting, or about to fall asleep. I wanted a place where thoughts could land instantly, without scrolling through lists or losing the moment. That&apos;s what sparked Noteable: a voice-first app designed just for catching those random bursts of inspiration.
                    </p>
                    <div className="w-full relative h-fit rounded-[18px] overflow-hidden bg-transparent mt-4">
                        <Image
                            src="/noteable/image-overview.png"
                            alt="Overview - Original notes vs Noteable"
                            width={512}
                            height={340}
                            className="w-full h-auto object-contain p-0 bg-none"
                            unoptimized
                        />
                    </div>
                </section>

                {/* The Problem */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="The Problem" />
                        <SectionTitle title="Don't AI assistants already do this?" />
                    </div>
                    <p className="font-sans text-base leading-[22.5px] text-[#171717]">
                        AI assistants are great for quick capture, but a dedicated app like Noteable is built for depth—making your thoughts easy to revisit, actionable, and delightful. AI alone is genius, organization and use in daily life, That&apos;s something a general assistant is not designed to deliver.
                    </p>
                </section>

                {/* The Focus */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="The Focus" />
                        <SectionTitle title="If an idea hits, how fast can I save it?" />
                    </div>
                    <p className="font-sans text-base leading-[22.5px] text-[#171717]">
                        For me, capturing a thought should be instant—one tap, and it&apos;s safe. The app needs to feel like it&apos;s always on standby, understanding what kind of note I&apos;m making without me having to explain it every time. No digging, no typing, just pure creative flow.
                    </p>
                </section>

                {/* The Ideas */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="The Ideas" />
                        <SectionTitle title="What have I designed?" />
                    </div>

                    {/* Idea 1: Time & Date (Image 4 - Ideas from user mapping, or Image 1?) 
                        User said Image 1 - Ideas is node 299:1078 which is the Iphone Pricing one? 
                        Wait, let's re-read the mapping.
                        Image 1 - Ideas: 299:1078 -> This frame contains the "Pricing" screens (from my view_code tool output of 299:1078 which had imgImage7 pricing).
                        Image 2 - Ideas: 299:1251 -> This frame has imgFirefly... "Time based notes"?
                        Image 4 - Ideas: 307:1194 -> This also had imgFirefly...
                        
                        The visible text in the layout I built has:
                        1. Time and Date-based Notes & Tasks
                        2. Homescreen & Lockscreen Widgets
                        3. The Bottom Bar
                        4. AI is not free
                        
                        Based on the user's provided IDs and my inspection:
                        - Image 1 (299:1078) appears to be the Pricing/AI Cost image (it had the pricing UI).
                        - Image 2 (299:1251) appears to be the Time/Date list UI.
                        
                        So I should map them correctly to the text sections.
                        
                        Idea 1 Text: "Time and Date-based Notes..." -> Should use Image 2 (299:1251) or Image 4 (307:1194)? 
                        Let's check 307:1194 content again. It had "imgGroup33" and "imgFirefly...". It looks like the "Time based" one.
                        
                        Let's try to map logically:
                        - "Time and Date-based": /noteable/image-4-ideas-time-based.png (from 307:1194 or 299:1251)
                        - "Widgets": (Already correct with lockscreens)
                        - "Bottom Bar": (Already correct with image-6)
                        - "AI is not free": /noteable/image-1-ideas-iphone17.png (from 299:1078 which covers pricing)
                    */}

                    <ul className="flex flex-col gap-12 list-disc pl-6 font-sans text-base leading-[22.5px] text-[#171717]">
                        {/* Idea 1: Time & Date */}
                        <li>
                            <div className="flex flex-col gap-4">
                                <span>
                                    <span className="font-semibold">Time and Date-based Notes & Tasks :</span> Notes and tasks are auto-sorted by date, and the app figures out whether each recording is a note or a task—all on its own.
                                </span>
                                <div className="w-full h-fit rounded-none overflow-hidden bg-gray-100">
                                <Image
                                    src="/noteable/image-1-ideas-time-date.png"
                                    alt="Time based notes"
                                    width={976}
                                    height={594}
                                    className="w-full h-auto object-cover rounded-none"
                                    unoptimized
                                />
                                </div>
                            </div>
                        </li>

                        {/* Idea 2: Widgets */}
                        <li>
                            <div className="flex flex-col gap-4">
                                <span>
                                <span className="font-semibold">Homescreen & Lockscreen Widgets :</span> Always just a tap away—on my phone, wherever I am—because inspiration doesn&apos;t care if my device is locked or not.
                            </span>
                            <div className="w-full h-fit rounded-none overflow-hidden bg-transparent">
                                <Image
                                    src="/noteable/image-2-ideas-widgets.png"
                                    alt="Homescreen & Lockscreen Widgets"
                                    width={512}
                                    height={400}
                                    className="w-full h-auto object-cover rounded-none"
                                    unoptimized
                                />
                                </div>
                            </div>
                        </li>

                        {/* Idea 3: Bottom Bar */}
                        <li>
                            <div className="flex flex-col gap-4">
                                <span>
                                <span className="font-semibold">The Bottom Bar :</span> My favorite bit. It lives at the core of the app. Record or type—whatever&apos;s fastest for my brain right then.
                            </span>
                            <div className="w-full relative aspect-[512/200] rounded-none overflow-hidden bg-white pl-[157px]">
                                <video
                                    src="/noteable/bottombar.m4v"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="absolute inset-0 h-full w-full object-cover pl-[34px] pr-[34px]"
                                />
                                </div>
                            </div>
                        </li>

                        {/* Idea 4: AI Cost */}
                        <li>
                            <div className="flex flex-col gap-4">
                                <span>
                                <span className="font-semibold">AI is not free :</span> Because Noteable relies on AI-driven features to automatically transcribe and organize your notes, it has associated costs that make charging users a necessary step to maintain quality and sustainability.
                            </span>
                            <div className="w-full h-fit rounded-none overflow-hidden bg-gray-100">
                                <Image
                                    src="/noteable/image-4-ideas-ai-cost.png"
                                    alt="Pricing screens"
                                    width={512}
                                    height={340}
                                    className="w-full h-auto object-cover rounded-none"
                                    unoptimized
                                />
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* Learnings */}
                <section className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="What I learned" />
                        <SectionTitle title="My learnings from Noteable" />
                    </div>
                    <div className="flex flex-col gap-4 text-[#171717] font-sans text-base leading-[22.5px]">
                        <p>
                            Mapping bottom bar transitions in Rive required careful planning of logic and animation variables.
                        </p>
                        <p>
                            I realized that <span className="font-medium underline decoration-solid">instant access is everything</span>—having Noteable just a tap away truly matters when inspiration strikes. The real challenge (and joy) of this project was making the app feel genuinely “at your fingertips,” so jotting down an idea is as natural and frictionless as the thought itself.
                        </p>
                    </div>
                </section>

                {/* The Future */}
                <section className="flex flex-col gap-6 pt-0">
                    <div className="flex flex-col gap-1">
                        <SectionHeading label="THE future" />
                        <SectionTitle title="How could Noteable evolve further?" />
                    </div>
                    <ul className="flex flex-col gap-3 font-sans text-base leading-[22.5px] text-[#171717] list-disc pl-6">
                        <li>
                            Add a web platform for universal access, allowing users to retrieve notes from any device—even without their phone.
                        </li>
                        <li>
                            Enable project, to-do, and calendar sync for organization beyond voice notes.
                        </li>
                        <li>
                            Introduce a dedicated view for managing tasks and long-term ideas.
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
