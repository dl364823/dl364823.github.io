import React from "react";
import Link from "next/link";

interface GlowingButtonProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ href, icon, children, className = "" }) => (
  <div className="relative w-full group">
    {/* 常驻发光层 */}
    <span
      className="absolute top-1/2 left-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2
        bg-gradient-to-br from-blue-400/40 via-purple-500/30 to-blue-900/40 blur-2xl opacity-80
        pointer-events-none transition-all duration-300
        group-hover:opacity-100 group-hover:scale-105"
      aria-hidden="true"
    ></span>
    {/* 按钮本体 */}
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        relative flex items-center justify-center gap-3 text-lg font-bold w-full px-8 py-4
        rounded-2xl bg-gradient-to-br from-white/10 via-blue-900/20 to-purple-900/20
        shadow-2xl border border-white/10 hover:scale-105 hover:border-blue-400/40
        transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400
        backdrop-blur-lg
        ${className}
      `}
    >
      <span className="flex items-center gap-3 group-hover:text-white transition-colors duration-200">
        {icon}
        {children}
      </span>

    </Link>
  </div>
);

export default GlowingButton;