import React from "react";

const AboutMe = ({ aboutMe }: { aboutMe: string }) => (
  <div className="text-center w-full">
    <h2 className="text-2xl font-bold text-gray-100 white-gradient-text">About Me</h2>
    <hr className="w-3/4 mt-2 border-t-2 border-gray-700 mx-auto" />
    <p className="w-full md:w-3/4 mt-4 text-xs md:text-base leading-snug mx-auto text-left text-zinc-400 text-gray-200">
      {aboutMe}
    </p>
  </div>
);

export default AboutMe;