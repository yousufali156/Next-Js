import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div>
            <nav>
                <ul className="flex justify-between">
                    <Link href="/">
                    <li>
                        Home
                    </li>
                    </Link>
                    <Link href="/services">
                    <li>
                        Services
                    </li>
                    </Link>
                    <Link href="/about">
                    <li>
                        About
                    </li>
                    </Link>
                    <Link href="/blog">
                    <li>
                        Bolog
                    </li>
                    </Link>
                    <Link href="/contact">
                    <li>
                        Contact
                    </li>
                    </Link>
 
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;