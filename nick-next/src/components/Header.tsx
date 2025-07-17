"use client";

import React from "react";
import Link from "next/link";


const Header: React.FC = () => (
  <header className="backdrop-blur-md bg-gradient-to-r from-[#23272f]/80 to-[#1e293b]/80 border-b border-white/10 sticky top-0 z-50 shadow-lg">
    <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight white-gradient-text drop-shadow hover:brightness-110 transition">
          Hi, I'm Roger!
        </Link>
    </div>
  </header>
);

export default Header;

