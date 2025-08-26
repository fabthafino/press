import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <main className="bg-gray-100 p-3 flex max-lg:flex-col max-lg:gap-5 items-center justify-between">
      <Link href={"/"} className="flex items-center gap-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-10 h-10"
        />
        <p className="text-2xl">InkPress</p>
      </Link>

      <div className="flex max-lg:flex-col items-center gap-5">
        <Link href={"/about"} className="text-sm hover:underline">About Us</Link>
        <Link href={"#"} className="text-sm hover:underline">Chat with Us</Link>
        <Link href={"#"} className="text-sm hover:underline">Privacy Policy</Link>
        <Link href={"#"} className="text-sm hover:underline">Terms of Service</Link>
      </div>

      <div className="flex items-center gap-3 text-lg">
        <FaFacebookF/>
        <FaInstagram/>
        <BsTwitterX/>
      </div>
    </main>
  );
};

export default Footer;
