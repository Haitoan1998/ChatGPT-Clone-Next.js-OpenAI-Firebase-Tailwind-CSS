import React from "react";
import NewChat from "./NewChat";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="hidden md:flex flex-col h-screen relative p-2.5">
      <div className="flex items-center gap-1">
        <Link href={"/"} className="border border-white/20 text-xs md:text-base px-1.5 md:p-2 rounded-md text-white/50 hover:border-white/50 hover:text-white duration-300">
          <IoHome />
        </Link>
        <NewChat />
      </div>
    </div>
  );
};

export default Sidebar;
