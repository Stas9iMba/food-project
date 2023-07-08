import { Link } from "react-router-dom";
function CategoryItem({ id, title, description, urlImage }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={urlImage} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>{description.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${title}`} className="btn">
          Watch Recipe
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
