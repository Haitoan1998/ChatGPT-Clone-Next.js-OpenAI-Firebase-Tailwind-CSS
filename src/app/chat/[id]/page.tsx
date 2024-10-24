import ChatInput from "@/components/ChatInput";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}
const ChatPage = ({ params: { id } }: Props) => {
  return (
    <div className="flex flex-col justify-center h-full p-5 overflow-hidden">
      <div className="flex-1 overflow-y-scroll pt-10">chat1</div>
      <ChatInput id={id} />
    </div>
  );
};

export default ChatPage;
