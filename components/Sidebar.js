"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const navLinks = [
    {
      label: "Home",
      href: "/",
      iconPath: "/assets/home-icon.svg",
    },
    {
      label: "Users",
      href: "/users",
      iconPath: "/assets/comments-icon.svg",
    },
    {
      label: "Comments",
      href: "/comments",
      iconPath: "/assets/comments-icon.svg",
    },
  ];
  return (
    <div className="sidebar">
      <Link className="title" href={"/"}>
        NextJS 13
      </Link>
      {navLinks.map((link) => {
        const isActive = usePathname() === link.href;
        return (
          <Link
            className={`link-item${isActive ? " active" : ""}`}
            href={link.href}
          >
            <Image src={link.iconPath} alt="icon" width={30} height={30} />
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
