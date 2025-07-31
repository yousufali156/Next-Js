import React from 'react';
import Link from 'next/link';

// Fetch a single post
const getSinglePost = async (post_id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
  const data = await res.json();
  return data;
};

export default async function SinglePost({ params }) {
  const p = await params;
  const singlePost = await getSinglePost(p.id);

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-white via-purple-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-8 relative border border-indigo-100">
        <div className="absolute -top-5 -left-5 h-20 w-20 bg-gradient-to-tr from-indigo-500 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-5 -right-5 h-20 w-20 bg-gradient-to-bl from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

        <h1 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">
          {singlePost.title}
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {singlePost.body}
        </p>

        <div className="text-right">
          <Link
            href="/posts"
            className="inline-block px-5 py-2 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 transition duration-300"
          >
            ← Back to All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
