import { Link } from "react-router-dom";
function Meal({ id, title, urlImage }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={urlImage} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          Watch Recipe
        </Link>
      </div>
    </div>
  );
}

export { Meal };
