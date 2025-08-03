"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));

    // Hide Navbar on dashboard paths
    if (pathname.includes("dashboard")) {
        return null; 
    }

    return (
        <div className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="container mx-auto">
                <ul className="flex justify-center space-x-8"> {/* Centered with space */}
                    <Link href="/">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname === '/' ? 'text-blue-500' : ''}`}>
                            Home
                        </li>
                    </Link>
                    <Link href="/services">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname.startsWith('/services') ? 'text-blue-500' : ''}`}>
                            Services
                        </li>
                    </Link>
                    <Link href="/posts">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname.startsWith('/posts') ? 'text-blue-500' : ''}`}>
                            Posts
                        </li>
                    </Link>
                    <Link href="/meals">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname.startsWith('/posts') ? 'text-blue-500' : ''}`}>
                            Meals
                        </li>
                    </Link>
                    <Link href="/about">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname === '/about' ? 'text-blue-500' : ''}`}>
                            About
                        </li>
                    </Link>
                    <Link href="/blog">
                        {/* Corrected "Bolog" to "Blog" */}
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname.startsWith('/blog') ? 'text-blue-500' : ''}`}>
                            Blog
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname === '/contact' ? 'text-blue-500' : ''}`}>
                            Contact
                        </li>
                    </Link>
                    <Link href="/login">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname === '/login' ? 'text-blue-500' : ''}`}>
                            Login
                        </li>
                    </Link>
                    <Link href="/register">
                        <li className={`text-lg font-medium hover:text-blue-400 transition-colors duration-200 ${pathname === '/register' ? 'text-blue-500' : ''}`}>
                            Register
                        </li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;