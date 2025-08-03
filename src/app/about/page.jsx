'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import {
    FaRocket, FaUsers, FaHistory, FaBriefcase, FaAward, FaHandshake,
    FaCodeBranch, FaCamera, FaMapMarkerAlt, FaTimes
} from 'react-icons/fa';

// --- TestimonialCarousel Component ---
const avatars = [
    'https://i.pravatar.cc/100?img=1',
    'https://i.pravatar.cc/100?img=2',
    'https://i.pravatar.cc/100?img=3',
    'https://i.pravatar.cc/100?img=4',
    'https://i.pravatar.cc/100?img=5',
];
const stars = '⭐️⭐️⭐️⭐️⭐️';
const testimonials = [
    { quote: "Their team delivered a top-notch website on time and within budget. The performance is incredible!", author: "Jane Doe, CEO of Tech Solutions" },
    { quote: "The collaboration was seamless and the end product exceeded our expectations. Highly recommend!", author: "John Smith, Founder of Innovate Co." },
    { quote: "A professional and dedicated team. They truly understood our vision and brought it to life with Next.js.", author: "Emily White, Project Manager" },
    { quote: "The best development partners we have ever worked with. The communication was excellent.", author: "Sarah Lee, CTO of Global Apps" },
    { quote: "Outstanding quality and support. They helped us scale our business smoothly.", author: "Michael Brown, Director of Sales" },
    { quote: "We saw a significant improvement in our website's performance after they rebuilt it with Next.js.", author: "Jessica Miller, Founder of WebFlow" },
    { quote: "The team is highly skilled and professional. They are true experts in their field.", author: "David Wilson, Marketing Head" },
    { quote: "A game-changer for our business. The new app is a huge hit with our users.", author: "Laura Taylor, Product Manager" },
    { quote: "They made a complex project feel easy. We are grateful for their hard work.", author: "Daniel Moore, Startup Co-founder" },
    { quote: "Innovative solutions and impeccable service. We will definitely work with them again.", author: "Sophia Clark, Creative Director" },
    { quote: "From design to deployment, the process was smooth and efficient.", author: "Robert Hall, E-commerce Manager" },
    { quote: "Their problem-solving skills are top-notch. They handled every challenge with ease.", author: "Olivia Turner, Tech Lead" },
    { quote: "The performance gains were beyond our expectations. A truly great team.", author: "James White, CEO of Innovate Now" },
    { quote: "We are impressed with their dedication and commitment to our project.", author: "Emma Davis, Business Owner" },
    { quote: "They helped us launch our product on time and it has been a huge success.", author: "Liam Evans, Product Owner" },
    { quote: "The design is flawless and the user experience is amazing.", author: "Mia Wilson, UX Consultant" },
    { quote: "A reliable and trustworthy partner for all our development needs.", author: "Benjamin King, Head of IT" },
    { quote: "They have a deep understanding of modern web technologies.", author: "Ava Green, Software Architect" },
    { quote: "The support they provide post-launch is invaluable.", author: "Noah Adams, Operations Manager" },
    { quote: "Working with them was a pleasure. The final product is exceptional.", author: "Isabella Carter, Project Lead" },
];

const TestimonialCarousel = ({ testimonials }) => {
    const carouselRef = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(carouselRef, { once: true });

    useEffect(() => {
        if (isInView) {
            controls.start({
                x: ['0%', '-50%'],
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 25,
                        ease: 'linear',
                    },
                },
            });
        }
    }, [isInView, controls]);

    const loopedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="overflow-hidden w-full relative" ref={carouselRef}>
            <motion.div
                className="flex gap-6"
                animate={controls}
                initial={{ x: '0%' }}
            >
                {loopedTestimonials.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] max-w-xs bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-md border border-gray-200 dark:border-gray-700 flex-shrink-0"
                    >
                        <div className="flex items-center mb-4">
                            <img
                                src={avatars[idx % avatars.length]}
                                alt="Author Avatar"
                                className="w-12 h-12 rounded-full mr-3 border-2 border-indigo-500"
                            />
                            <div>
                                <p className="font-semibold text-indigo-700 dark:text-indigo-300 text-sm">
                                    {testimonial.author}
                                </p>
                                <p className="text-xs text-yellow-500">{stars}</p>
                            </div>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                            “{testimonial.quote}”
                        </p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
// --- End of TestimonialCarousel Component ---

// --- Main Page Data ---
const aboutData = {
    hero: {
        title: "About Our Company",
        subtitle: "We're dedicated to building innovative solutions for a better web.",
        description: "Our journey began with a simple idea: to create powerful, efficient, and user-friendly web applications that solve real-world problems. We believe in the power of technology to connect, simplify, and inspire.",
    },
    sections: [
        {
            id: 'mission',
            title: "Our Mission",
            desc: "Our mission is to build scalable and user-friendly web applications that solve real-world problems. We strive to create digital experiences that are not only powerful and efficient but also intuitive and accessible for everyone. We believe in a collaborative approach, working closely with our clients to turn their visions into reality.",
            icon: FaRocket,
            details: [
                "**Objective:** To use technology to solve real-world problems.",
                "**Goal:** To build fast and user-friendly web applications.",
                "**Vision:** To create interactive and accessible digital experiences."
            ]
        },
        {
            id: 'team',
            title: "Our Team",
            desc: "We are a team of passionate developers, designers, and problem solvers who love creating digital experiences. Our diverse backgrounds and shared dedication to learning and innovation drive us to push the boundaries of modern web development. We foster a culture of creativity and continuous improvement.",
            icon: FaUsers,
            details: [
                { name: "Sajib Ahmed", role: "Founder & CEO", bio: "A visionary leader with over 15 years of experience in the tech industry. He founded the company with a passion for innovation.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
                { name: "Priya Das", role: "Lead Designer", bio: "Leads our design team, focusing on creating beautiful and intuitive user interfaces. Her work has been recognized with several industry awards.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" },
                { name: "Karim Khan", role: "Senior Developer", bio: "A full-stack developer with expertise in Next.js and Node.js. He is passionate about writing clean, efficient, and scalable code.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
                { name: "Fariha Akter", role: "Marketing Manager", bio: "Manages our brand's online presence and marketing strategies. She is an expert in digital marketing and client engagement.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" },
            ]
        },
        {
            id: 'history',
            title: "Our History",
            desc: "Founded in 2020, we started with a small group of tech enthusiasts and have now grown into a thriving community that serves thousands of users worldwide. Our journey is a testament to our commitment to excellence, continuous improvement, and the trust our clients place in us. We are proud of our past and excited for our future.",
            icon: FaHistory,
            details: [
                "**2020:** Company founded by a small team of developers.",
                "**2021:** Launched our first major project, serving over 100 clients.",
                "**2022:** Expanded our team and moved to a larger office.",
                "**2023:** Reached 1,000+ users and started focusing on international clients.",
                "**2024:** Introduced new services, including mobile app development."
            ]
        },
        {
            id: 'services',
            title: "What We Do",
            desc: "We specialize in web development, app development, UI/UX design, and API integration services. Our expertise in the latest technologies, including Next.js, allows us to deliver high-quality, custom solutions tailored to our clients' needs. From concept to deployment, we are with you every step of the way.",
            icon: FaBriefcase,
            details: [
                "**Web Development:** Building modern, high-performance websites and applications.",
                "**App Development:** Creating native-like mobile experiences for iOS and Android.",
                "**UI/UX Design:** Designing intuitive and aesthetically pleasing user interfaces.",
                "**API Integration:** Seamlessly connecting your applications with third-party services.",
                "**Consulting:** Providing expert advice on technology strategy and architecture."
            ]
        },
        {
            id: 'awards',
            title: "Certifications & Awards",
            desc: "Our commitment to excellence is recognized through various industry certifications and awards. These accolades reflect our team's expertise and our dedication to delivering high-quality, professional services to our clients.",
            icon: FaAward,
            details: [
                "**Certified Next.js Partner:** We are recognized for our expertise in building high-performance Next.js applications.",
                "**'Best Web Development Company' Award (2023):** Awarded by Tech Innovators Magazine.",
                "**AWS Certified Professionals:** Our team holds multiple certifications in cloud computing with AWS."
            ]
        },
        {
            id: 'collaborations',
            title: "Press Mentions & Collaborations",
            desc: "We are proud to have been featured in leading tech publications and to have collaborated with prestigious partners. These mentions highlight our impact and influence within the web development community.",
            icon: FaHandshake,
            details: [
                "Featured in **Forbes** as a 'Top 10 Emerging Tech Company'.",
                "Collaboration with **Open-Source Foundation** for a community project.",
                "Mentioned in **TechCrunch** for our innovative use of Next.js.",
                "Partnership with **Vercel** for optimal deployment solutions."
            ]
        },
        {
            id: 'projects',
            title: "Projects & Case Studies",
            desc: "Explore some of our recent projects and case studies that showcase our expertise and the value we bring to our clients. Each project is a testament to our commitment to excellence.",
            icon: FaCodeBranch,
            details: [
                {
                    title: "E-commerce Platform for 'Shopify Bangla'",
                    desc: "Built a scalable and fast e-commerce platform using Next.js and MongoDB, leading to a 40% increase in sales and a 50% faster page load time.",
                    image: "https://images.unsplash.com/photo-1556740738-b63e5e40e695?q=80&w=2940&auto=format&fit=crop"
                },
                {
                    title: "Real-time Chat App for 'ChatSphere'",
                    desc: "Developed a real-time chat application with a seamless user experience, handling over 100,000 concurrent users with WebSockets and Node.js.",
                    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?q=80&w=2940&auto=format&fit=crop"
                },
            ]
        },
        {
            id: 'behind-scenes',
            title: "Behind the Scenes",
            desc: "Get a glimpse into our company culture and daily life. We believe a happy and collaborative team is key to building great products. Our 'behind the scenes' section shares our events, office environment, and team activities.",
            icon: FaCamera,
            details: [
                "**Team Retreats:** Annual team retreats to foster collaboration and creativity.",
                "**Hackathons:** Regular internal hackathons to explore new ideas and technologies.",
                "**Community Events:** Participating in local tech meetups and conferences.",
                "**Office Life:** A modern, flexible, and fun work environment.",
            ]
        },
        {
            id: 'office',
            title: "Our Office",
            desc: "We are located in the heart of Dhaka, Bangladesh. Our modern and collaborative office space is designed to inspire creativity and teamwork. You are always welcome to visit us!",
            icon: FaMapMarkerAlt,
            details: [
                "**Address:** 123, Tejgaon Link Road, Dhaka-1208, Bangladesh",
                "**Map:** You can find us on Google Maps by searching for our address.",
                "**Visit:** Feel free to schedule a visit by contacting us via email or phone."
            ]
        },
    ],
    testimonials, // Using the testimonials data from the carousel
    contact: {
        title: "Contact Us",
        email: "support@example.com",
        phone: "+880 1234 567890",
    },
};

// --- Main Page Component ---
const AboutPage = () => {
    const router = useRouter();
<<<<<<< HEAD
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [dark, setDark] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoggedIn(false);
            setIsLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const toggleDark = () => {
        setDark(!dark);
        if (!dark) {
            localStorage.theme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            localStorage.theme = "light";
            document.documentElement.classList.remove("dark");
        }
    };
=======
    const isLoggedIn = false;
>>>>>>> 51c3a74cb3bdae07509582dc261130e68db3cc2c

    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push("/about/address");
        } else {
            router.push("/");
        }
    };

<<<<<<< HEAD
    const openModal = (section) => {
        setModalContent(section);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-950">
                <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen font-sans px-6 py-12 transition-colors duration-500 ease-in-out ${dark ? "bg-gray-950 text-gray-200" : "bg-gray-50 text-gray-900"}`}>
            
            {/* Dark Mode Toggle */}
            <div className="fixed top-6 right-6 z-50 flex items-center space-x-2">
                <button
                    onClick={toggleDark}
                    aria-label="Toggle dark mode"
                    className="p-2 rounded-full text-2xl bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
                >
                    {dark ? "☀️" : "🌙"}
                </button>
            </div>

            {/* Hero Section */}
            <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-16 text-center max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
                    {aboutData.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-indigo-600 dark:text-indigo-300 mb-6">
                    {aboutData.hero.subtitle}
                </p>
                <p className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto">
                    {aboutData.hero.description}
                </p>
            </motion.header>

            {/* Main Sections with Pop-up */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
                {aboutData.sections.map((section, i) => (
                    <motion.article
                        key={section.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => openModal(section)}
                        className="relative rounded-3xl p-8 ring-1 ring-gray-300 dark:ring-gray-700 flex flex-col items-center text-center bg-white dark:bg-gray-900 shadow-lg cursor-pointer transition-transform duration-300"
                    >
                        <div className="text-5xl mb-4 text-indigo-500 dark:text-indigo-300">
                            <section.icon />
                        </div>
                        <h2 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">
                            {section.title}
                        </h2>
                        <p className="leading-relaxed text-sm mt-2 text-gray-700 dark:text-gray-400 line-clamp-3">
                            {section.desc}
                        </p>
                    </motion.article>
                ))}
            </section>

            {/* Testimonials Carousel Section */}
            <section className="bg-indigo-50 dark:bg-gray-800 overflow-hidden rounded-3xl px-6 py-16 mb-16 max-w-7xl mx-auto shadow-inner">
                <h2 className="text-4xl font-bold text-center mb-12 text-indigo-700 dark:text-indigo-400">
                    What Our Clients Say
                </h2>
                <TestimonialCarousel testimonials={aboutData.testimonials} />
            </section>

            {/* Modal for section details */}
            <AnimatePresence>
                {modalContent && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="bg-white dark:bg-gray-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-red-500 text-3xl transition"
                            >
                                <FaTimes />
                            </button>
                            <h2 className="text-4xl font-bold text-indigo-700 dark:text-indigo-400 mb-4 text-center flex items-center justify-center gap-3">
                                <modalContent.icon /> {modalContent.title}
                            </h2>
                            <p className="text-lg text-gray-700 dark:text-gray-400 mb-6 text-center">{modalContent.desc}</p>
                            
                            {modalContent.id === 'team' && (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                    {modalContent.details.map((member, idx) => (
                                        <div key={idx} className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                            <Image src={member.avatar} alt={member.name} width={96} height={96} className="rounded-full mb-3 shadow-md" />
                                            <h3 className="font-semibold text-lg">{member.name}</h3>
                                            <p className="text-sm text-indigo-600 dark:text-indigo-300">{member.role}</p>
                                            <p className="mt-2 text-xs text-gray-600 dark:text-gray-400">{member.bio}</p>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {modalContent.id === 'projects' && (
                                <div className="space-y-8">
                                    {modalContent.details.map((project, idx) => (
                                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                                            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-auto object-cover" />
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 mb-2">{project.title}</h3>
                                                <p className="text-gray-700 dark:text-gray-400">{project.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            
                            {(modalContent.details && !['team', 'projects'].includes(modalContent.id)) && (
                                <ul className="list-disc list-inside space-y-3 text-lg text-left">
                                    {modalContent.details.map((item, idx) => (
                                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <hr className="my-16 border-t border-gray-300 dark:border-gray-700" />

            {/* Contact & Navigation Section */}
            <section className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="p-8 rounded-3xl bg-indigo-100 dark:bg-indigo-900 text-gray-900 dark:text-white shadow-xl text-center mb-8"
                >
                    <h2 className="text-3xl font-extrabold mb-4 text-indigo-700 dark:text-indigo-400">
                        {aboutData.contact.title}
                    </h2>
                    <p className="text-lg md:text-xl mb-2">
                        Email: <a href={`mailto:${aboutData.contact.email}`} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition-colors">{aboutData.contact.email}</a>
                    </p>
                    <p className="text-lg md:text-xl">
                        Phone: <a href={`tel:${aboutData.contact.phone}`} className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200 transition-colors">{aboutData.contact.phone}</a>
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <p className="text-lg mb-4">
                            <Link href="/about/address" className="text-blue-600 dark:text-blue-400 underline font-semibold hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                                Go to Address Page
                            </Link>
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <button
                            type='button'
                            onClick={handleNavigation}
                            className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-md"
                        >
                            {isLoggedIn ? "Go to Address Page" : "Go to Home Page"}
                        </button>
                    </motion.div>
                </div>
=======
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
>>>>>>> 51c3a74cb3bdae07509582dc261130e68db3cc2c
            </section>
        </div>
    );
};

export default AboutPage;
