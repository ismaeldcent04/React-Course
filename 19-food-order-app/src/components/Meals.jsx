import { useEffect } from "react";
import { useState } from "react";
import { MealItem } from "./MealItem";

export const Meals = () => {
  const [meals, setMeals] = useState([]);

  async function fecthMeals() {
    const response = await fetch("http://localhost:3000/meals");

    if (!response.ok) {
    }

    const meals = await response.json();
    setMeals(meals);
  }

  useEffect(() => {
    fecthMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => {
        return <MealItem key={meal.id} meal={meal} />;
      })}
    </ul>
  );
};
