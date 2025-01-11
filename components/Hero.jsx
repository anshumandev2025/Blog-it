import React from "react";
import SearchBar from "./SearchBar";

const Hero = ({ title, heading, description, search }) => {
  return (
    <div className="w-full space-y-5 bg-[#EE2B69] flex flex-col items-center justify-center p-10">
      {title && (
        <h3 className="px-3 md:text-lg py-2 rounded-lg bg-[#FBE843] font-semibold">
          {title}
        </h3>
      )}
      {heading && (
        <h1 className="text-lg md:text-3xl font-bold   p-3 text-center bg-black text-white lg:text-4xl">
          {heading}
        </h1>
      )}
      {description && (
        <p className="text-white text-center text-sm md:text-lg font-semibold">
          {description}
        </p>
      )}
      {search && <SearchBar />}
    </div>
  );
};

export default Hero;
