import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to="/">
          <h2>掲示板</h2>
        </Link>
        <Link to="/threads/new">スレッドを立てる</Link>
      </div>
    </>
  );
};

export default Header;
