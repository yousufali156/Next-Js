"use client";
import { motion } from "framer-motion";
import { PiBowlFoodFill } from "react-icons/pi";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 text-indigo-700 dark:from-[#111827] dark:via-[#1f2937] dark:to-[#111827] transition-all">
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PiBowlFoodFill size={80} className="text-orange-500" />
        </motion.div>

        <h2 className="mt-4 text-xl font-semibold tracking-wide">
          Fetching your delicious meals...
        </h2>

        <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">
          Please wait while we prepare everything for you 🍽️
        </p>
      </motion.div>
    </div>
  );
}
