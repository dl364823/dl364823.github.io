"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FcAreaChart, FcTodoList } from "react-icons/fc";
import { FaSpotify, FaShoppingBasket, FaRobot } from "react-icons/fa";
import { TbBrandMinecraft } from "react-icons/tb";
import { RiTreasureMapFill } from "react-icons/ri";
import Research from "./Research";
import GlowingButton from "./GlowingButton";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6"; // 或用其它 pdf icon

const aboutMe = "Hi, I’m Roger Li, a software engineer passionate about building scalable, secure solutions across web, cloud infrastructure, and AI. Currently, I’m a full-stack intern at Miora Brooklyn (InnoSeq Inc.), leading the front-end migration from HTML to React, building internal and external platforms, including secure APIs, HIPAA compliance, and payment intergation. Previously, I was a backend developer at a stealth startup, building MVP cloud systems on Firebase and GCP. At Network Tree, I shipped a professional networking app from scratch, developing the React frontend and automating CI/CD pipelines with AWS ECS and Jenkins. Explore my projects below, and feel free to download my resume to learn more about my journey!";
const projectsData = [
  {
    image: "images/amazon-logo.jpeg",  // 
    title: "String Swift - Racket Stringing Ordering Platform",
    github_link: "https://github.com/Cloud-404BrainNotFound", 
    description: "",
    role:
      "Architected a microservices backend using AWS and Heroku, delivered real-time order tracking UI, and implemented authentication and booking with FastAPI and Docker.",
    text_color: "text-blue-600",
    tags: ["Microservices", "AWS", "FastAPI", "GraphQL", "React"],
    start_date: "Sep 2024",
    end_date: "Dec 2024"
  },
  {
    image: "images/openai-logo.jpeg", 
    title: "CoverCraft AI - Cover Letter Generator",
    github_link: "https://github.com/dl364823/CoverCraftAi", 
    description: "",
    role:
      "Built an AI-powered solution using OpenAI API to generate tailored cover letters with real-time WebSocket streaming and retrieval-augmented generation.",
    text_color: "text-purple-600",
    tags: ["AI", "React", "Node.js", "OpenAI", "RAG"],
    start_date: "Jan 2024",
    end_date: "May 2024"
  }
];

const experienceData = [
  {
    image: "images/miorahealth-logo.jpeg",
    title: 'Miora Health',
    github_link: 'https://www.miorahealth.com/',
    description: 'Full-Stack Software Engineer Intern',
    role: '',
    text_color: 'text-blue-500',
    tags: ["AWS", "Full-Stack"],
    start_date: "May 2025",
    end_date: "Present"
  },
  {
    image: "images/stealth-logo.jpeg",
    title: 'Stealth Startup',
    github_link: 'https://www.linkedin.com/in/roger-li-161318278/',
    description: 'Backend/Platform Developer',
    role: '',
    text_color: 'text-blue-200',
    tags: ["Artificial Intelligence", "Backend"],
    start_date: "Jan 2025",
    end_date: "May 2025"
  },
  {
    image: "images/network-logo.jpeg",
    title: 'Network Tree',
    github_link: 'https://www.networktree.app/',
    description: 'Software Engineer Intern',
    role: '',
    text_color: 'text-blue-200',
    tags: ["Frontend", "Backend", "AWS"],
    start_date: "August 2024",
    end_date: "December 2024"
  },
  { 
    image: "images/hse-logo.jpeg",
    title: "Smart H.S.E Tech",
    github_link: "https://github.com/dl364823/Smart-HSE-Tech",
    description: 'Software Engineer Intern',
    role: 'Rdesigned an async distributed data pipeline (gRPC, Redis, PostgreSQL), built observability with Prometheus & Grafana, and enabled real-time processing for 1,000+ DAUs.',
    text_color: 'text-cyan-700',
    tags: ["Spring Boot", "gRPC", "Redis", "PostgreSQL"],
    start_date: "May 2024",
    end_date: "Jul 2024"
  },
];

const educationData = [
  {
    image: "images/columbia-logo.jpeg",
    title: 'Columbia University',
    github_link: 'https://www.columbia.edu/',
    description: 'Master of Science in Computer Science',
    role:'',
    text_color: 'text-blue-200',
    tags: ["Computer Science", "Cloud Infrastructure", "Database", "Generative AI"],
    start_date: "August 2023",
    end_date: "May 2025"
  },
  {
    image: "images/nyu_logo.jpeg",
    title: 'New York University',
    github_link: 'https://www.nyu.edu/',
    description: 'Master of Art in Politics',
    role:'',
    text_color: 'text-blue-200',
    start_date: "August 2021",
    end_date: "May 2023" 
  },
  {
    image: "images/cityu-logo.jpeg",
    title: 'City University of Hong Kong',
    github_link: 'https://www..edu/',
    description: 'Bachelor of Social Science in Public Policy and Political Science',
    role:'',
    text_color: 'text-blue-200',
    start_date: "August 2015",
    end_date: "May 2019"
  },

]

const tabs = [
  { key: "experience", label: "Experience" },
  { key: "projects", label: "Projects" },
  { key: "education", label: "Education"}
]

const socialLinks = [
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: <FaFilePdf className="text-xl md:text-2xl" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/roger-li-161318278/",
    icon: <FaLinkedin className="text-xl md:text-2xl" />,
  },
  {
    label: "GitHub",
    href: "https://github.com/dl364823",
    icon: <FaGithub className="text-xl md:text-2xl" />,
  },
];


const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <>
        {/* Left Column */}
        <div className="w-full md:w-1/3 p-6 flex flex-col items-center space-y-8 border-bborder-white/10 md:border-b-0 md:border-r md:border-white/10 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative flex items-center justify-center w-full group">
            {/* 渐变光环效果 */}
            <span
              className="
                absolute
                z-0
                rounded-full
                w-[120%] h-[120%]
                bg-gradient-to-tr from-blue-400/30 via-purple-400/20 to-transparent
                blur-xl
                animate-pulse
                transition-all
                duration-300
                group-hover:scale-105 group-hover:blur-2xl
              "
              aria-hidden="true"
            />
            {/* 头像+极细阴影 */}
            <Image
              src="/images/Roger.jpeg"
              alt="Headshot"
              width={320}
              height={320}
              className="
                relative z-10
                rounded-full
                object-cover
                shadow-[0_6px_24px_0_rgba(20,20,40,0.35),0_1.5px_10px_2px_rgba(130,120,255,0.15)]
                hover:shadow-[0_16px_32px_0_rgba(70,70,140,0.28),0_2px_12px_2px_rgba(130,120,255,0.18)]
                transition-all duration-300
                max-w-[260px] min-w-[160px] w-[90vw] md:w-full
              "
              priority
            />
          </div>
        </motion.div>

          <div className="flex flex-col gap-8 mt-4">
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
              <GlowingButton
                href="/Dongzhou_Li_Resume.pdf"
                icon={<FaFilePdf className="text-3xl" />}
              >
                Resume
              </GlowingButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
              <GlowingButton
                href="https://www.linkedin.com/in/roger-li-161318278/"
                icon={<FaLinkedin className="text-3xl" />}
              >
                LinkedIn
              </GlowingButton>
            </motion.div>
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }}>
              <GlowingButton
                href="https://github.com/dl364823"
                icon={<FaGithub className="text-3xl" />}
              >
                GitHub
              </GlowingButton>
            </motion.div>
          </div>
          
        </div>
        {/* Right Column */}
        <div className="w-full md:w-2/3 p-6 mx-auto text-center">
          {/* About Me */}
          <div className="text-center w-full px-2 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold tracking-wide white-gradient-text drop-shadow-md mb-1">
              About Me
            </h2>
            <hr className="w-16 md:w-28 h-1 mx-auto my-2 bg-gradient-to-r from-blue-400 via-indigo-500 via-purple-500 to-blue-700 rounded-full border-0 opacity-60" />
            <p className="
              w-full max-w-3xl mx-auto mt-6 mb-4
              text-base md:text-lg
              text-zinc-200/80 leading-relaxed font-medium
              text-left md:text-center
              px-2 md:px-0
              selection:bg-blue-400/20 selection:text-blue-900
            ">
              Hi, I&apos;m Roger Li, a software engineer passionate about building scalable, secure solutions across web, cloud infrastructure, and AI. Currently, I&apos;m a full-stack intern at 
              <span className="gradient-text">{" "}Miora Brooklyn (InnoSeq Inc.)</span>, leading the front-end migration from HTML to React, building internal and external platforms, including secure APIs, HIPAA compliance, and payment integration. Previously, I was a backend developer at a 
              <span className="gradient-text">{" "}stealth startup</span>, building MVP cloud systems on Firebase and GCP. At 
              <span className="gradient-text">{" "}Network Tree</span>, I shipped a professional networking app from scratch, developing the React frontend and automating CI/CD pipelines with AWS ECS and Jenkins. 
              <br className="hidden md:block" />
              <span className="block mt-2 text-zinc-400/90 italic">
                Explore my projects below, and feel free to download my resume to learn more about my journey!
              </span>
            </p>
          </div>
          {/* Tabs */}
          <div className="flex justify-center gap-10 mt-10 mb-2 w-full">
            {/* Tabs */}
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`text-xl md:text-2xl font-bold transition
                  ${activeTab === tab.key
                    ? "white-gradient-text"
                    : "text-gray-400 hover:text-white"}
                  relative pb-1`}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
                {activeTab === tab.key && (
                  <span className="block w-28 mt-2 border-t-2 border-gray-700 mx-auto"></span>
                )}
              </button>
            ))}
          </div>

            {/* Cards */}
            <div className="w-full ">
              <AnimatePresence mode="wait">
                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.15}}
                  >
                    <Research inputData={experienceData} title="Experience" />
                  </motion.div>
                )}
                {activeTab === "projects" && (
                  <motion.div
                    key="projects"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.15 }}
                  >
                    <Research inputData={projectsData} title="Projects" />
                  </motion.div>
                )}
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 30 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30, duration: 0.15 }}
                  >
                    <Research inputData={educationData} title="Education" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

        </div>
      </>
  );
};

export default Home;