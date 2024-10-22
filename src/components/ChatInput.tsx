'use client'
import React, { useState } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import { TbPaperclip } from "react-icons/tb";

const ChatInput = () => {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto pt-3 px-4">
      <form className="bg-white/10 rounded-full flex items-center px-4 py-2.5 w-full">
        <TbPaperclip className="text-2xl -rotate-45 text-white" />
        <input type="text" placeholder="Message ChatGPT" onChange={(e)=> setPrompt(e.target.value)} value={prompt} className="bg-transparent text-white placeholder:text-gray-400 font-medium tracking-wide px-3 outline-none w-full" />
        <button disabled={!prompt} className="p-2.5 rounded-full text-black bg-white disabled:bg-white/30">
          <ImArrowUpRight2 className="text-2xl -rotate-45 text-black/80" />
        </button>
      </form>
      <p className="text-xs mt-2 font-medium tracking-wide">ChatGPT can make mistakes. Check important info.</p>
    </div>
  );
};

export default ChatInput;
