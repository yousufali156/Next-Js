"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";
import ThemeToggle from "../services/themeToggle";

const NavBar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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

  // Dark mode toggle logic
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        document.documentElement.classList.add("dark");
        setDarkMode(true);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">MyApp</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
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
                          <ThemeToggle></ThemeToggle>

        </ul>

        {/* Right Side: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="md:hidden text-white"
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
