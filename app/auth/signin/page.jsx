import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth()

  if (session) {
    redirect("/");
  }
  
  return (
  <main className="min-h-dvh">
      <section className="rounded-lg shadow-lg w-full md:max-w-[30rem] mx-auto my-20 p-3 flex items-center flex-col justify-center gap-10">
        <h1 className="font-bold text-gray-800 text-3xl text-center md:text-4xl">
          Sign in to your Account
        </h1>
        <div className="w-full space-y-5 max-md:px-2">
          <form
            action={async () => {
              "use server";
              await signIn("GoogleProvider");
            }}
          >
            <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
              Sign in with Google
              <FcGoogle />
            </button>
          </form>

          <form
            action={async () => {
              "use server";
              await signIn("GitHub");
            }}
          >
            <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
              Sign in with GitHub
              <FaGithub />
            </button>
          </form>

          <button className="border rounded-full flex items-center justify-center border-gray-400 w-full gap-5 py-4 text-xl md:text-2xl text-gray-700">
            Sign in with Facebook
            <FaFacebook />
          </button>
        </div>
        <p className="text-sm text-gray-500 text-center">
          By Signing in, you agree to our{" "}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </p>
      </section>
    </main>
  );
};

export default page;
