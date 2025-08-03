import Image from "next/image";
import React from "react";
import Swal from "sweetalert2";

export default function MealDetails({ meal, onClose }) {
    if (!meal) return null;

    const {
        strMeal,
        strMealThumb,
        strCategory,
        strArea,
        strInstructions,
        strYoutube,
        strSource,
    } = meal;

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim()) {
            ingredients.push(
                `${measure ? measure.trim() : ""} ${ingredient.trim()}`.trim()
            );
        }
    }

    return (
        <div className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-xl flex flex-col mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-700 px-6 py-3 sticky top-0 bg-white dark:bg-gray-900 z-10">
                <h2 className="text-2xl font-bold text-indigo-600">{strMeal}</h2>
                <button
                    onClick={() => {
                        if (onClose) onClose();
                        else Swal.close();
                    }}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-label="Close modal"
                >
                    × Close
                </button>
            </div>

            {/* Main Rounded Image */}


            {/* Second Image (Full width rectangular) */}
            <div className="px-6 p-8 pb-6">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    className="w-full max-h-[50vh]  rounded-lg object-cover shadow-md"
                />
            </div>

            {/* Info Sections */}
            <div className="px-8 pb-8 text-gray-900 dark:text-gray-100 space-y-6">

                <div className="flex justify-center space-x-8 text-indigo-700 font-semibold">
                    <p>
                        Category:{" "}
                        <span className="font-normal text-gray-700 dark:text-gray-300">
                            {strCategory}
                        </span>
                    </p>
                    <p>
                        Area:{" "}
                        <span className="font-normal text-gray-700 dark:text-gray-300">
                            {strArea}
                        </span>
                    </p>
                </div>

                {/* Ingredients */}
                <section>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                        Ingredients
                    </h3>
                    <ul className="list-disc list-inside space-y-1 px-2 text-gray-800 dark:text-gray-200">
                        {ingredients.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                        ))}
                    </ul>
                </section>

                {/* Instructions */}
                <section>
                    <h3 className="text-xl font-semibold mb-3 text-indigo-600">
                        Instructions
                    </h3>
                    <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
                        {strInstructions}
                    </p>
                </section>

                {/* External Links */}
                <section className="flex justify-center gap-4 mt-4">
                    {strYoutube && (
                        <a
                            href={strYoutube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded shadow-md transition"
                        >
                            🎥 YouTube
                        </a>
                    )}
                    {strSource && (
                        <a
                            href={strSource}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow-md transition"
                        >
                            🌐 Source
                        </a>
                    )}
                </section>

                <div className="flex justify-center p-6">
                    <img
                        src={strMealThumb}
                        alt={strMeal}
                        onClick={() => {
                            if (onClose) onClose();
                            else Swal.close();
                        }}
                        className="w-60 h-60 rounded-full object-cover shadow-lg cursor-pointer hover:opacity-80 transition"
                        title="Click to close"
                    />
                </div>

            </div>
        </div>
    );
}
