"use client";
import { db } from "@/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus } from "react-icons/fa";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const userEmail = session?.user ? (session?.user?.email as string) : "unknown";
  console.log(session);
  const createNewChat = async () => {
    const doc = await addDoc(collection(db, "users", userEmail, "chats"), { userId: userEmail, createAt: serverTimestamp() });
    router.push(`/chat/${doc?.id}`);
  };
  return (
    <button onClick={createNewChat} className="flex items-center justify-center gap-2 w-full border border-white/20 text-xs md:text-base px-2 py-1 rounded-md text-white/50 hover:border-white/50 hove:text-white duration-300">
      <FaPlus />
      New chat
    </button>
  );
};

export default NewChat;
