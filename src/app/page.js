"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Data for the different sections
const topics = [
  {
    title: "What is Next.js?",
    emoji: "❓",
    desc:
      "Next.js is an open-source React framework that enables a new paradigm of web development. It provides features like Server-Side Rendering (SSR) and Static Site Generation (SSG) out of the box, allowing developers to create highly performant, SEO-friendly, and production-ready applications. It builds on React to add a robust routing system, API routes, and advanced optimizations.",
  },
  {
    title: "Why Next.js?",
    emoji: "🚀",
    desc:
      "Next.js is a popular choice for building modern web applications due to its performance benefits. By pre-rendering pages on the server, it delivers a fast initial load time and improves search engine optimization (SEO). Its built-in features, such as code-splitting, automatic image optimization, and file-based routing, significantly reduce development time and improve the overall developer experience.",
  },
  {
    title: "How does Next.js work?",
    emoji: "⚙️",
    desc:
      "At its core, Next.js works by pre-rendering pages. It can generate static HTML files at build time (Static Site Generation) or render pages on each request (Server-Side Rendering). The framework uses a file-system based router, where each file in the 'app' directory (or 'pages' directory in older versions) becomes a route. This structure simplifies routing and makes it intuitive for developers.",
  },
  {
    title: "React vs Next.js",
    emoji: "⚔️",
    desc:
      "React is a JavaScript library for building user interfaces, while Next.js is a full-stack framework built on top of React. React focuses on the view layer of an application, typically rendering in the browser (client-side rendering). Next.js, on the other hand, extends React with powerful features like server-side rendering, static site generation, and a complete routing and API system, making it suitable for full-fledged applications.",
  },
  {
    title: "Client Components",
    emoji: "🧑‍💻",
    desc:
      "Client Components are a new feature in Next.js that render on the client side in the browser. They are marked with the `'use client'` directive at the top of the file. Client Components are essential for adding interactivity to your application, as they can use browser-specific APIs, hooks like `useState` and `useEffect`, and event listeners like `onClick`.",
  },
  {
    title: "Server Components",
    emoji: "🖥️",
    desc:
      "Server Components are a zero-bundle-size React feature that allows components to be rendered on the server. They have several benefits, including improved performance, better SEO, and direct access to server resources like databases and file systems. They are the default component type in Next.js's App Router and cannot use client-side hooks or browser APIs.",
  },
  {
    title: "Routing in Next.js",
    emoji: "🗺️",
    desc:
      "Next.js simplifies routing by using a file-system based approach. For example, a file named `page.js` inside the `app/about` directory automatically creates a route for `/about`. This eliminates the need for manual route configuration. Dynamic routing is also supported by using square brackets, such as `app/posts/[id]/page.js` to create dynamic routes for individual blog posts.",
  },
  {
    title: "Data Fetching",
    emoji: "📦",
    desc:
      "Next.js provides several powerful data fetching methods to optimize performance. You can fetch data on the server using `async` components for Server-Side Rendering (SSR) or `fetch` for Static Site Generation (SSG). This allows you to choose the best rendering strategy for each page, from dynamic pages that need fresh data on every request to static pages that can be built once and served quickly from a CDN.",
  },
  {
    title: "Styling in Next.js",
    emoji: "🎨",
    desc:
      "Next.js supports various styling methods. You can use CSS Modules for scoped CSS, Tailwind CSS for utility-first styling, or traditional global CSS. The framework also optimizes CSS to ensure a fast and efficient styling pipeline, such as automatically minifying and prefixing CSS properties. This flexibility allows you to choose the best styling approach for your project.",
  },
  {
    title: "Project Structure",
    emoji: "📁",
    desc:
      "A typical Next.js project in the App Router uses a clear directory structure. The `app` directory contains all your routes and components. The `layout.js` file defines the shared UI for a route segment and its children, while the `page.js` file is used to define the unique UI of a route. You can also have a `components` directory for reusable UI components and a `lib` directory for server utilities.",
  },
  {
    title: "Image Optimization",
    emoji: "🖼️",
    desc:
      "Next.js includes a powerful `<Image>` component that automatically optimizes images. It resizes, compresses, and serves images in modern formats like WebP. This dramatically improves page load performance and reduces bandwidth consumption without requiring any manual configuration. The `<Image>` component also prevents Cumulative Layout Shift (CLS) by automatically handling image dimensions.",
  },
  {
    title: "Environment Variables",
    emoji: "🔒",
    desc:
      "Next.js has built-in support for environment variables, allowing you to manage sensitive information like API keys. You can use `.env.local` to define variables that are only available on the server and `NEXT_PUBLIC_` prefixed variables for variables that should be exposed to the browser. This ensures that sensitive information is kept secure and not bundled in the client-side code.",
  },
];

const techData = [
  { name: "React", value: 28, color: "#61dafb" },
  { name: "JavaScript", value: 30, color: "#f7df1e" },
  { name: "TypeScript", value: 18, color: "#3178c6" },
  { name: "Next.js", value: 12, color: "#000000" },
  { name: "Tailwind", value: 7, color: "#38bdf8" },
  { name: "Node.js", value: 3, color: "#68a063" },
  { name: "MongoDB", value: 2, color: "#4db33d" },
];

const features = [
  "Server-Side Rendering (SSR)",
  "Static Site Generation (SSG)",
  "File-based Routing",
  "API Routes",
  "Middleware",
  "Optimized Images & Fonts",
  "Internationalization",
  "Built-in CSS Support",
];

const stylingMethods = [
  "Tailwind CSS",
  "CSS Modules",
  "Styled Components",
  "Vanilla CSS",
  "SCSS / SASS",
  "PostCSS",
  "Emotion",
  "Inline Styles",
  "CSS-in-JS (e.g., Stitches)",
  "Bootstrap",
  "Chakra UI",
  "Material UI (MUI)"
];

const codeSnippets = [
  {
    id: 1,
    title: "Next.js Page Component (App Router)",
    code: `"use client";

export default function HomePage() {
  return <h1 className="text-3xl font-bold">Welcome to Next.js 13+</h1>;
}`,
  },
  {
    id: 2,
    title: "Dark Mode Toggle",
    code: `import { useState } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  return (
    <button onClick={() => setDark(!dark)}>
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}`,
  },
  {
    id: 3,
    title: "Tailwind Config Extension",
    code: `// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [],
};`,
  },
  {
    id: 4,
    title: "UseEffect in Client Component",
    code: `"use client";

import { useEffect } from "react";

export default function EffectExample() {
  useEffect(() => {
    console.log("Mounted!");
  }, []);

  return <div>Check console</div>;
}`,
  },
  {
    id: 5,
    title: "Client Component Declaration",
    code: `"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}`,
  },
  {
    id: 6,
    title: "Dynamic Route (App Router)",
    code: `// File: app/blog/[slug]/page.jsx

export async function generateStaticParams() {
  const posts = await fetchPosts();
  return posts.map(post => ({ slug: post.slug }));
}

export default function BlogPost({ params }) {
  return <div>Slug: {params.slug}</div>;
}`,
  },
  {
    id: 7,
    title: "Page Metadata in App Router",
    code: `export const metadata = {
  title: "About Page",
  description: "Learn more about us.",
};

export default function AboutPage() {
  return <h1>About Us</h1>;
}`,
  },
  {
    id: 8,
    title: "Fetching Data in Server Component",
    code: `async function getData() {
  const res = await fetch("https://api.example.com/data");
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}`,
  },
];

const allResources = [
  // -- First 12 --
  { name: "Next.js Docs", url: "https://nextjs.org/docs" },
  { name: "React Docs", url: "https://reactjs.org/docs/getting-started.html" },
  { name: "Tailwind CSS", url: "https://tailwindcss.com/docs" },
  { name: "SWR", url: "https://swr.vercel.app/" },
  { name: "Zustand", url: "https://zustand-demo.pmnd.rs/" },
  { name: "Recharts", url: "https://recharts.org/en-US/" },
  { name: "Framer Motion", url: "https://www.framer.com/motion/" },
  { name: "React Router", url: "https://reactrouter.com/" },
  { name: "Formik", url: "https://formik.org/" },
  { name: "Apollo Client", url: "https://www.apollographql.com/docs/react/" },
  { name: "Jest", url: "https://jestjs.io/docs/getting-started" },
  { name: "Storybook", url: "https://storybook.js.org/" },

  // -- Next 12 --
  { name: "ESLint", url: "https://eslint.org/docs/user-guide/getting-started" },
  { name: "Prettier", url: "https://prettier.io/docs/en/index.html" },
  { name: "Redux", url: "https://redux.js.org/introduction/getting-started" },
  { name: "React Query", url: "https://react-query.tanstack.com/" },
  { name: "GraphQL", url: "https://graphql.org/learn/" },
  { name: "Babel", url: "https://babeljs.io/docs/en/" },
  { name: "Webpack", url: "https://webpack.js.org/concepts/" },
  { name: "Vite", url: "https://vitejs.dev/guide/" },
  { name: "React Testing Library", url: "https://testing-library.com/docs/react-testing-library/intro/" },
  { name: "Chakra UI", url: "https://chakra-ui.com/docs/getting-started" },
  { name: "Material UI", url: "https://mui.com/getting-started/installation/" },
  { name: "Sass", url: "https://sass-lang.com/documentation" },
];

const ITEMS_PER_PAGE = 2;

// Custom hook to detect scroll position for animations
function useFadeOnScroll() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 100) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return visible;
}

// Separate component for the Code Snippets section
function CodeSnippetsSection({ copyToClipboard }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(codeSnippets.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentSnippets = codeSnippets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <section className="mb-16 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center text-indigo-700 dark:text-indigo-400">
        📋 Code Snippets (click to copy)
      </h2>
      {currentSnippets.map(({ id, title, code }) => (
        <motion.div
          key={id}
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.03 }}
          whileFocus={{ scale: 1.03 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => copyToClipboard(code)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") copyToClipboard(code);
          }}
          aria-label={`Copy code snippet: ${title}`}
          className="mb-8 relative group cursor-pointer rounded-xl p-6 ring-1 ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700 bg-white dark:bg-gray-900"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-400 flex items-center gap-2">
            <span>🧑‍💻</span> {title}
          </h3>
          <pre className="whitespace-pre-wrap text-sm rounded p-4 overflow-x-auto font-mono max-h-56 bg-transparent text-gray-800 dark:text-gray-200">
            {code}
          </pre>
          <span
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500 dark:text-indigo-300 select-none"
            aria-hidden="true"
          >
            📋 Click to copy
          </span>
        </motion.div>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-500 hover:bg-indigo-100 dark:hover:bg-gray-700 disabled:opacity-40 transition"
          >
            ⬅️ Prev
          </button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded-full transition ${currentPage === idx + 1
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 dark:bg-gray-700  hover:bg-indigo-100 dark:hover:bg-gray-600"
                }`}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-lg border border-indigo-500 text-indigo-500 hover:bg-indigo-100 dark:hover:bg-gray-700 disabled:opacity-40 transition"
          >
            Next ➡️
          </button>
        </div>
      )}
    </section>
  );
}

// Separate component for the Resources section
function ResourcesSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleResources = showAll ? allResources : allResources.slice(0, 12);

  // Split into two columns
  const leftColumn = visibleResources.filter((_, i) => i % 2 === 0);
  const rightColumn = visibleResources.filter((_, i) => i % 2 !== 0);

  return (
    <section className="mb-16 max-w-4xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-indigo-700 dark:text-indigo-400 text-center"
      >
        📚 Resources
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
        <ul className="list-disc list-inside space-y-2 ">
          <AnimatePresence>
            {leftColumn.map((res, idx) => (
              <motion.li
                key={res.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
              >
                <Link
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-indigo-600 dark:hover:text-indigo-500"
                >
                  {res.name}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
        <ul className="list-disc list-inside space-y-2 ">
          <AnimatePresence>
            {rightColumn.map((res, idx) => (
              <motion.li
                key={res.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
              >
                <Link
                  href={res.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-indigo-600 dark:hover:text-indigo-500"
                >
                  {res.name}
                </Link>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>

      {/* Toggle Button */}
      <div className="mt-6 text-center">
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-4 px-5 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          {showAll ? "🔼 See Less" : "🔽 See More"}
        </button>
      </div>
    </section>
  );
}

// The main Home component which composes the other components
export default function Home() {
  const [dark, setDark] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedTopic, setExpandedTopic] = useState(null);

  // useEffect for theme management
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
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

  const fadeIn = useFadeOnScroll();

  // Updated copy function with a custom message box instead of alert()
  const copyToClipboard = (code) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code);
      } else {
        const el = document.createElement('textarea');
        el.value = code;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <main
      className={`min-h-screen font-sans px-6 py-12 max-w-7xl mx-auto transition-colors duration-500 ease-in-out rounded-2xl shadow-inner ${dark
        ? "bg-gray-950 text-gray-200"
        : "bg-gray-50 text-gray-900"
        }`}
    >

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

      {/* Copy notification message */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 right-6 z-50 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-xl"
          >
            Code copied to clipboard!
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-center"
      >
        <h1 className="text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">
          🌟 Learn Next.js Essentials
        </h1>
        <p className="text-lg text-indigo-600 dark:text-indigo-300 max-w-2xl mx-auto">
          A beginner-friendly guide to understanding Next.js, React, and modern
          web development concepts.
        </p>
      </motion.header>

      {/* Topics Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {topics.map(({ title, emoji, desc }, i) => (
          <motion.article
            key={i}
            tabIndex={0}
            initial={{ opacity: 0, y: 15 }}
            whileHover={{ scale: 1.05 }}
            whileFocus={{ scale: 1.05 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="cursor-pointer relative rounded-3xl p-6 ring-1 ring-gray-300 dark:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-700 flex flex-col items-center text-center"
            aria-label={`${title} section`}
          >
            <span className="block text-4xl mb-3 select-none">{emoji}</span>
            <h2 className="text-xl font-bold text-indigo-700 dark:text-indigo-400 line-clamp-2">
              {title}
            </h2>
            <p className="leading-relaxed text-sm mt-2  line-clamp-4">
              {desc}
            </p>
          </motion.article>
        ))}
      </section>

      {/* --- */}
      <section className="mb-20 max-w-6xl mx-auto px-5 py-8 rounded-3xl  backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-2xl space-y-6">

        {/* 1. Performance Optimization */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-600 to-violet-700 text-white shadow-md">
          <h2 className="text-3xl font-extrabold mb-6 text-center">⚡ Performance Optimization</h2>
          <ul className="list-disc list-inside space-y-3 text-lg">
            <li><strong>Static Optimization:</strong> Pre-renders pages as static HTML.</li>
            <li><strong>Image & Font Optimization:</strong> Optimized via <code className="bg-white/20 px-1 rounded">@next/font</code> and <code className="bg-white/20 px-1 rounded">&lt;Image&gt;</code>.</li>
            <li><strong>Code Splitting:</strong> Only loads required JS per page.</li>
            <li><strong>Prefetching:</strong> Auto-prefetches visible links.</li>
          </ul>
        </div>

        {/* 2. Authentication & Authorization */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-fuchsia-500 via-red-500 to-orange-400 text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">🔑 Authentication & Authorization</h2>
          <p className="mb-4">Secure your app with <strong>NextAuth.js</strong> or <strong>Firebase</strong>.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Protected Routes:</strong> Use middleware before rendering pages.</li>
            <li><strong>API Security:</strong> Validate tokens/sessions server-side.</li>
            <li><strong>Sessions:</strong> Easily manage user sessions.</li>
          </ul>
        </div>

        {/* 3. API Routes & Middleware */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-200 via-sky-300 to-blue-400 dark:from-indigo-900/70 dark:via-indigo-800/70 dark:to-indigo-700/70 text-gray-900 dark:text-white backdrop-blur-md shadow-inner">
          <h2 className="text-3xl font-bold mb-4 text-center">⚙️ API Routes & Middleware</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Custom APIs:</strong> Use <code>/api/</code> folder for REST or GraphQL.</li>
            <li><strong>Middleware:</strong> Add auth, redirects, and logic before render.</li>
            <li><strong>Serverless Functions:</strong> Each route becomes a scalable function.</li>
          </ul>
        </div>

        {/* 4. Internationalization (i18n) */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-300 via-teal-400 to-cyan-500 dark:from-purple-800 dark:via-indigo-800 dark:to-blue-900 text-gray-900 dark:text-white shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">🌎 Internationalization (i18n)</h2>
          <p className="mb-4">Serve multiple languages with locale-based routing.</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>i18n Routing:</strong> Auto route prefixes (e.g. `/en/about`).</li>
            <li><strong>next-i18next:</strong> Handle translations smoothly.</li>
            <li><strong>Locale Detection:</strong> Detect browser language.</li>
          </ul>
        </div>

        {/* 5. Deployment & Hosting */}
        <div className="p-8 rounded-2xl bg-gradient-to-br from-yellow-300 via-amber-400 to-orange-500 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300/30 dark:border-white/10">
          <h2 className="text-3xl font-bold mb-4 text-center">🌐 Deployment & Hosting</h2>
          <p className="mb-4">Next.js deploys easily—especially with <strong>Vercel</strong>.</p>
          <ol className="list-decimal list-inside space-y-2">
            <li><strong>Vercel:</strong> Zero config, optimized hosting.</li>
            <li><strong>Other Platforms:</strong> Netlify, AWS, etc.</li>
            <li><strong>CI/CD:</strong> GitHub/GitLab pipelines supported.</li>
          </ol>
        </div>

      </section>


      {/* --- */}

      {/* Key Features Section */}
      <section className="mb-16 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-8 text-center text-indigo-700 dark:text-indigo-400"
        >
          ✨ Key Features of Next.js
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "File-based Routing System",
            "API Routes for Backend Logic",
            "Built-in Image Optimization",
            "Server-side Rendering (SSR)",
            "Static Site Generation (SSG)",
            "Incremental Static Regeneration (ISR)",
            "App Router Support",
            "SEO Friendly by Default",
            "Built-in CSS & Sass Support",
            "Full TypeScript Support",
            "Automatic Code Splitting",
            "Optimized Bundle Splitting",
            "Middleware Support",
            "Built-in Analytics",
            "Zero Config Deployment on Vercel",
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-indigo-100 dark:bg-indigo-900 rounded-xl p-5 text-center font-medium shadow-lg text-gray-700 dark:text-gray-200 hover:scale-[1.03] transition-transform"
            >
              {feature}
            </motion.div>
          ))}
        </div>
      </section>


      {/* --- */}

      {/* Tech Usage Pie Chart & Bar Chart Section */}
      <section className="mb-16 max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 p-4 py-10 rounded-3xl bg-white dark:bg-gray-800 shadow-xl">
        <div className="flex-1 w-full lg:w-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center"
          >
            📊 Tech Usage Distribution
          </motion.h2 >
          <div className="flex justify-center">
            <ResponsiveContainer width={350} height={350}>
              <PieChart>
                <Pie
                  data={techData}
                  cx="50%"
                  cy="50%"
                  outerRadius={110}
                  dataKey="value"
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  labelLine={false}
                >
                  {techData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value, name) => [`${value}%`, name]}
                  contentStyle={{
                    backgroundColor: dark ? "#1a202c" : "#fff",
                    borderRadius: "8px",
                    border: "none",
                    color: dark ? "#fff" : "#000",
                  }}
                />
                <Legend verticalAlign="bottom" height={36} wrapperStyle={{ color: dark ? "#fff" : "#000" }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="flex-1 w-full lg:w-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center"
          >
            📈 Popularity by Tool
          </motion.h2 >
          <ResponsiveContainer width={350} height={350}>
            <BarChart data={techData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* --- */}

      {/* Project Structure Section */}
      <section className="mb-16 max-w-4xl mx-auto p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">
          📁 Project Structure
        </h2 >
        <pre className="bg-white dark:bg-gray-900 rounded-lg p-4 overflow-x-auto text-sm text-gray-800 dark:text-gray-200">
          {`my-app/
├── app/
│   ├── layout.js       # Root layout, shared UI
│   ├── page.js         # Root page
│   └── dashboard/
│       └── page.js     # Dashboard route
├── public/             # Static assets (images, etc.)
├── components/         # Reusable components
├── lib/                # Utility functions
├── package.json
└── next.config.js`}
        </pre>
      </section>

      {/* --- */}

      {/* Code Snippets Section */}
      <CodeSnippetsSection codeSnippets={codeSnippets} copyToClipboard={copyToClipboard} />

      {/* --- */}

      {/* Styling Methods Section */}
      <section className="mb-16 max-w-4xl mx-auto p-8 rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-md">
        <h2 className="text-4xl font-bold mb-6 text-center text-indigo-700 dark:text-indigo-400">
          🎨 Styling Methods
        </h2 >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stylingMethods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center shadow-sm font-medium text-gray-800 dark:text-gray-200"
            >
              {method}
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- */}

      {/* Resources Section */}
      <ResourcesSection />
    </main>
  );
}
