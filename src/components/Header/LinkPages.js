// Styles
import "../../styles/Header/LinkPages.css";
// React-router-dom
import { NavLink } from "react-router-dom";

const Categories = () => {
  const pages = ["shop", "contact", "my orders"];

  return (
    <div className="pages">
      <ul className="pages__list">
        {pages.map((page) => (
          <li key={page} className="pages__list-item">
            <NavLink
              to={`/${page}`}
              className={({ isActive }) =>
                `pages__list-link ${isActive ? "pages__list-link--active" : ""}`
              }
            >
              {page}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
