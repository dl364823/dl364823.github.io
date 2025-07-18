import React from "react";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

const Header: React.FC = () => (
  <header className="backdrop-blur-md bg-gradient-to-r from-[#23272f]/80 to-[#1e293b]/80 border-b border-white/10 sticky top-0 z-50 shadow-lg">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
      <h1 className="text-2xl font-bold tracking-tight gradient-text drop-shadow">Nick's Portfolio</h1>
      <nav>
        <ul className="flex gap-10 text-lg font-semibold">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-white px-2 py-1 transition-colors duration-200 group-hover:text-blue-400"
              >
                {item.label}
                <span className="block h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full mt-1"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header; 