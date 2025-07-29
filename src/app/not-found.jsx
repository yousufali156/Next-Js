import Link from 'next/link'
import React from 'react'

export default function NotFoundPage404() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800">
            <h1 className="text-7xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl mb-2">Oops! Page Not Found</p>
            <p className="mb-6 text-gray-500">The page you are looking for does not exist.</p>
            <Link
                href="/"
                className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                ⬅ Go Back to Home
            </Link>
        </div>

    )
}
