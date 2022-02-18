//React-router-dom
import { Link } from "react-router-dom";

const Footer = () => {
  const pages = ["shop", "about", "contact"];
  const socialMedia = ["instagram", "pinterest", "journal"];

  return (
    <footer className="footer">
      <div className="container-content grid grid-cols-12">
        <div className="col-span-full md:col-span-3 grid grid-cols-3">
          <div className="col-span-full md:col-span-1 py-4 font-teimer text-2xl md:text-4xl">
            *
          </div>
          <div className="col-span-full md:col-span-2 py-4 font-teimer text-2xl md:text-4xl">
            Anise
          </div>
        </div>

        <div className="col-span-full md:col-span-3"></div>

        <div className="col-span-full md:col-span-6 grid grid-cols-6">
          <div className="col-span-full md:col-span-2"></div>

          <div className="col-span-full md:col-span-2 py-4 md:p-4">
            <ul>
              {pages.map((page) => (
                <li key={page} className="first-letter:uppercase">
                  <Link to={`/${page}`} className="underline">
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-full md:col-span-2 py-4 md:p-4">
            <ul>
              {socialMedia.map((social) => (
                <li key={social} className="underline first-letter:uppercase">
                  {social}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
