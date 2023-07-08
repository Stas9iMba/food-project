import { CategoryItem } from "./CategoryItem";
function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((item) => {
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
