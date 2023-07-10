import { CategoryItem } from "./CategoryItem";
function CategoryList({ catalog = [], searchQuery }) {

  return (
    <div className="list">
      {catalog
        .filter((item) => item.strCategory.toLowerCase().includes(searchQuery))
        .map((item) => {
          return (
            <CategoryItem
              key={item.idCategory}
              id={item.idCategory}
              title={item.strCategory}
              description={item.strCategoryDescription}
              urlImage={item.strCategoryThumb}
            />
          );
        })}
    </div>
  );
}

export { CategoryList };
