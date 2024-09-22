"use client";
import { ChartSpline, House, Menu, Newspaper, UserPen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBar = () => {
  // Get the full pathname (e.g., "/home")
  const pathname = usePathname();
  const links = [
    {
      icon: <House />,
      href: "/",
      title: "Home",
    },
    {
      icon: <ChartSpline />,
      href: "/manage-user",
      title: "Manage Users",
    },
    {
      icon: <UserPen />,
      href: "/blogs",
      title: "Blogs",
    },
    {
      icon: <Newspaper />,
      href: "/newsletter",
      title: "Newsletters",
    },
  ];
  return (
    <div className="hidden md:block w-[250px] z-50 bg-[#B6C7E8] h-screen py-5  rounded-3xl fixed top-0 left-3">
      {/* logo */}
      <div className="mt-10 mb-2 flex justify-center items-center py-4">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="w-[150px]"
        />
      </div>
      {/* menu */}
      <div className="border-y-2 py-2 border-[#8898BE] flex gap-x-3">
        <div className="ml-[20px]">
          <Menu />
        </div>
        <div>DashBoard Menu</div>
      </div>
      {/* menu items  */}
      <div className="mt-[10px] px-5">
        {links.map((link, index) => (
          <Link
            href={link.href}
            className={`${
              link.href === "/newsletter" && "active-menu"
            } py-3 active-menu border-[#8898BE] flex gap-x-3 mt-2 `}
          >
            <div className="ml-[20px]">{link.icon}</div>
            <div>{link.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
