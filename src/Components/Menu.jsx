
import "../styles/Menu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function Menu({ dataForMenu }) {
  const [CurrentPage,setCurrentPage] = useState(location.pathname);
  return (
    <div className="topnav">
      {dataForMenu.map((t, index) => (
        <Link
          onClick={()=> setCurrentPage(t.linkTo)}
          key={index}
          style={{ margin: 5 }}
          to={t.linkTo}
          className={CurrentPage == t.linkTo ? "active" : ""}
        >
          {t.icon}
          {" "}
          {t.displayName}
        </Link>
      ))}
    </div>
  );
}
export { Menu };
