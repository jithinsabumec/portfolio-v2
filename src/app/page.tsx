import Image from "next/image";
import Link from "next/link";

const TABS = [
  { id: "product-design", label: "Product Design", active: true, icon: "/icons/product-design-icon.svg" },
  { id: "graphic-design", label: "Graphic Design", active: false },
];

const work = [
  { year: "2026", company: "Plenti", role: "Design Intern - UI/UX & Branding" },
  {
    year: "2025",
    company: "Superlinear Technologies Pvt. Ltd.",
    role: "Product Design Intern",
  },
  {
    year: "2023",
    company: "Fundfolio Fintech Pvt. Ltd",
    role: "Video Editor",
  },
];

const education = [
  {
    year: "2025",
    school: "Maynooth University",
    degree: "MSc in Design Innovation",
  },
  {
    year: "2019",
    school: "Govt. Model Engineering College",
    degree: "B.Tech in ECE",
  },
];

function Button({
  children,
  href = "#",
  className = "",
  ...props
}: React.ComponentProps<typeof Link> & { children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={
        "inline-flex items-center justify-center gap-2 rounded-xl border border-[#d6d6d6] bg-white px-4 py-1.5 font-mono text-sm uppercase leading-[2em] text-[#171717] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] transition hover:border-[#b0b0b0] hover:shadow-md " +
        className
      }
      {...props}
    >
      {children}
    </Link>
  );
}

function SectionHeading({
  iconSrc,
  iconAlt,
  label,
}: {
  iconSrc: string;
  iconAlt: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={20}
        height={20}
        className="shrink-0"
      />
      <span className="font-sans text-sm font-normal text-[#171717]">
        {label}
      </span>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  subtitle,
}: {
  year: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-row flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm text-[#737373]">{year}</span>
        <span className="font-sans text-sm font-normal text-[#171717]">
          {title}
        </span>
      </div>
      <p className="font-sans text-sm text-[#737373]">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header: logo + CTAs, same max-width as main content */}
      <header className="mx-auto flex max-w-[512px] items-center justify-between px-0 py-4">
        <span className="font-sans text-4xl font-medium text-[#737373]">
          J.
        </span>
        <div className="flex items-center gap-2">
          <Button
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            view resume
          </Button>
          <Button
            href="https://www.linkedin.com/in/jithinsabu/"
            className="inline-flex gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
            />
            LINKEDIN
          </Button>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-12 px-0 py-24">
        {/* Hero */}
        <section className="flex w-full flex-col items-center gap-[18px] text-center">
          <p className="font-inter text-left text-xl leading-[1.5em] text-black">
            I&apos;m Jithin, a multidisciplinary designer shaping digital
            experiences through product, motion, and visual storytelling.{" "}
            <span className="text-[#737373]">
              I love designing moments that make people say &apos;WOW&apos; — the
              kind that spark curiosity and joy.
            </span>
          </p>
          <Button href="#work">VIEW WORK</Button>
        </section>

        {/* Work */}
        <section id="work" className="flex w-full flex-col gap-6">
          <SectionHeading
            iconSrc="/icons/work-icon.svg"
            iconAlt=""
            label="Work"
          />
          <div className="flex flex-col gap-4">
            {work.map((item) => (
              <TimelineItem
                key={item.company}
                year={item.year}
                title={item.company}
                subtitle={item.role}
              />
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="flex w-full flex-col gap-6">
          <SectionHeading
            iconSrc="/icons/education-icon.svg"
            iconAlt=""
            label="Education"
          />
          <div className="flex flex-col gap-4">
            {education.map((item) => (
              <TimelineItem
                key={item.school}
                year={item.year}
                title={item.school}
                subtitle={item.degree}
              />
            ))}
          </div>
        </section>

        {/* Category tabs + My Projects (per Figma) */}
        <section className="flex w-full flex-col gap-12">
          <div className="flex flex-nowrap items-center justify-center gap-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={
                  "inline-flex items-center justify-center gap-2 rounded-xl px-[17px] py-2.5 font-sans text-sm font-medium leading-[1.25em] text-[#171717] transition " +
                  (tab.active
                    ? "bg-[#E6E6E6]"
                    : "bg-[unset] opacity-50 hover:opacity-70")
                }
              >
                {"icon" in tab && tab.icon && (
                  <Image
                    src={tab.icon}
                    alt=""
                    width={16}
                    height={16}
                    className="shrink-0"
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-nowrap flex-col justify-center gap-12 py-0">
            <h2 className="font-mono text-xl font-normal leading-[0.875em] text-[#171717] text-center">
              MY PROJECTS
            </h2>
            <Link
              href="/noteable"
              className="group block w-full overflow-hidden rounded-[18px]"
            >
              {/* Card image: Group 26 from Figma (phone mockup) */}
              <div className="relative w-full overflow-hidden rounded-t-[18px]">
                <Image
                  src="/noteable-group26.png"
                  alt="Noteable app"
                  width={1044}
                  height={779}
                  className="w-full object-cover object-top"
                  sizes="(max-width: 512px) 100vw, 512px"
                />
              </div>
              <div className="flex flex-nowrap flex-col justify-center gap-0 py-4 px-0">
                <h3 className="font-sans text-lg font-medium leading-[1.56em] text-[#171717]">
                  Noteable - A Smarter Way to Take Notes
                </h3>
                <div className="mt-2 flex flex-row items-center gap-2">
                  <span className="inline-flex items-center justify-center gap-1 rounded-[17px] border border-[#D6D6D6] bg-white px-3 py-px font-medium text-[#171717] text-xs leading-[2.333em]">
                    <Image
                      src="/icons/phone-icon.svg"
                      alt=""
                      width={12}
                      height={12}
                      className="shrink-0"
                    />
                    Mobile App
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-[#d6d6d6]" aria-hidden />
    </div>
  );
}
