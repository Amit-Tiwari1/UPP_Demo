"use client";

import React, { useState } from "react";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";

import Logo from "@/assets/images/logo.svg";
import SubMenuIcon from "@/assets/images/sub_menu_icon.svg";

export const Navbar: React.FC = () => {
  const [language, setLanguage] = useState("English");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(siteConfig.navItems[0].href);

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "English" ? "हिन्दी" : "English"));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-24">
        <NextLink href="/" className="flex items-center">
          <img src={Logo.src} alt="Logo" className="h-16 w-16" />
        </NextLink>

        <div className="hidden lg:flex gap-4 items-center text-sm font-bold">
          {siteConfig.navItems.map((item) => (
            <NextLink
              key={item.href}
              href={item.href}
              className="relative group"
              onClick={() => setActiveMenu(item.href)}
            >
              <span
                className={`${
                  activeMenu === item.href
                    ? "text-primary font-bold"
                    : "text-gray-800 hover:text-primary"
                } transition-colors duration-300 border border-gray-400 p-3 rounded-xl`}
              >
                {item.label}
                {[
                  "Announcement",
                  "Examination",
                  "Forms & Downloads",
                  "About us",
                ].includes(item.label) && (
                  <img
                    src={SubMenuIcon.src}
                    alt="SubMenu Icon"
                    className="w-4 h-4 inline"
                  />
                )}
              </span>
            </NextLink>
          ))}
        </div>

        <div className="text-sm flex items-start mb-1">
          <div className="text-xs">
            Langaues / भाषा
            <hr className="my-2" />
            <span
              className="ml-4 text-green-500 p-1 text-xs cursor-pointer"
              onClick={handleLanguageToggle}
            >
              {language}
            </span>
          </div>
        </div>

        <div className="flex lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-white shadow-md lg:hidden">
          <div className="flex flex-col gap-4 mx-4 mt-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <NextLink
                key={`${item}-${index}`}
                href={item.href}
                className={`block p-2 transition-colors duration-300 ${
                  activeMenu === item.href
                    ? "text-primary font-medium"
                    : "text-gray-800 hover:text-primary"
                }`}
                onClick={() => {
                  setActiveMenu(item.href);
                  setMenuOpen(false);
                }}
              >
                {item.label}
              </NextLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
