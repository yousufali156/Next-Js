'use client';
import Link from 'next/link';
import React from 'react';

const ServicesPage = () => {
    const data = [
        {
            _id: "web_development",
            serviceName: "Web Development",
            serviceImg: "/services/web-development.png",
            serviceDescription: "We craft responsive and modern websites using technologies like HTML, CSS, JavaScript, and modern frameworks such as React and Next.js."
        },
        {
            _id: "mern_stack",
            serviceName: "MERN Stack Development",
            serviceImg: "/services/mern-stack.png",
            serviceDescription: "Full-stack web development using MongoDB, Express, React, and Node.js for dynamic, database-driven applications."
        },
        {
            _id: "nextjs_ssr_seo",
            serviceName: "Next.js SSR & SEO",
            serviceImg: "/services/nextjs.png",
            serviceDescription: "Develop fast, SEO-optimized web apps with server-side rendering and static site generation using Next.js."
        },
        {
            _id: "ui_ux_design",
            serviceName: "UI/UX Design",
            serviceImg: "/services/uiux.png",
            serviceDescription: "Design beautiful, user-centric interfaces to enhance usability, engagement, and overall experience."
        },
        {
            _id: "api_integration",
            serviceName: "API Integration",
            serviceImg: "/services/api.png",
            serviceDescription: "Seamless integration of third-party services and APIs like Stripe, Firebase, and REST/GraphQL endpoints."
        },
        {
            _id: "website_optimization",
            serviceName: "Website Optimization",
            serviceImg: "/services/optimization.png",
            serviceDescription: "Speed up your website, improve performance metrics, and enhance user experience for better conversions."
        },
        {
            _id: "admin_dashboard",
            serviceName: "Admin Dashboard",
            serviceImg: "/services/dashboard.png",
            serviceDescription: "Custom-built dashboards with real-time data visualization, analytics, and role-based access control."
        },
        {
            _id: "firebase_auth_hosting",
            serviceName: "Firebase Auth & Hosting",
            serviceImg: "/services/firebase.png",
            serviceDescription: "Implement secure authentication (email, Google, GitHub login) and deploy your site using Firebase Hosting."
        },
        {
            _id: "ecommerce_solutions",
            serviceName: "E-commerce Solutions",
            serviceImg: "/services/ecommerce.png",
            serviceDescription: "Build secure and scalable online stores with shopping cart, product management, payment gateway and admin panel."
        }
    ];


    return (
        <div>
            <p className="font-bold text-3xl text-green-500">This is Services Page</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {data.map((d) => (
                    <div
                        key={d._id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                    >
                        <Link href={`/services/${d._id}`}>
                            <img
                                src={d.serviceImg}
                                alt={d.serviceName}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {d.serviceName}
                                </h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default ServicesPage;