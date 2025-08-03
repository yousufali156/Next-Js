"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import MealDetails from "./components/MealDetails"; // Correct import path

const MySwal = withReactContent(Swal);

export default function MealsPage() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");

  const fetchMeals = async (query = "chicken") => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      setMeals(res.data.meals || []);
    } catch (error) {
      setMeals([]);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleMealClick = (meal) => {
    MySwal.fire({
      title: `<h1 class="text-2xl font-bold text-indigo-600">${meal.strMeal}</h1>`,
      html: <MealDetails meal={meal} />,
      width: "800px",
      showCloseButton: false,
      showConfirmButton: false,
      customClass: {
        popup: "p-0 rounded-xl overflow-hidden",
        htmlContainer: "p-0",
      },
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        🍽️ Explore Meals
      </h1>

      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            fetchMeals(e.target.value);
          }}
          className="px-4 py-2 w-full max-w-md border border-indigo-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {!meals.length ? (
        <p className="text-center text-gray-500">No meals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              onClick={() => handleMealClick(meal)}
              className="cursor-pointer rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-lg text-indigo-700">
                  {meal.strMeal}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {meal.strCategory}
                </p>
                <p className="text-gray-600 dark:text-gray-300">{meal.strArea}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
