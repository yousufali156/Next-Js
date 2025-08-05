"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../themeToggle"; // adjust path as needed

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide navbar on dashboard routes
  if (pathname.includes("dashboard")) return null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/posts", label: "Posts" },
    { href: "/meals", label: "Meals" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/login", label: "Login" },
    { href: "/register", label: "Register" },
  ];

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">Next.Js App</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${
                    isActive ? "text-blue-500" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          {/* Desktop dark mode toggle */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile: dark mode toggle and menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4">
          <ul className="flex flex-col space-y-2">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block py-2 px-3 rounded hover:bg-blue-500 hover:text-white transition-colors duration-200 ${
                      isActive ? "text-blue-400" : ""
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
