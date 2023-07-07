import { defer } from "react-router-dom";
import { API_URL } from "./config";

async function getMealById(mealId) {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);

  return res.json();
}

const mealLoader = async ({ request, params }) => {
  const mealId = params.mealId;

  return defer({ mealId: await getMealById(mealId) });
};

export { mealLoader };
