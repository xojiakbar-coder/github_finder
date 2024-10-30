import React from "react";
import Image from "next/image";
import githubIcon from "../../assets/icons/github.svg";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="sticky top-0 border-b-[0.4px] border-b-gray-700 z-[999]">
      <div className="flex items-center justify-between w-full h-[10vh] min-h-[10vh] max-h-[10vh] bg-navbar_bg px-[2%]">
        <div className="flex flex-row items-center gap-[12px] px-[12px] py-[6px] rounded-lg hover:bg-hover cursor-pointer">
          <Image
            src={githubIcon}
            alt="github icon not found"
            className="w-[40px] cursor-pointer select-none"
          />
          <h1 className="text-white text-[32px] font-bold">Github Finder</h1>
        </div>
        <div className="flex flex-row items-center gap-[30px]">
          <Link
            href={"/"}
            className="text-white text-[23px] font-[400] hover:bg-hover px-[16px] py-[12px] select-none cursor-pointer rounded-lg"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="text-white text-[23px] font-[400] hover:bg-hover px-[16px] py-[10px] select-none cursor-pointer rounded-lg"
          >
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
