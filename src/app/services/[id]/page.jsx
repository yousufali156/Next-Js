'use client';
import React from 'react';

const ServiceDetailsPage = ({ params }) => {
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

    const id = params?.id;
    const singleData = data.find((d) => d._id == id);
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
                {singleData.serviceName}
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-6">
                <img
                    src={singleData.serviceImg}
                    alt={singleData.serviceName}
                    className="w-full md:w-1/2 h-88 md:h-auto object-cover rounded-lg shadow-md"
                />

                <div className="text-gray-700 text-lg">
                    <p className="mb-4">{singleData.serviceDescription}</p>
                    <p className="text-sm text-gray-500">Service ID: {id}</p>
                </div>
            </div>
        </div>

    );
};

export default ServiceDetailsPage;