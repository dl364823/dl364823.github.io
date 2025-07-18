import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Avatar: React.FC = () => (
  <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
    <div className="transition-all duration-300 rounded-full shadow-xl border-4 border-white/10 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.32)] hover:border-blue-400/40 group">
      <Image
        src="/images/Roger.jpeg"
        alt="Headshot"
        width={300}
        height={300}
        className="w-3/4 md:w-full max-w-sm h-auto rounded-full shadow-lg border-gray-300 object-cover"
        priority
      />
    </div>
  </motion.div>
);

export default Avatar;