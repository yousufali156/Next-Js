'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/lib/firebase.config';
import { signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
            <label className="text-sm font-semibold text-gray-600 block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-left">
            <label className="text-sm font-semibold text-gray-600 block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
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
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" alt="Google" />
          Sign in with Google
        </button>

        <p className="text-sm mt-6 text-gray-600">
          Forgot password? <a href="#" className="text-blue-600 font-medium">Recover</a>
        </p>
        <p className="text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 font-medium">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
