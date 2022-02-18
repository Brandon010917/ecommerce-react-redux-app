//React-router-dom
import { NavLink } from "react-router-dom";

const Categories = () => {
  const pages = ["shop", "about", "contact"];

  return (
    <div className="pages">
      <ul className="flex">
        {pages.map((page) => (
          <li
            key={page}
            className="header-link pt-1 font-literation text-sm first-letter:uppercase"
          >
            <NavLink
              to={`/${page}`}
              className={({ isActive }) =>
                `py-1 ${isActive && "border-b border-black"}`
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
