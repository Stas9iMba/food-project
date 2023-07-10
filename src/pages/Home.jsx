import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { getAllCategories } from "../api";
import { Preloader } from "../components/Preloader";
import { CategoryList } from "../components/CategoryList";
import { Search } from "../components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const handleSearch = (str) => {
    const searchValue = str.toLowerCase();
    setSearchParams({ search: searchValue });
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(searchValue)
      )
    );
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories);
    });
  }, [searchQuery]);

  return (
    <>
      <Search cb={handleSearch} searchQuery={searchQuery} />
      {catalog.length ? (
        <CategoryList catalog={filteredCatalog} searchQuery={searchQuery} />
      ) : (
        <Preloader />
      )}
    </>
  );
}

export { Home };
