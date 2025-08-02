"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter();
    const isLoggedIn = false;

    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push("/about/address");
        } else {
            router.push("/");
        }
    };

    return (
        <div className="p-6 space-y-4">
            <p className='font-bold text-3xl text-green-500'>This is About Page</p>
            
            <p>
                <Link href="/about/address" className="text-blue-600 underline">
                    Go to Address Page
                </Link>
            </p>

            <button 
                type='button' 
                onClick={handleNavigation}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
                Address Page
            </button>

            {/* Section 1: About Our Mission */}
            <section>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-700">
                    Our mission is to build scalable and user-friendly web applications that solve real-world problems.
                </p>
            </section>

            {/* Section 2: Our Team */}
            <section>
                <h2 className="text-2xl font-semibold">Our Team</h2>
                <p className="text-gray-700">
                    We are a team of passionate developers, designers, and problem solvers who love creating digital experiences.
                </p>
            </section>

            {/* Section 3: Our History */}
            <section>
                <h2 className="text-2xl font-semibold">Our History</h2>
                <p className="text-gray-700">
                    Founded in 2020, we started with a small group of tech enthusiasts and now serve thousands of users worldwide.
                </p>
            </section>

            {/* Section 4: Our Services */}
            <section>
                <h2 className="text-2xl font-semibold">What We Do</h2>
                <p className="text-gray-700">
                    We provide web development, app development, UI/UX design, and API integration services.
                </p>
            </section>

            {/* Section 5: Contact Info */}
            <section>
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-gray-700">
                    Email: support@example.com <br />
                    Phone: +880 1234 567890
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
