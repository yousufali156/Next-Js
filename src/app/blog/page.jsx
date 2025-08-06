"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaHeart, FaSearch, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

// This is the functional component for the blog page.
export default function BlogPage() {
  // An array of objects, where each object represents a blog post idea.
  const blogIdeas = [
    {
      id: 1,
      englishTitle: 'The Ultimate Guide to Next.js for Beginners',
      bengaliTitle: 'নতুনদের জন্য Next.js-এর একটি সম্পূর্ণ নির্দেশিকা',
      description: 'Next.js কী, কেন এটি ব্যবহার করা হয় এবং একটি নতুন প্রজেক্ট কীভাবে শুরু করতে হয়, তার একটি বিস্তারিত ভূমিকা।',
      content: 'Here is the detailed content for the blog post about getting started with Next.js for beginners. It covers project setup, basic routing, and key concepts like SSR and SSG. The guide is designed to be easy to follow with practical code examples.',
      likes: 12,
    },
    {
      id: 2,
      englishTitle: 'Next.js vs. React: When to Choose Which?',
      bengaliTitle: 'Next.js বনাম React: কখন কোনটি বেছে নেবেন?',
      description: 'Next.js এবং React-এর মধ্যে প্রধান পার্থক্যগুলো তুলে ধরা এবং বিভিন্ন পরিস্থিতিতে সঠিক টুলটি বেছে নেওয়ার পরামর্শ।',
      content: 'This blog post provides a comprehensive comparison between Next.js and React. It delves into their core differences, such as rendering methods, routing, and SEO capabilities, to help developers make an informed decision for their projects.',
      likes: 8,
    },
    {
      id: 3,
      englishTitle: 'A Deep Dive into Next.js App Router',
      bengaliTitle: 'Next.js-এর App Router নিয়ে বিস্তারিত আলোচনা',
      description: 'Next.js ১৪-এর নতুন App Router-এর গঠন, সুবিধা এবং Page Router থেকে এর পার্থক্য সম্পর্কে বিস্তারিত।',
      content: 'An in-depth look into the new App Router introduced in Next.js 14. This post explains its directory structure, the use of `layout.js` and `page.js` files, and how it improves performance and developer experience compared to the legacy Page Router.',
      likes: 25,
    },
    {
      id: 4,
      englishTitle: 'Building a Static Blog with Next.js and MDX',
      bengaliTitle: 'Next.js এবং MDX ব্যবহার করে একটি স্ট্যাটিক ব্লগ তৈরি',
      description: 'কীভাবে Next.js, MDX এবং Tailwind CSS ব্যবহার করে একটি দ্রুত ও স্ট্যাটিক ব্লগসাইট তৈরি করা যায়, তার একটি ধাপে ধাপে নির্দেশিকা।',
      content: 'A step-by-step tutorial on building a high-performance static blog using Next.js. The guide covers setting up MDX for content writing, integrating Tailwind CSS for styling, and deploying the site for free on platforms like Vercel.',
      likes: 15,
    },
    {
      id: 5,
      englishTitle: 'Server-Side Rendering (SSR) in Next.js Explained',
      bengaliTitle: 'Next.js-এ Server-Side Rendering (SSR) এর বিস্তারিত ব্যাখ্যা',
      description: 'SSR কী, এর সুবিধা কী এবং Next.js-এ `getServerSideProps` কীভাবে কাজ করে, তা উদাহরণসহ আলোচনা।',
      content: 'This article breaks down the concept of Server-Side Rendering (SSR) in Next.js. It explains how SSR improves SEO and initial page load performance, with practical examples of using `getServerSideProps` for data fetching.',
      likes: 30,
    },
    {
      id: 6,
      englishTitle: 'Client-Side Rendering (CSR) vs. Server-Side Rendering (SSR) in Next.js',
      bengaliTitle: 'Next.js-এ Client-Side Rendering (CSR) বনাম Server-Side Rendering (SSR)',
      description: 'CSR এবং SSR-এর মধ্যেকার পার্থক্য, তাদের ব্যবহারক্ষেত্র এবং Next.js-এ কীভাবে উভয় পদ্ধতি ব্যবহার করা যায় তার তুলনামূলক বিশ্লেষণ।',
      content: 'A comparative analysis of Client-Side Rendering (CSR) and Server-Side Rendering (SSR) within the Next.js framework. The post discusses the pros and cons of each approach and provides guidance on when to use them for optimal performance and user experience.',
      likes: 18,
    },
    {
      id: 7,
      englishTitle: 'Enhancing SEO with Next.js: A Complete Guide',
      bengaliTitle: 'Next.js দিয়ে SEO-এর উন্নতি: একটি পূর্ণাঙ্গ নির্দেশিকা',
      description: 'Next.js-এর মাধ্যমে কীভাবে সার্চ ইঞ্জিন অপটিমাইজেশন (SEO) উন্নত করা যায়, যেমন মেটা ট্যাগ, Sitemap এবং Server-Side Rendering ব্যবহার করে।',
      content: 'A comprehensive guide on boosting your website’s SEO using Next.js. It covers essential techniques like dynamic meta tags, structured data, and the role of server-side rendering in making your site more discoverable by search engines.',
      likes: 42,
    },
    {
      id: 8,
      englishTitle: 'The Power of Dynamic Routing in Next.js',
      bengaliTitle: 'Next.js-এর Dynamic Routing-এর ক্ষমতা',
      description: 'কীভাবে Next.js-এ ডায়নামিক রাউটিং তৈরি করতে হয় এবং URL-এর উপর ভিত্তি করে ডেটা লোড করা যায়, তার ব্যাখ্যা।',
      content: 'This post explains how to implement dynamic routing in Next.js to create flexible and scalable applications. It covers setting up dynamic routes and fetching data based on URL parameters to build pages for individual items like blog posts or products.',
      likes: 21,
    },
    {
      id: 9,
      englishTitle: 'State Management in Next.js: Choosing the Right Tool',
      bengaliTitle: 'Next.js-এ স্টেট ম্যানেজমেন্ট: সঠিক টুলটি বেছে নেওয়া',
      description: 'useState, useContext, Redux এবং Zustand-এর মতো বিভিন্ন স্টেট ম্যানেজমেন্ট টুলের তুলনামূলক বিশ্লেষণ এবং কখন কোনটি ব্যবহার করা উচিত তার পরামর্শ।',
      content: 'An overview of various state management strategies for Next.js applications. This article compares built-in React hooks like `useState` and `useContext` with popular libraries like Redux and Zustand, helping you choose the best fit for your project’s needs.',
      likes: 19,
    },
    {
      id: 10,
      englishTitle: 'Optimizing Images in Next.js for Performance',
      bengaliTitle: 'পারফরম্যান্সের জন্য Next.js-এ ইমেজ অপটিমাইজেশন',
      description: 'Next.js-এর `<Image>` কম্পোনেন্ট ব্যবহার করে কীভাবে ইমেজ লোডিং উন্নত করা যায় এবং পারফরম্যান্স বাড়ানো যায়, তার নির্দেশিকা।',
      content: 'A practical guide to optimizing images in Next.js. Learn how to use the built-in `<Image>` component to automatically handle image sizing, optimization, and lazy loading for faster page loads and improved Core Web Vitals.',
      likes: 33,
    },
    {
      id: 11,
      englishTitle: 'Building a Scalable E-commerce Store with Next.js',
      bengaliTitle: 'Next.js দিয়ে একটি স্কেলেবল ই-কমার্স স্টোর তৈরি',
      description: 'Next.js, Stripe এবং একটি Headless CMS ব্যবহার করে একটি আধুনিক ই-কমার্স প্ল্যাটফর্ম তৈরির পদ্ধতি।',
      content: 'A detailed walkthrough on building a modern e-commerce platform using Next.js, Stripe for payments, and a Headless CMS for product management.',
      likes: 27,
    },
    {
      id: 12,
      englishTitle: 'Handling Forms and Data with Next.js Server Actions',
      bengaliTitle: 'Next.js Server Actions দিয়ে ফর্ম এবং ডেটা হ্যান্ডেল করা',
      description: 'Next.js ১৪-এর Server Actions ব্যবহার করে কীভাবে সার্ভার-সাইডে ফর্ম সাবমিশন এবং ডেটা প্রসেসিং করা যায়, তার উদাহরণ।',
      content: 'This guide explores Next.js 14\'s Server Actions, showing how to handle form submissions and data mutations directly on the server without needing API routes, leading to cleaner code and better performance.',
      likes: 14,
    },
    {
      id: 13,
      englishTitle: 'The Magic of Incremental Static Regeneration (ISR) in Next.js',
      bengaliTitle: 'Next.js-এ Incremental Static Regeneration (ISR) এর জাদু',
      description: 'ISR কী, কীভাবে এটি স্ট্যাটিক সাইটের সুবিধা এবং ডায়নামিক কন্টেন্টের রিফ্রেশ-এর মধ্যে ভারসাম্য রক্ষা করে, তার আলোচনা।',
      content: 'An explanation of Incremental Static Regeneration (ISR) in Next.js, a feature that allows you to update static pages at runtime without rebuilding the entire site. This is ideal for blogs and e-commerce sites with frequently changing content.',
      likes: 22,
    },
    {
      id: 14,
      englishTitle: 'Securing Your Next.js Application: A Best Practices Guide',
      bengaliTitle: 'আপনার Next.js অ্যাপ্লিকেশন সুরক্ষিত রাখা: সেরা অনুশীলনের নির্দেশিকা',
      description: 'JWT, OAuth-এর মতো প্রমাণীকরণ পদ্ধতি, এবং অন্যান্য নিরাপত্তা সংক্রান্ত পরামর্শ।',
      content: 'A guide to securing your Next.js application, covering topics like authentication with JWT and OAuth, protecting routes, and preventing common security vulnerabilities like XSS and CSRF.',
      likes: 38,
    },
    {
      id: 15,
      englishTitle: 'How to Deploy a Next.js App on Vercel',
      bengaliTitle: 'Vercel-এ একটি Next.js অ্যাপ কীভাবে স্থাপন করা যায়',
      description: 'একটি Next.js অ্যাপ্লিকেশন Vercel-এ কীভাবে সহজে স্থাপন এবং কাস্টম ডোমেইন কনফিগার করতে হয়, তার ধাপে ধাপে প্রক্রিয়া।',
      content: 'A step-by-step tutorial on deploying your Next.js application to Vercel, the platform built by the creators of Next.js. It covers linking your Git repository, configuring environment variables, and setting up a custom domain.',
      likes: 29,
    },
    {
      id: 16,
      englishTitle: 'Using Environment Variables in Next.js',
      bengaliTitle: 'Next.js-এ Environment Variables ব্যবহার',
      description: '`next.config.js` এবং `.env` ফাইল ব্যবহার করে বিভিন্ন পরিবেশে কীভাবে পরিবেশের ভেরিয়েবল সেট করা যায়, তার ব্যাখ্যা।',
      content: 'This post explains how to use environment variables in Next.js to manage different settings for development and production environments. It covers creating `.env.local`, `.env.development`, and `.env.production` files.',
      likes: 11,
    },
    {
      id: 17,
      englishTitle: 'Next.js API Routes: Building a Full-Stack Application',
      bengaliTitle: 'Next.js API Routes: একটি ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরি',
      description: 'Next.js-এর API Routes ব্যবহার করে কীভাবে একটি সার্ভারলেস ব্যাকএন্ড তৈরি করা যায়, তার একটি প্রজেক্ট-ভিত্তিক উদাহরণ।',
      content: 'A project-based guide to building a full-stack application using Next.js. It focuses on creating serverless API routes to handle backend logic, database interactions, and API integrations.',
      likes: 45,
    },
    {
      id: 18,
      englishTitle: 'The Role of `next/head` for SEO and Meta Tags',
      bengaliTitle: 'SEO এবং মেটা ট্যাগের জন্য `next/head`-এর ভূমিকা',
      description: '`<Head>` কম্পোনেন্ট ব্যবহার করে কীভাবে প্রতিটি পেজের জন্য মেটা ট্যাগ, টাইটেল এবং অন্যান্য হেড এলিমেন্ট ডায়নামিকভাবে সেট করা যায়, তার নির্দেশনা।',
      content: 'An article on the importance of the `<Head>` component in Next.js for SEO. It explains how to dynamically set meta tags, titles, and other header elements to improve your site\'s visibility on search engines and social media.',
      likes: 16,
    },
    {
      id: 19,
      englishTitle: 'Getting Started with TypeScript in a Next.js Project',
      bengaliTitle: 'একটি Next.js প্রজেক্টে TypeScript-এর সাথে কাজ শুরু',
      description: 'Next.js-এর সাথে TypeScript ব্যবহার করার সুবিধা এবং কীভাবে একটি নতুন প্রজেক্টে এটি কনফিগার করতে হয়, তার ব্যাখ্যা।',
      content: 'A beginner\'s guide to integrating TypeScript into a Next.js project. This post highlights the benefits of using a typed language for large-scale applications and provides a clear path for getting started.',
      likes: 31,
    },
    {
      id: 20,
      englishTitle: 'Building Accessible Websites with Next.js',
      bengaliTitle: 'Next.js দিয়ে সহজে অ্যাক্সেসযোগ্য ওয়েবসাইট তৈরি',
      description: 'WCAG (Web Content Accessibility Guidelines) মেনে কীভাবে Next.js কম্পোনেন্ট এবং ডিজাইন প্যাটার্ন ব্যবহার করে অ্যাক্সেসযোগ্য ওয়েবসাইট তৈরি করা যায়, তার টিপস।',
      content: 'This post provides tips and best practices for building accessible websites with Next.js, focusing on WCAG standards. It covers semantic HTML, ARIA attributes, and keyboard navigation to ensure your site is usable by everyone.',
      likes: 13,
    },
    {
      id: 21,
      englishTitle: 'How to Fetch Data in Next.js: A Modern Approach',
      bengaliTitle: 'Next.js-এ ডেটা লোডিং: একটি আধুনিক পদ্ধতি',
      description: '`fetch` API, SWR, React Query এবং `use` Hook ব্যবহার করে ডেটা লোডিংয়ের বিভিন্ন পদ্ধতির তুলনা।',
      content: 'A comparison of modern data fetching methods in Next.js, including the native `fetch` API, client-side libraries like SWR and React Query, and the new `use` hook in React 18. It helps you choose the right approach for your needs.',
      likes: 26,
    },
    {
      id: 22,
      englishTitle: 'Integrating a Headless CMS with Next.js',
      bengaliTitle: 'Next.js-এর সাথে একটি Headless CMS ইন্টিগ্রেট করা',
      description: 'Strapi, Sanity, বা Contentful-এর মতো একটি Headless CMS ব্যবহার করে কীভাবে ডায়নামিক কন্টেন্ট ম্যানেজ করা যায়।',
      content: 'A tutorial on integrating a Headless CMS with Next.js to manage dynamic content. It explains how to fetch data from a CMS API and render it on your Next.js site, making content management easy and flexible.',
      likes: 17,
    },
    {
      id: 23,
      englishTitle: 'Performance Monitoring in Next.js with Vercel Analytics',
      bengaliTitle: 'Vercel Analytics দিয়ে Next.js-এর পারফরম্যান্স মনিটরিং',
      description: 'Vercel Analytics ব্যবহার করে কীভাবে আপনার Next.js অ্যাপ্লিকেশনের পারফরম্যান্স ট্র্যাক করা যায়, তার বিস্তারিত।',
      content: 'This post details how to use Vercel Analytics to monitor and improve the performance of your Next.js application. It covers Core Web Vitals, page load times, and other key metrics to ensure a great user experience.',
      likes: 34,
    },
    {
      id: 24,
      englishTitle: 'From Zero to Hero: Building a Portfolio with Next.js',
      bengaliTitle: 'পোর্টফোলিও তৈরি: শূন্য থেকে হিরো - Next.js দিয়ে',
      description: 'একজন ডেভেলপার হিসেবে কীভাবে Next.js দিয়ে আপনার নিজের জন্য একটি পেশাদার এবং কার্যকরী পোর্টফোলিও ওয়েবসাইট তৈরি করতে পারেন, তার টিউটোরিয়াল।',
      content: 'A step-by-step guide on creating a professional and high-performing portfolio website using Next.js. It covers everything from design to deployment, showcasing your skills to potential employers.',
      likes: 28,
    },
    {
      id: 25,
      englishTitle: 'The `usePathname` Hook: Understanding Next.js Navigation',
      bengaliTitle: '`usePathname` হুক: Next.js নেভিগেশন বোঝা',
      description: '`usePathname` এবং অন্যান্য নেভিগেশন হুক ব্যবহার করে কীভাবে নেভিগেশন স্টেট ম্যানেজ করতে হয়, তার ব্যাখ্যা।',
      content: 'An explanation of the `usePathname` hook and other navigation hooks in Next.js 13+. It shows how to access the current URL path and other navigation states to build dynamic UI components like active navigation links.',
      likes: 9,
    },
    {
      id: 26,
      englishTitle: 'How to Create a Dark Mode in Next.js with Tailwind CSS',
      bengaliTitle: 'Next.js-এ Tailwind CSS দিয়ে ডার্ক মোড তৈরি',
      description: 'useState এবং localStorage ব্যবহার করে কীভাবে একটি সহজ ডার্ক মোড টগল তৈরি করা যায়, তার একটি সহজ টিউটোরিয়াল।',
      content: 'A simple tutorial on implementing a dark mode toggle in a Next.js application using Tailwind CSS. The guide covers using `useState` for theme management and `localStorage` to persist the user\'s preference.',
      likes: 20,
    },
    {
      id: 27,
      englishTitle: 'Using `next/link` and `next/navigation` for Efficient Routing',
      bengaliTitle: 'কার্যকরী রাউটিংয়ের জন্য `next/link` এবং `next/navigation` ব্যবহার',
      description: '`<Link>` কম্পোনেন্ট এবং নেভিগেশন হুক ব্যবহার করে ক্লায়েন্ট-সাইড নেভিগেশন কীভাবে অপটিমাইজ করা যায়, তার ব্যাখ্যা।',
      content: 'This post details the usage of `<Link>` for client-side navigation and the `next/navigation` hooks for programmatic routing, ensuring a fast and seamless user experience in your Next.js app.',
      likes: 35,
    },
    {
      id: 28,
      englishTitle: 'Next.js Middlewares: A Practical Guide',
      bengaliTitle: 'Next.js Middlewares: একটি ব্যবহারিক নির্দেশিকা',
      description: '`middleware.js` ফাইল ব্যবহার করে কীভাবে আপনার অ্যাপ্লিকেশনে প্রমাণীকরণ বা অন্যান্য লজিক যোগ করা যায়, তার উদাহরণ।',
      content: 'A practical guide to using middleware in Next.js. It shows how to use a `middleware.js` file to run code before a request is completed, which is useful for authentication, redirects, and A/B testing.',
      likes: 10,
    },
    {
      id: 29,
      englishTitle: 'Building a Chat Application with Next.js and Socket.io',
      bengaliTitle: 'Next.js এবং Socket.io দিয়ে একটি চ্যাট অ্যাপ্লিকেশন তৈরি',
      description: 'Next.js API Routes এবং Socket.io ব্যবহার করে একটি রিয়েল-টাইম চ্যাট অ্যাপ্লিকেশন তৈরির পদ্ধতি।',
      content: 'A tutorial on creating a real-time chat application using Next.js API Routes as the backend and Socket.io for handling WebSocket communication, providing a dynamic and interactive user experience.',
      likes: 47,
    },
    {
      id: 30,
      englishTitle: 'A Guide to `next/font` for Optimized Fonts',
      bengaliTitle: 'ফন্ট অপটিমাইজেশনের জন্য `next/font` ব্যবহার',
      description: '`next/font` কম্পোনেন্ট ব্যবহার করে কীভাবে অপটিমাইজড ফন্ট লোড করা যায় এবং লেআউট শিফট (layout shift) এড়ানো যায়, তার নির্দেশনা।',
      content: 'An article on using the built-in `next/font` component to optimize font loading in your Next.js app. It explains how to eliminate render-blocking fonts and reduce Cumulative Layout Shift (CLS) for better performance.',
      likes: 12,
    },
    {
      id: 31,
      englishTitle: 'Integrating Next.js with Firebase: A Complete Stack',
      bengaliTitle: 'Next.js-এর সাথে Firebase ইন্টিগ্রেশন: একটি সম্পূর্ণ স্ট্যাক',
      description: 'Next.js-এর সাথে Firebase Auth, Firestore এবং Storage ব্যবহার করে একটি ফুল-স্ট্যাক অ্যাপ্লিকেশন তৈরির টিউটোরিয়াল।',
      content: 'A full-stack tutorial on integrating Next.js with Firebase services like Authentication, Firestore database, and Cloud Storage to build a robust and scalable application.',
      likes: 23,
    },
    {
      id: 32,
      englishTitle: 'Creating a Multilingual Site with Next.js',
      bengaliTitle: 'Next.js দিয়ে একটি বহুভাষিক সাইট তৈরি',
      description: '`next-i18next` বা অন্যান্য প্যাকেজ ব্যবহার করে একটি বহুভাষিক (multilingual) ওয়েবসাইট তৈরির পদ্ধতি।',
      content: 'A guide to building a multilingual website with Next.js, covering internationalization (i18n) strategies using libraries like `next-i18next` to provide a localized experience for users.',
      likes: 15,
    },
    {
      id: 33,
      englishTitle: 'The `useSearchParams` Hook and Client-Side URL State',
      bengaliTitle: '`useSearchParams` হুক এবং ক্লায়েন্ট-সাইড URL স্টেট',
      description: 'URL-এর query parameter ব্যবহার করে কীভাবে ক্লায়েন্ট-সাইডে স্টেট ম্যানেজ করা যায়, তার উদাহরণ।',
      content: 'An explanation of the `useSearchParams` hook, which allows you to read and modify URL query parameters on the client side, making it easy to manage application state based on the URL.',
      likes: 18,
    },
    {
      id: 34,
      englishTitle: 'Optimizing Next.js Builds with `next.config.js`',
      bengaliTitle: '`next.config.js` দিয়ে Next.js বিল্ড অপটিমাইজ করা',
      description: '`next.config.js` ফাইলে বিভিন্ন কনফিগারেশন অপশন ব্যবহার করে কীভাবে বিল্ড পারফরম্যান্স উন্নত করা যায়, তার টিপস।',
      content: 'This post provides tips and tricks for optimizing your Next.js build process using the `next.config.js` file, covering image domains, custom headers, and other performance-enhancing configurations.',
      likes: 25,
    },
    {
      id: 35,
      englishTitle: 'Building a Dashboard with Next.js and Tailwind CSS',
      bengaliTitle: 'Next.js এবং Tailwind CSS দিয়ে একটি ড্যাশবোর্ড তৈরি',
      description: 'Next.js এবং Tailwind CSS ব্যবহার করে একটি পেশাদার এবং রেসপনসিভ ড্যাশবোর্ড তৈরির একটি প্রজেক্ট-ভিত্তিক টিউটোরিয়াল।',
      content: 'A project-based tutorial on building a professional and responsive dashboard with Next.js and Tailwind CSS. It covers data visualization, component design, and dynamic layouts for a great user experience.',
      likes: 37,
    },
    {
      id: 36,
      englishTitle: 'Handling Errors and Loadings with `error.js` and `loading.js`',
      bengaliTitle: '`error.js` এবং `loading.js` দিয়ে ত্রুটি এবং লোডিং হ্যান্ডেল করা',
      description: 'Next.js-এর `error.js` এবং `loading.js` ফাইল ব্যবহার করে কীভাবে সুন্দর লোডিং এবং এরর স্টেট তৈরি করা যায়, তার ব্যাখ্যা।',
      content: 'This post explains how to use the special `error.js` and `loading.js` files in Next.js 13+ App Router to create clean and user-friendly loading and error states for your application.',
      likes: 14,
    },
    {
      id: 37,
      englishTitle: 'Next.js and Headless WordPress: The Best of Both Worlds',
      bengaliTitle: 'Next.js এবং Headless WordPress: উভয়ের সেরা সমন্বয়',
      description: 'Headless WordPress থেকে ডেটা লোড করার জন্য Next.js ব্যবহার করা এবং এর সুবিধা ও চ্যালেঞ্জ।',
      content: 'A guide to using Next.js with a Headless WordPress setup. It explores the benefits of decoupling the frontend from WordPress and how to fetch data from the WordPress REST API or GraphQL endpoint.',
      likes: 19,
    },
    {
      id: 38,
      englishTitle: 'Building a Serverless API with Next.js and MongoDB',
      bengaliTitle: 'Next.js এবং MongoDB দিয়ে একটি Serverless API তৈরি',
      description: 'Next.js API Routes এবং MongoDB ব্যবহার করে কীভাবে একটি সার্ভারলেস ব্যাকএন্ড তৈরি করা যায়, তার একটি পূর্ণাঙ্গ গাইড।',
      content: 'A complete guide to building a serverless API with Next.js. It demonstrates how to connect to a MongoDB database, handle CRUD operations, and deploy the entire application on a serverless platform.',
      likes: 41,
    },
    {
      id: 39,
      englishTitle: 'Testing Next.js Applications with Jest and React Testing Library',
      bengaliTitle: 'Jest এবং React Testing Library দিয়ে Next.js অ্যাপ্লিকেশন পরীক্ষা করা',
      description: 'একটি Next.js প্রজেক্টে Jest এবং React Testing Library দিয়ে ইউনিট টেস্টিং এবং ইন্টিগ্রেশন টেস্টিং কীভাবে সেট আপ করা যায়, তার নির্দেশিকা।',
      content: 'A guide to setting up and writing tests for your Next.js applications using Jest and React Testing Library. It covers unit tests for components and integration tests for pages and API routes.',
      likes: 22,
    },
    {
      id: 40,
      englishTitle: 'Next.js and SWR: A Match Made in Heaven',
      bengaliTitle: 'Next.js এবং SWR: স্বর্গীয় সমন্বয়',
      description: 'Vercel-এর `swr` লাইব্রেরি ব্যবহার করে কীভাবে ডেটা লোডিংকে আরও সহজ এবং অপটিমাইজ করা যায়, তার ব্যাখ্যা।',
      content: 'An explanation of the SWR library, a powerful data fetching hook developed by Vercel. It shows how SWR simplifies data fetching, caching, and revalidation in your Next.js application.',
      likes: 27,
    },
    {
      id: 41,
      englishTitle: 'Using `next/script` for Third-Party Scripts',
      bengaliTitle: 'থার্ড-পার্টি স্ক্রিপ্টের জন্য `next/script` ব্যবহার',
      description: 'Next.js-এর `<Script>` কম্পোনেন্ট ব্যবহার করে কীভাবে তৃতীয় পক্ষের স্ক্রিপ্ট লোড করা যায়, যা পারফরম্যান্সের উপর খারাপ প্রভাব ফেলে না, তার টিপস।',
      content: 'A guide to using the `next/script` component to manage third-party scripts efficiently. It explains how to load scripts at the right time and in the right place to prevent them from blocking the initial page load.',
      likes: 16,
    },
    {
      id: 42,
      englishTitle: 'Building a Social Media Feed with Next.js and Supabase',
      bengaliTitle: 'Next.js এবং Supabase দিয়ে একটি সোশ্যাল মিডিয়া ফিড তৈরি',
      description: 'Next.js এবং Supabase-এর রিয়েল-টাইম ফিচার ব্যবহার করে একটি সোশ্যাল মিডিয়া ফিড তৈরির একটি টিউটোরিয়াল।',
      content: 'A project-based tutorial on creating a real-time social media feed using Next.js for the frontend and Supabase as a backend. It covers database setup, authentication, and real-time updates.',
      likes: 30,
    },
    {
      id: 43,
      englishTitle: 'The `useRouter` vs. `useSearchParams` vs. `usePathname`',
      bengaliTitle: '`useRouter` বনাম `useSearchParams` বনাম `usePathname`',
      description: 'Next.js-এর বিভিন্ন রাউটার হুকগুলোর মধ্যে পার্থক্য এবং তাদের সঠিক ব্যবহার।',
      content: 'A comparison of the key Next.js router hooks: `useRouter`, `useSearchParams`, and `usePathname`. This post clarifies their distinct purposes and shows when to use each one for effective routing and state management.',
      likes: 24,
    },
    {
      id: 44,
      englishTitle: 'Creating Custom Error Pages in Next.js',
      bengaliTitle: 'Next.js-এ কাস্টম এরর পেজ তৈরি',
      description: '`_error.js` এবং `not-found.js` ফাইল ব্যবহার করে কীভাবে কাস্টম 404 এবং 500 এরর পেজ তৈরি করা যায়, তার ব্যাখ্যা।',
      content: 'A guide to creating custom error pages in Next.js for a better user experience. It explains how to set up `404.js`, `_error.js`, and `not-found.js` to handle different types of errors gracefully.',
      likes: 18,
    },
    {
      id: 45,
      englishTitle: 'Building a Portfolio with Next.js and Framer Motion',
      bengaliTitle: 'Next.js এবং Framer Motion দিয়ে পোর্টফোলিও তৈরি',
      description: 'Next.js-এর সাথে Framer Motion ব্যবহার করে কীভাবে সুন্দর অ্যানিমেশন সহ একটি পোর্টফোলিও তৈরি করা যায়, তার একটি উদাহরণ।',
      content: 'A project-based tutorial on creating a stunning portfolio website with smooth animations using Next.js and the Framer Motion library. It covers creating interactive components and page transitions.',
      likes: 32,
    },
    {
      id: 46,
      englishTitle: 'A Comprehensive Guide to `getStaticProps` and `getStaticPaths`',
      bengaliTitle: '`getStaticProps` এবং `getStaticPaths`-এর একটি সম্পূর্ণ নির্দেশিকা',
      description: 'Static Site Generation (SSG) এর জন্য `getStaticProps` এবং `getStaticPaths` কীভাবে ব্যবহার করা হয়, তার বিস্তারিত ব্যাখ্যা।',
      content: 'An in-depth guide to `getStaticProps` and `getStaticPaths`, the two primary functions for Static Site Generation (SSG) in Next.js. It explains how to generate static pages at build time with dynamic data.',
      likes: 19,
    },
    {
      id: 47,
      englishTitle: 'Next.js for Large-Scale Applications: A Monorepo Approach',
      bengaliTitle: 'বড় মাপের অ্যাপ্লিকেশনের জন্য Next.js: একটি Monorepo পদ্ধতি',
      description: 'Turborepo বা Nx-এর মতো টুল ব্যবহার করে কীভাবে একটি Monorepo-তে Next.js অ্যাপ্লিকেশন তৈরি করা যায়, তার আলোচনা।',
      content: 'This post discusses the benefits of using a monorepo for large-scale Next.js applications and provides a guide on how to set up a monorepo using tools like Turborepo or Nx for improved code sharing and management.',
      likes: 28,
    },
    {
      id: 48,
      englishTitle: '`use-client` and `use-server`: Understanding React Server Components',
      bengaliTitle: '`use-client` এবং `use-server`: React Server Components বোঝা',
      description: 'Next.js-এর Server Components এবং Client Components-এর মধ্যে পার্থক্য এবং `use-client` ও `use-server` এর ব্যবহার।',
      content: 'A deep dive into React Server Components and Client Components in Next.js. It explains the roles of the `use-client` and `use-server` directives and how they enable you to build highly performant, hybrid applications.',
      likes: 21,
    },
    {
      id: 49,
      englishTitle: 'Next.js and CSS Modules: A Best Practices Guide',
      bengaliTitle: 'Next.js এবং CSS Modules: সেরা অনুশীলনের নির্দেশিকা',
      description: 'Next.js-এ CSS মডিউল ব্যবহার করে কীভাবে কম্পোনেন্ট-ভিত্তিক স্টাইল তৈরি করা যায়, যা গ্লোবাল স্টাইলকে প্রভাবিত করে না, তার টিপস।',
      content: 'A guide to using CSS Modules in Next.js for component-based styling. It explains how to avoid style conflicts and write maintainable, scoped CSS for your components.',
      likes: 17,
    },
    {
      id: 50,
      englishTitle: 'Building a Blog with Next.js, Notion API, and Tailwind CSS',
      bengaliTitle: 'Next.js, Notion API এবং Tailwind CSS দিয়ে একটি ব্লগ তৈরি',
      description: 'Notion-কে একটি Headless CMS হিসেবে ব্যবহার করে কীভাবে Next.js দিয়ে একটি ব্লগ তৈরি করা যায়, তার একটি প্রজেক্ট-ভিত্তিক টিউটোরিয়াল।',
      content: 'A project-based tutorial on building a blog using Next.js and Tailwind CSS, with Notion serving as a Headless CMS. It covers fetching content from the Notion API and rendering it dynamically on your site.',
      likes: 36,
    },
    {
  id: 51,
  englishTitle: 'React State Management: Choosing the Right Tool',
  bengaliTitle: 'React স্টেট ম্যানেজমেন্ট: সঠিক টুলটি বেছে নেওয়া',
  description: 'useState, useReducer, Context API, Redux—কোন পরিস্থিতিতে কোনটি ব্যবহার করবেন, তার বিশ্লেষণ।',
  content: 'This post explains the differences between useState, useReducer, Context API, and Redux. It guides developers on when to use which for scalable and efficient state management.',
  likes: 18,
},
{
  id: 52,
  englishTitle: 'Reusable Custom Hooks in React: Clean & Powerful',
  bengaliTitle: 'React-এ Reusable কাস্টম হুক: পরিচ্ছন্ন ও শক্তিশালী কোডিং',
  description: 'React এ কিভাবে নিজস্ব কাস্টম হুক তৈরি করে রিইউজেবল ও ক্লিন কম্পোনেন্ট গঠন করবেন।',
  content: 'Learn how to create and reuse custom hooks in React to encapsulate logic and keep components clean and focused. This approach encourages separation of concerns and code reusability.',
  likes: 25,
},
{
  id: 53,
  englishTitle: 'React Router v6: Nested Routes & Dynamic Loading',
  bengaliTitle: 'React Router v6: Nested রুট ও ডায়নামিক লোডিং Explained',
  description: 'React Router v6-এ কীভাবে Nested Routes ও Lazy Load Routes তৈরি করবেন তা বিস্তারিতভাবে আলোচনা।',
  content: 'Explore advanced routing techniques using React Router v6, including nested routes, dynamic routes, and lazy loading to optimize performance and structure.',
  likes: 19,
},
{
  id: 54,
  englishTitle: 'Handling Forms in React: Controlled vs Uncontrolled',
  bengaliTitle: 'React ফর্ম হ্যান্ডলিং: Controlled বনাম Uncontrolled',
  description: 'React ফর্ম ডেটা নিয়ন্ত্রণে Controlled ও Uncontrolled কম্পোনেন্টের মধ্যে পার্থক্য ও ব্যবহার।',
  content: 'Understand the difference between controlled and uncontrolled form inputs in React. Learn best practices for handling forms efficiently using either approach.',
  likes: 16,
},
{
  id: 55,
  englishTitle: 'React Performance Tips: Memoization & Optimization',
  bengaliTitle: 'React পারফরম্যান্স টিপস: Memoization ও অপ্টিমাইজেশন কৌশল',
  description: 'React অ্যাপ্লিকেশনকে দ্রুততর করতে useMemo, useCallback এবং memo এর কার্যকর ব্যবহার।',
  content: 'This post discusses how to avoid unnecessary re-renders in React using memo, useMemo, and useCallback. Essential for building high-performance applications.',
  likes: 22,
},
{
  id: 56,
  englishTitle: 'Atomic Design in React: Build Scalable UIs',
  bengaliTitle: 'React-এ Atomic Design: স্কেলযোগ্য UI গঠনের প্যাটার্ন',
  description: 'Atomic Design ব্যবহার করে কীভাবে ছোট ছোট কম্পোনেন্ট দিয়ে বৃহৎ UI তৈরি করা যায়।',
  content: 'Learn about Atomic Design principles and how to structure React components into atoms, molecules, organisms, templates, and pages for scalability and maintainability.',
  likes: 15,
},
{
  id: 57,
  englishTitle: 'React Testing Library: Test Your Components Right',
  bengaliTitle: 'React Testing Library: কম্পোনেন্ট সঠিকভাবে টেস্ট করা',
  description: 'React কম্পোনেন্টের UI ও ইন্টারঅ্যাকশন টেস্ট করার জন্য Testing Library-এর ব্যবহার।',
  content: 'Understand how to write unit and integration tests for React components using React Testing Library. This post focuses on writing accessible and user-centric tests.',
  likes: 17,
},
{
  id: 58,
  englishTitle: 'Folder Structure for React Projects: Best Practices',
  bengaliTitle: 'React প্রজেক্টের ফোল্ডার স্ট্রাকচার: সেরা অভ্যাসসমূহ',
  description: 'একটি React অ্যাপ্লিকেশনের পরিচ্ছন্ন ও স্কেলযোগ্য ফোল্ডার স্ট্রাকচার কীভাবে তৈরি করবেন।',
  content: 'This guide outlines a clean and scalable folder structure for React projects. Organize your components, hooks, services, and pages with maintainability in mind.',
  likes: 20,
},
{
  id: 59,
  englishTitle: 'React + Tailwind CSS: Build Faster with Utility Classes',
  bengaliTitle: 'React + Tailwind CSS: ইউটিলিটি ক্লাসে দ্রুত UI নির্মাণ',
  description: 'React এ Tailwind CSS ব্যবহার করে কীভাবে দ্রুত ও কাস্টমাইজেবল ডিজাইন তৈরি করা যায়।',
  content: 'Explore how Tailwind CSS can speed up UI development in React projects. Learn how to use utility-first classes for responsive, customizable components.',
  likes: 23,
},
{
  id: 60,
  englishTitle: 'Dark Mode in React: Implementing with Context API',
  bengaliTitle: 'React-এ Dark Mode: Context API দিয়ে তৈরি করুন সহজে',
  description: 'React এ Context API ব্যবহার করে কীভাবে Dark Mode ফিচার তৈরি করা যায়।',
  content: 'Learn how to implement a toggleable dark mode feature in your React app using Context API. This includes setting up global state and applying dynamic themes.',
  likes: 26,
}

  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest', 'oldest', 'most-liked'
  const postsPerPage = 6;
  const [likes, setLikes] = useState(
    blogIdeas.reduce((acc, post) => {
      acc[post.id] = post.likes;
      return acc;
    }, {})
  );

  const handleLike = (id) => {
    setLikes(prevLikes => ({
      ...prevLikes,
      [id]: (prevLikes[id] || 0) + 1
    }));
  };

  const filteredPosts = blogIdeas.filter(post =>
    post.englishTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.bengaliTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortOrder === 'oldest') {
      return a.id - b.id;
    }
    if (sortOrder === 'most-liked') {
      return (likes[b.id] || 0) - (likes[a.id] || 0);
    }
    // Default or 'newest'
    return b.id - a.id;
  });

  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-indigo-600 dark:text-indigo-400 mb-8">
          Blog Page
        </h1>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          
          <div className="flex space-x-2 w-full sm:w-auto">
            <button
              onClick={() => setSortOrder('newest')}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors ${
                sortOrder === 'newest'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <FaSortAlphaDown className="mr-2" /> Newest
            </button>
            <button
              onClick={() => setSortOrder('oldest')}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors ${
                sortOrder === 'oldest'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <FaSortAlphaUp className="mr-2" /> Oldest
            </button>
            <button
              onClick={() => setSortOrder('most-liked')}
              className={`flex items-center px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors ${
                sortOrder === 'most-liked'
                  ? 'bg-indigo-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              <FaHeart className="mr-2" /> Most Liked
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {currentPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col justify-between transform transition-transform hover:scale-105 hover:bg-gray-200 dark:hover:bg-gray-700 h-full min-h-[280px]">
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                  {post.englishTitle}
                </h2>
                <h3 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                  {post.bengaliTitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <Link href={`/blog/${post.id}`}>
                  <span className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition-colors cursor-pointer">
                    Read More
                  </span>
                </Link>
                <div className="flex items-center space-x-2">
                  <button onClick={() => handleLike(post.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <FaHeart className="text-xl" />
                  </button>
                  <span className="text-lg font-semibold">{likes[post.id]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 text-sm font-medium rounded-md shadow-sm transition-colors ${
                currentPage === index + 1
                  ? 'bg-indigo-700 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

// A new component for displaying the detailed content of a single blog post.
export function BlogPost({ post }) {
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Blog Post Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-4">
          {post.bengaliTitle}
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
          {post.englishTitle}
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          {post.content}
        </p>
        <Link href="/blog">
          <span className="mt-8 inline-block text-indigo-600 hover:underline transition-colors cursor-pointer">
            &larr; Back to all blogs
          </span>
        </Link>
      </div>
    </div>
  );
}
