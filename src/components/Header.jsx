import { Link, NavLink } from "react-router-dom";

const isActiveLink = ({ isActive }) => {
  return isActive ? "active-link" : "";
};

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Food Shop
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="about" className={isActiveLink}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="contacts" className={isActiveLink}>
              Contact
            </NavLink>
          </li>
          <li>
            <a
              href="https://github.com/Stas9iMba/food-project"
              target="_blank"
              rel="noreferrer"
            >
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
