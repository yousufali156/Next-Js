'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/lib/firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login with:', { email, password });
    router.push('/dashboard');
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('✅ Google login successful:', user);
      router.push('/dashboard');
    } catch (error) {
      console.error('❌ Google login failed:', error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">🔐 Login to Your Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="text-sm font-semibold text-gray-600 block mb-1" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-left relative">
            <label className="text-sm font-semibold text-gray-600 block mb-1" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] text-gray-500 hover:text-indigo-600 focus:outline-none"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              tabIndex={-1}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-all"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-gray-500">or</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 font-semibold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 533.5 544.3"
            className="w-5 h-5"
          >
            <path
              fill="#4285f4"
              d="M533.5 278.4c0-18.9-1.5-37-4.3-54.7H272.1v103.6h146.9c-6.3 34.4-25 63.6-53.3 83v68.8h85.9c50.4-46.5 79.9-114.8 79.9-201.7z"
            />
            <path
              fill="#34a853"
              d="M272.1 544.3c72.3 0 133-23.8 177.3-64.8l-85.9-68.8c-23.9 16.1-54.5 25.7-91.4 25.7-70.4 0-130-47.6-151.5-111.5H33.6v69.9C77.6 487.5 167.4 544.3 272.1 544.3z"
            />
            <path
              fill="#fbbc04"
              d="M120.6 326.9c-5-14.9-7.9-30.8-7.9-47.1s2.9-32.2 7.9-47.1v-69.9H33.6c-16.8 33.4-26.4 70.9-26.4 117s9.6 83.6 26.4 117l87-69.9z"
            />
            <path
              fill="#ea4335"
              d="M272.1 107.1c39.3 0 74.4 13.5 102.2 40l76.5-76.5C405.2 24.8 344.5 0 272.1 0 167.4 0 77.6 56.8 33.6 142.4l87 69.9c21.5-63.9 81.1-111.5 151.5-111.5z"
            />
          </svg>
          Sign in with Google
        </button>

        <p className="text-sm mt-6 text-gray-600">
          
          <a href="/forgotPassword" className="text-blue-600 font-medium hover:underline">
            Forgot password?{' '}
          </a>
        </p>
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
