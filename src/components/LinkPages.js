const Categories = () => {
  //Redux-hooks
  const pages = ["shop", "about", "contact", "journal"];

  return (
    <div className="categories">
      <ul className="flex">
        {pages.map((page) => (
          <li key={page} className="header-link pt-1 font-literation text-sm">
            <button className="first-letter:uppercase">{page}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
