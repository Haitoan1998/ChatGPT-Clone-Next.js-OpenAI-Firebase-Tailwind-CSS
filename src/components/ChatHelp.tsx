import React from "react";
import { GiGraduateCap } from "react-icons/gi";
import { MdEditNote } from "react-icons/md";
import { PiLightbulb } from "react-icons/pi";
import { VscVscodeInsiders } from "react-icons/vsc";

const chatData = [
  { title: "Create image", icon: <PiLightbulb />, iconColor: "#e2c541" },
  { title: "Get advice", icon: <MdEditNote />, iconColor: "#c285c7" },
  { title: "Summarize text", icon: <VscVscodeInsiders />, iconColor: "#e86060" },
  { title: "Code", icon: <GiGraduateCap />, iconColor: "#76d0eb" },
];
const ChatHelp = () => {
  return <div>ChatHelp</div>;
};

export default ChatHelp;
