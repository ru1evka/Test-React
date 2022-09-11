import { Link } from "react-router-dom";
import "../sass/header.scss";

function Header({ login, userShow }) {
  return (
    <div className="header">
      <img width={273} height={63} src="img/logo.svg" alt="Логотип" />
      {userShow ? (
        <Link to="/">
          <div className="wrapperUser">
            <span>{login}</span>
            <div className="exit"></div>
          </div>
        </Link>
      ) : null}
    </div>
  );
}

export default Header;
