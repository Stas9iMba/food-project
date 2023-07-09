import { Meal } from "./Meal";
function MealList({ meals = [] }) {
  return (
    <div className="list">
      {meals.map((meal) => (
        <Meal
          key={meal.idMeal}
          id={meal.idMeal}
          title={meal.strMeal}
          urlImage={meal.strMealThumb}
        />
      ))}
    </div>
  );
}

export { MealList };
