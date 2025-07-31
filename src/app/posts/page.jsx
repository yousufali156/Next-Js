"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 12;

    useEffect(() => {
        const fetchPosts = async () => {
            await new Promise((res) => setTimeout(res, 500)); // simulate delay
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();
            setPosts(data);
            setLoading(false);
        };
        fetchPosts();
    }, []);

    const totalPages = Math.ceil(posts.length / postsPerPage);
    const indexOfLast = currentPage * postsPerPage;
    const indexOfFirst = indexOfLast - postsPerPage;
    const currentPosts = posts.slice(indexOfFirst, indexOfLast);

    const paginate = (pageNum) => setCurrentPage(pageNum);
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center text-xl font-semibold">
                Loading...
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen px-4 py-10">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                    Awesome Blog Posts
                </h1>

                {/* Posts Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {currentPosts.map((post) => (
                        <Link href={`/posts/${post.id}`} key={post.id}>
                            <div className="group relative bg-white h-[220px] w-full rounded-2xl border border-transparent hover:border-indigo-400 shadow-md hover:shadow-xl p-6 overflow-hidden transition-all duration-300 ease-in-out flex flex-col justify-between hover:-translate-y-1">

                                {/* Gradient border effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>

                                <div className="relative z-10">
                                    <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm line-clamp-3 leading-snug">
                                        {post.body}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-4">
                                    <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
                                        Read More →
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>

                {/* Pagination */}
                <div className="flex flex-wrap justify-center items-center mt-12 space-x-2">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 font-semibold rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => paginate(i + 1)}
                            className={`px-4 py-2 mx-1 rounded-full font-semibold transition-colors duration-200 ${currentPage === i + 1
                                    ? "bg-indigo-600 text-white shadow-md"
                                    : "bg-gray-200 text-gray-700 hover:bg-indigo-200"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={nextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 font-semibold rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}
