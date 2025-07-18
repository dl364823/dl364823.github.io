import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ResearchItem {
  image?: string | React.ElementType;
  title: string;
  github_link?: string;
  description: string;
  role: string;
  text_color?: string;
  tags?: string[];
  start_date?: string;
  end_date?: string;
}

interface ResearchProps {
  inputData: ResearchItem[];
  title: string;
  showSeeAll?: boolean;
}

const SmartLink: React.FC<{ href?: string, children: React.ReactNode }> = ({ href, children }) => {
  if (!href) return <>{children}</>;
  return href.startsWith("/") ? (
    <Link href={href} className="block focus:outline-none" target="_blank" rel="noopener noreferrer">
      {children}
    </Link>
  ) : (
    <a href={href} className="block focus:outline-none" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const Tag: React.FC<{ tag: string }> = ({ tag }) => (
  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-green-900/40 text-green-300 border border-green-600/20 shadow-inner">
    {/* 发光呼吸小圆点 */}
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400 shadow-[0_0_6px_2px_rgba(34,197,94,0.5)]"></span>
    </span>
    {tag}
  </span>
);

const CARD_HEIGHT = 220;
const GAP_Y = 48; // gap-y-8 = 32px

const CARD_CLASS = "relative mx-auto w-full max-w-md min-h-[220px] p-4 bg-gradient-to-br from-white/10 via-blue-900/20 to-purple-900/20 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 transition-all duration-300 hover:z-10 hover:scale-103 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.32)] hover:border-blue-400/40 group focus:outline-none";

const Research: React.FC<ResearchProps> = ({ inputData, title }) => {
  const sortedInputData = [...inputData].sort((a, b) => {
    if (a.end_date === "Present") return -1;
    if (b.end_date === "Present") return 1;
    return new Date(b.end_date || "").getTime() - new Date(a.end_date || "").getTime();
  });
  const scrollAreaHeight = CARD_HEIGHT * 1 + GAP_Y; 

  return (
    <div className="w-full max-w-5xl mx-auto py-8">
      {/* Card */}
      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
        {sortedInputData.map((research, index) => {
          const tags = research.tags?.map(tag => <Tag tag={tag} key={tag} />);
          const CardContent = (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              tabIndex={0}
              aria-label={research.title}
              role={research.github_link ? "link" : "group"}
              className={CARD_CLASS}
              style={{ minHeight: 220 }}
            >
              <div className="flex items-center gap-4 mb-1">
                {/* 左侧图片/icon */}
                {research.image && typeof research.image === "string" ? (
                  <Image
                    src={`/${research.image}`}
                    alt={research.title}
                    width={64}
                    height={64}
                    className="w-14 h-14 object-contain rounded-xl bg-gray-100/5 shadow"
                    priority={index === 0}
                  />
                ) : research.image ? (
                  React.createElement(research.image, { size: 56 })
                ) : null}
                {/* 右侧内容 */}
                <div>
                  <div className="text-xl font-bold white-gradient-text text-white drop-shadow mb-0.5">{research.title}</div>
                  <div className="text-base text-gray-300">{research.description}</div>
                  <div className="text-xs text-gray-300">{research.role}</div>
                  <div className="text-xs text-gray-400 mt-1">
                    {research.start_date} - {research.end_date}
                  </div>
                </div>
              </div>
              {/* tag 区 */}
              {tags && <div className="flex flex-wrap gap-3 mt-4">{tags}</div>}
            </motion.div>
          );
          return (
            <SmartLink href={research.github_link} key={index}>
              {CardContent}
            </SmartLink>
          );
        })}
      </div>
    </div>
  );
};

export default Research;
