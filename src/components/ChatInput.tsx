"use client";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { ImArrowUpRight2 } from "react-icons/im";
import { TbPaperclip } from "react-icons/tb";

const ChatInput = ({ id }: { id: string }) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const model = "gpt-4-turbo";
  const userEmail = session?.user ? (session?.user?.email as string) : "unknown";
  const userName = session?.user ? (session?.user?.email as string) : "unknown";
  const sendMesage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    const message = {
      text: input,
      createAt: serverTimestamp(),
      user: {
        _id: userEmail,
        name: userName,
        avatar: (session?.user?.image as string) || "https://i.ibb.co.com/XC0YX8v/avatar.png",
      },
    };
    try {
      setLoading(true);
      let chatDocumentId = id
      if (!id) {
        const docRef = await addDoc(collection(db, "users", userEmail, "chats"), {
          userId: userEmail,
          createAt: serverTimestamp(),
        });
        chatDocumentId = docRef.id;
        router.push(`/chat/${chatDocumentId}`)
      }
      await addDoc(collection(db, "users", userEmail, "chats", chatDocumentId, "messafes"), message);
      setPrompt("");
      await fetch('/api/askchat', {
        method: 'POST',
        body: JSON.stringify({ 
          prompt: input,
          id:chatDocumentId,
          model,
          session: userEmail
         }),
        headers: { 'Content-Type': 'application/json' },
      }).then(async (response) => {
        const data = await response.json();
        if (data?.success) {
          toast.success(data?.message, {
            id: toast.loading('ChatGPT is thinking...')
          });
        } else {
          toast.error(data?.message, {
            id: toast.loading('ChatGPT is thinking...')
          });
        }
      })
    } catch (error) {
      toast.error("Simething went wrong.Please try again");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col items-center justify-center mx-auto pt-3 px-4">
      <form
        onSubmit={(e) => {
          sendMesage(e);
        }}
        className="bg-white/10 rounded-full flex items-center px-4 py-2.5 w-full"
      >
        <TbPaperclip className="text-2xl -rotate-45 text-white" />
        <input type="text" placeholder="Message ChatGPT" onChange={(e) => setPrompt(e.target.value)} value={prompt} className="bg-transparent text-white placeholder:text-gray-400 font-medium tracking-wide px-3 outline-none w-full" />
        <button type="submit" disabled={!prompt} className="p-2.5 rounded-full text-black bg-white disabled:bg-white/30">
          <ImArrowUpRight2 className="text-2xl -rotate-45 text-black/80" />
        </button>
      </form>
      <p className="text-xs mt-2 font-medium tracking-wide">ChatGPT can make mistakes. Check important info.</p>
    </div>
  );
};

export default ChatInput;
