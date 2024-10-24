import { signOut } from "@/auth";
import React from "react";

const SignOut = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="text-sm underline text-gray-200 hover:text-white duration-300">
        Sign Out
      </button>
    </form>
  );
};

export default SignOut;
