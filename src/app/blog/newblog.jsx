import React from "react";

export default function NewBlog() {
  const blogPosts = [
    // AI Basics & Concepts
    "What is Artificial Intelligence? A Beginner’s Guide",
    "Machine Learning vs Deep Learning: The Key Differences",
    "How Neural Networks Work (Explained Simply)",
    "Natural Language Processing: How AI Understands Language",
    "Computer Vision: How AI Sees the World",
    "The History of Artificial Intelligence: From 1950s to Now",
    "AI Terminology You Need to Know",
    "The 7 Types of AI Models and Where They’re Used",
    "Understanding Generative AI: ChatGPT, DALL·E & Beyond",
    "How Reinforcement Learning Works",

    // AI in Everyday Life
    "AI in Healthcare: From Diagnosis to Drug Discovery",
    "AI in Education: Personalized Learning Tools",
    "How AI is Changing the Music Industry",
    "AI for Personal Finance and Investments",
    "AI in Agriculture: Smart Farming Explained",
    "AI in Transportation: Autonomous Vehicles",
    "AI in Retail: Predicting Shopping Trends",
    "AI in Cybersecurity: Threat Detection and Prevention",
    "How AI is Used in Smart Home Devices",
    "AI for Environmental Sustainability",

    // AI Tools & Applications
    "The Best Free AI Tools You Can Try Today",
    "AI Content Creation Tools for Writers",
    "AI for Video Editing and Animation",
    "AI Tools for Graphic Designers",
    "AI in Game Development",
    "AI Assistants: Siri, Alexa, and Beyond",
    "How AI Helps in Scientific Research",
    "AI-Powered Language Translation Tools",
    "AI in Search Engines: How Google Uses It",
    "AI in Social Media: Recommendations & Moderation",

    // Ethics & Concerns
    "AI Bias: Why It Happens and How to Fix It",
    "Can AI Be Trusted? Ethics and Accountability",
    "The Privacy Concerns Around AI Technology",
    "How AI Might Affect Jobs in the Future",
    "AI and the Law: Who is Responsible?",
    "AI Deepfakes: Risks and Prevention",
    "The Debate on AI Consciousness",
    "AI Safety: Preventing Unintended Consequences",
    "The Impact of AI on Creativity",
    "Balancing AI Innovation and Regulation",

    // Future of AI
    "What AI Could Look Like in 2050",
    "The Race for Artificial General Intelligence (AGI)",
    "How AI Will Reshape Businesses in the Next Decade",
    "Quantum Computing and AI: A Powerful Combo",
    "The Role of AI in Space Exploration",
    "AI in Disaster Prediction and Response",
    "AI’s Role in Fighting Climate Change",
    "The Future of AI-Powered Healthcare",
    "Will AI Replace Software Developers?",
    "AI Trends to Watch This Year",
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        🧠 AI Blog Ideas
      </h1>
      <ul className="space-y-3">
        {blogPosts.map((title, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white hover:bg-gray-50"
          >
            <span className="font-semibold">{index + 1}.</span> {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
