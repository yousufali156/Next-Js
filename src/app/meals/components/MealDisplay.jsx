import React from "react";

export default function MealDisplay({ meal, onClick }) {
  return (
    <div
      onClick={() => onClick(meal)}
      className="cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-3 bg-white dark:bg-gray-800">
        <h3 className="font-semibold text-lg text-indigo-700">{meal.strMeal}</h3>
        <p className="text-gray-600 dark:text-gray-300">{meal.strCategory}</p>
        <p className="text-gray-600 dark:text-gray-300">{meal.strArea}</p>
      </div>
    </div>
  );
}
