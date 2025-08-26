"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { data: session } = useSession();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // console.log(session);

  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Reviews",
      url: "/reviews",
    },
  ];

  return (
    <nav className="flex items-center justify-between py-3 px-6 shadow-md">
      <Link href={"/"} className="flex items-center gap-2 z-50">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={1000}
          height={1000}
          className="w-10 h-10"
        />
        <p className="text-2xl max-lg:hidden">InkPress</p>
      </Link>

      {/* desktop view */}
      <div className="flex items-center gap-8 max-lg:hidden">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-yellow-700 hover:underline"
          >
            {item.name}
          </Link>
        ))}

        {session ? (
          <div>
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name.slice(0, 1).toUpperCase()}
                className="w-10 h-10 rounded-full"
              />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href={"/profile"}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={"/drop-reviews"}>Add your Reviews</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <button onClick={() => signOut()}>Sign Out</button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            href={"/auth/signin"}
            className="text-lg hover:text-yellow-700 hover:underline"
          > Sign In</Link>
        )}
      </div>

      {/* mobile and tab view */}
      <div className="lg:hidden z-50">
        <button onClick={() => setNavOpen(!navOpen)} className="text-2xl">
          {navOpen ? <IoMdClose /> : <RiMenu3Line />}
        </button>
      </div>

      <div
        className={`bg-gray-50 h-dvh overflow-hidden w-full fixed top-0 left-0 lg:hidden 
          ${navOpen ? "block" : "hidden" }`}
      >
        <div className="flex flex-col items-center gap-16 pt-20">
          {navItems.map((item, index) => (
            <Link
              onClick={() => setNavOpen(false)}
              key={index}
              href={item.url}
              className="text-2xl"
            >
              {item.name}
            </Link>
          ))}
          {session ? (
            <div>
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name.slice(0, 1).toUpperCase()}
                  className="w-10 h-10 rounded-full"
                />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href={"/profile"} onClick={() => setNavOpen(false)}>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    onClick={() => setNavOpen(false)}
                    href={"/drop-reviews"}
                  >
                    Add your Reviews
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <button onClick={() => signOut()}>Sign Out</button>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              href={"/auth/signin"}
              className="hover:text-yellow-700 hover:underline text-2xl"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
