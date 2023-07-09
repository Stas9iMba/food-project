import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Preloader } from "./Preloader";
import { MealList } from "./MealList";
import { getFilteredCategories } from "../api";
function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    getFilteredCategories(name).then((data) => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <Link to="/" className="btn">
        go back
      </Link>
      <div>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</div>
    </>
  );
}

export { Category };
