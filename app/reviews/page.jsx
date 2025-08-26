import React from "react";
import Reviews from "./reviews";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/signin")
  }
  return (
    <main>
      <Reviews session={session} />
    </main>
  );
};

export default page
