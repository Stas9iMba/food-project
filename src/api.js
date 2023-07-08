import { API_URL } from "./config";

async function getMealById(mealId) {
  const res = await fetch(`${API_URL}lookup.php?i=${mealId}`);
  return res.json();
}
async function getAllCategories() {
  const res = await fetch(`${API_URL}categories.php`);
  return res.json();
}

async function getFilteredCategories(catName) {
  const res = await fetch(`${API_URL}filter.php?c=${catName}`);
  return res.json();
}

export { getMealById, getAllCategories, getFilteredCategories };
