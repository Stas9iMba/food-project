import { getAllCategories } from "../api";
import { useEffect, useState } from "react";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);

  return (
    <>{catalog.length ? <CategoryList catalog={catalog} /> : <Preloader />}</>
  );
}

export { Home };
