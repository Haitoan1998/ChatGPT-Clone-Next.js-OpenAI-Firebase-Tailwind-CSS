import { auth, signIn } from "@/auth";
import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import googleImage from "@/assets/googleImage.png";
import githubImage from "@/assets/githubImage.png";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Signin | ChatGPT",
};
const SignInPage = async () => {
  const session = await auth();
  if (session) {
    redirect('/')
  }
  return (
    <div className="fixed w-full h-full bg-black/80 left-0 flex items-center justify-center">
      <div className="bg-[#2f2f2f] w-96 h-96 py-10 flex flex-col items-center justify-center rounded-lg">
        <div className="px-4 text-center">
          <p className="text-3xl font-bolg tracking-wide">Welcome back</p>
          <p className="text-base tracking-wide mt-2 font-medium">Log in or sign up to get smarter responses, upload files and images, and more</p>
        </div>
        <div className="flex flex-col gap-3 mt-3">
          <form
            action={async () => {
              "use server";
              await signIn("google");
            }}
          >
            <button type="submit" className="border border-white/50 py-2 px-6 rounded-md text-base font-semibold flex justify-center items-center gap-1 hover:border-white text-white/80 hover:text-white duration-300 ease-in-out">
              <Image src={googleImage} alt="googleImage" className="w-8" />
              Sign in with Google
            </button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn();
            }}
          >
            <button type="submit" className="border border-white/50 py-2 px-6 rounded-md text-base font-semibold flex justify-center items-center gap-1 hover:border-white text-white/80 hover:text-white duration-300 ease-in-out">
              <Image src={githubImage} alt="googleImage" className="w-8" />
              Sign in with Github
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;