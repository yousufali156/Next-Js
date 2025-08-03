"use client"
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

// This is the main functional component for the professional contact page.
export default function ContactPage() {
    // useState hook is used to manage the form data (name, email, message).
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // This function is triggered when the form is submitted.
    const handleSubmit = (e) => {
        // e.preventDefault() prevents the default form submission behavior, which would cause a page reload.
        e.preventDefault();
        // The status is set to 'Sending...' to give the user feedback.
        setStatus('Sending...');
        // In a real application, this is where you would make an API call to send the form data to a backend.
        // For this example, we use a setTimeout to simulate a successful API call after 2 seconds.
        setTimeout(() => {
            setStatus('Message sent successfully!');
            // The form fields are reset to empty strings after successful submission.
            setFormData({ name: '', email: '', message: '' });
        }, 2000);
    };

    // The component returns the JSX structure of the contact page.
    return (
        // The main container with a responsive dark/light mode background and padding.
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            {/* A centered container with a maximum width for a clean layout. */}
            <div className="max-w-7xl mx-auto">
                {/* The main heading and a descriptive paragraph. */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-indigo-600 dark:text-indigo-400">
                        Contact Me
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 sm:mt-4">
                        Feel free to get in touch. I'm always open to new opportunities.
                    </p>
                </div>
                {/* A two-column grid layout for contact info and the form. */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Information Section */}
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h2>
                        <div className="space-y-4">
                            {/* Individual contact details with icons. The user's information from the previous prompt is used here. */}
                            <div className="flex items-center space-x-4">
                                <FaMapMarkerAlt className="text-indigo-500 text-2xl" />
                                <p className="text-lg">Bogura, Bangladesh</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaPhone className="text-indigo-500 text-2xl" />
                                <p className="text-lg">+8801754954385</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <FaEnvelope className="text-indigo-500 text-2xl" />
                                <p className="text-lg">mdyousufali.dev@gmail.com</p>
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <div className="mt-8">
                            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                            <div className="flex space-x-6">
                                {/* Social media links with icons and hover effects. These links are placeholders based on the user's info. */}
                                <a href="https://www.linkedin.com/in/mdyousufali-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                                <a href="https://github.com/mdyousufali-dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                    <FaGithub className="text-3xl" />
                                </a>
                                {/* Portfolio link. */}
                                <a href="https://yousufali-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15.5l-5-5 1.41-1.41L11 15.68l6.59-6.59L19 10.5l-8 8z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send me a message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Form group for the user's name. */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            {/* Form group for the user's email. */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                            {/* Form group for the message. */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                ></textarea>
                            </div>
                            {/* The submit button for the form. */}
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
                            >
                                Send Message
                            </button>
                        </form>
                        {/* Display the submission status message. */}
                        {status && (
                            <p className="mt-4 text-center text-sm font-semibold">
                                {status}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
