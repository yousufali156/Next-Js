'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth, provider } from '@/lib/firebase.config';
import { signInWithPopup } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const RegisterPage = () => {
  const router = useRouter();

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle profile picture change
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(file);
      setProfilePicPreview(URL.createObjectURL(file));
    }
  };

  // Register form submit
  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Registration failed');
      }

      router.push('/login');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Google SignIn
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('✅ Google login successful:', user);
      router.push('/dashboard');
    } catch (error) {
      console.error('❌ Google login failed:', error.message);
      setError('Google login failed: ' + error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm text-center">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6">📝 Create an Account</h2>

        {error && <p className="mb-4 text-red-600 font-semibold">{error}</p>}

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="text-left">
            <label
              className="text-sm font-semibold text-gray-600 block mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="text-left">
            <label
              className="text-sm font-semibold text-gray-600 block mb-1"
              htmlFor="email"
            >
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
            <label
              className="text-sm font-semibold text-gray-600 block mb-1"
              htmlFor="password"
            >
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

          <div className="text-left">
            <label
              className="text-sm font-semibold text-gray-600 block mb-2 flex items-center gap-2"
              htmlFor="profilePic"
            >
              <span>📷</span> Profile Picture (optional)
            </label>

            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faUpload} className="text-indigo-600 w-6 h-6" />
              <label
                htmlFor="profilePic"
                className="inline-block cursor-pointer px-4 py-2 rounded-lg border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-600 hover:text-white transition select-none"
              >
                Choose File
              </label>
            </div>

            <input
              id="profilePic"
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="hidden"
            />

            {profilePicPreview && (
              <img
                src={profilePicPreview}
                alt="Profile preview"
                className="mt-3 mx-auto rounded-full w-24 h-24 object-cover border border-gray-300"
              />
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
            }`}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        <div className="my-5 text-gray-500">or</div>

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
          Sign up with Google
        </button>

        <p className="text-sm mt-6 text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
