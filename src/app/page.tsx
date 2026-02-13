"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/animate-ui/components/radix/toggle-group";
import { AnimatePresence, motion } from "motion/react";

const TABS = [
  {
    id: "product-design",
    label: "Product Design",
    icon: "/icons/product-design-icon.svg",
    cursor: "pointer",
  },
  {
    id: "graphic-design",
    label: "Graphic Design",
    icon: "/icons/graphic-design-icon.svg",
    cursor: "pointer",
  },
  {
    id: "motion-design",
    label: "Motion Design",
    icon: "/icons/motion-design-icon.svg",
    cursor: "pointer",
  },
];

const MOTION_VIDEOS = [
  { src: "/noteable/bottombar.m4v", title: "Bottom Bar Interaction" },
  { src: "/noteable/switch.m4v", title: "Switch Interaction" },
  { src: "/noteable/tick.m4v", title: "Checkmark Animation" },
  { src: "/noteable/write-erase.m4v", title: "Writing Animation" },
];

const GRAPHIC_DESIGN_PROJECTS = [
  {
    id: "eleague",
    title: "eLeague - Branding & Visual Exploration",
    href: "/eleague",
    thumbnail: "/eleague/thumb-eleague.png",
  },
  {
    id: "phoenix-cafe",
    title: "Phoenix Cafe - Reusable Cup Ad Campaign",
    href: "/phoenix-cafe",
    thumbnail: "/phoenix-cafe/thumb-phoenix.png",
  },
  {
    id: "screenwriting-workshop",
    title: "Promotional Assets for Screenwriting Workshop",
    href: "/screenwriting-workshop",
    thumbnail: "/screenwriting-workshop/thumb-workshop.png",
  },
  {
    id: "koottu",
    title: "koottu - Logo and Launch Poster",
    href: "/koottu",
    thumbnail: "/koottu/thumb-koottu.png",
  },
  {
    id: "universal-mill",
    title: "Ad for Universal Oil and Flour Mill",
    href: "/universal-mill",
    thumbnail: "/universal-mill/thumb-universal.png",
  },
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
        "inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#d6d6d6] bg-white px-4 py-1.5 font-mono text-sm uppercase leading-[2em] text-[#171717] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] transition hover:border-[#b0b0b0] hover:shadow-md " +
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
        unoptimized
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
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm text-[#737373]">{year}</span>
        <span className="font-sans text-sm font-normal text-[#171717]">
          {title}
        </span>
      </div>
      <p className="font-sans text-sm text-[#737373] sm:text-right">{subtitle}</p>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("product-design");

  return (
    <div className="min-h-screen">
      {/* Header: logo + CTAs, same max-width as main content */}
      <header className="mx-auto flex max-w-[512px] items-center justify-between px-5 py-4 sm:px-0">
        <span className="font-sans text-xl font-semibold text-[#737373] transition-colors hover:text-[#171717] shrink-0">
          J.
        </span>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <Button
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-3 sm:px-4"
          >
            view resume
          </Button>
          <Button
            href="https://www.linkedin.com/in/jithinsabu/"
            className="inline-flex gap-2 whitespace-nowrap px-3 sm:px-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              alt=""
              width={20}
              height={20}
              className="shrink-0"
              unoptimized
            />
            <span className="hidden xs:inline">LINKEDIN</span>
            <span className="xs:hidden">LI</span>
          </Button>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-[512px] flex-col items-center justify-center gap-12 px-5 py-24 sm:px-0">
        {/* Hero */}
        <section className="flex w-full flex-col items-center gap-[18px] text-center">
          <p className="font-inter text-left text-lg sm:text-xl leading-[1.5em] text-black">
            I&apos;m Jithin, a multidisciplinary designer shaping digital
            experiences through product, motion, and visual storytelling.{" "}
            <span className="text-[#737373]">
              I love designing moments that make people say &apos;WOW&apos; — the
              kind that spark curiosity and joy.
            </span>
          </p>
          <Button
            href="#my-projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("my-projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          >
            VIEW WORK
          </Button>
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
        <section id="my-projects" className="flex w-full flex-col gap-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col items-center justify-center gap-4">
              <h2 className="font-mono text-base font-medium uppercase leading-[2em] text-black">
                My Projects
              </h2>
              <div className="flex flex-nowrap items-center justify-center gap-4">
                <ToggleGroup
                  type="single"
                  value={activeTab}
                  onValueChange={(val) => {
                    if (val) setActiveTab(val);
                  }}
                  className="gap-1 sm:gap-2 flex-wrap justify-center"
                >
                  {TABS.map((tab) => (
                    <ToggleGroupItem
                      key={tab.id}
                      value={tab.id}
                      className="gap-1.5 sm:gap-2 rounded-xl px-3 sm:px-[17px] py-2 sm:py-2.5 font-sans text-[13px] sm:text-sm font-medium leading-[1.25em] text-[#171717] opacity-50 data-[state=on]:opacity-100 hover:opacity-70 hover:bg-transparent data-[state=on]:bg-transparent transition-all whitespace-nowrap"
                    >
                      {tab.icon && (
                        <Image
                          src={tab.icon}
                          alt=""
                          width={14}
                          height={14}
                          className="shrink-0 sm:w-4 sm:h-4"
                          unoptimized
                        />
                      )}
                      {tab.label}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
          </div>
          <div className="flex flex-nowrap flex-col justify-center gap-12 py-0">
            <AnimatePresence mode="wait">
              {activeTab === "product-design" && (
                <motion.div
                  key="product-design"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <Link
                    href="/noteable"
                    className="group block w-full overflow-hidden rounded-[18px]"
                  >
                    {/* Card image: Group 26 from Figma (phone mockup) */}
                    <div className="relative w-full overflow-hidden rounded-[18px] border border-[#d4d4d4] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
                      <Image
                        src="noteable/noteable-header.png"
                        alt="Noteable app"
                        width={1044}
                        height={779}
                        className="w-full object-cover object-top"
                        sizes="(max-width: 512px) 100vw, 512px"
                        unoptimized
                      />
                    </div>
                    <div className="flex flex-nowrap flex-col justify-center gap-0 pt-4 pb-0 px-0">
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
                            unoptimized
                          />
                          Mobile App
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {activeTab === "motion-design" && (
                <motion.div
                  key="motion-design"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-12 w-full"
                >
                  {MOTION_VIDEOS.map((video) => (
                    <div
                      key={video.src}
                      className="flex flex-col gap-4 group w-full"
                    >
                      <div className="relative w-full overflow-hidden rounded-[18px] border border-[#d7d7d7] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)] bg-[#f8f8f8]">
                        <video
                          src={video.src}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <p className="font-sans text-lg font-medium text-[#171717]">
                        {video.title}
                      </p>
                    </div>
                  ))}
                </motion.div>
              )}

              {activeTab === "graphic-design" && (
                <motion.div
                  key="graphic-design"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col gap-12 w-full"
                >
                  {GRAPHIC_DESIGN_PROJECTS.map((project) => (
                    <Link
                      key={project.id}
                      href={project.href}
                      className={`group flex w-full flex-col gap-4 overflow-hidden`}
                    >
                      <div className="relative w-full overflow-hidden rounded-[18px] border border-[#d7d7d7] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.05)]">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          unoptimized
                          width={1044}
                          height={779}
                          className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 512px) 100vw, 512px"
                        />
                      </div>
                      <div className="flex flex-nowrap flex-col justify-center gap-4 px-0 py-0">
                        <h3 className="font-sans text-lg font-medium leading-[1.56em] text-[#171717]">
                          {project.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      {/* Bottom accent line */}
      <div className="h-px w-full bg-[#d6d6d6]" aria-hidden />
    </div>
  );
}
