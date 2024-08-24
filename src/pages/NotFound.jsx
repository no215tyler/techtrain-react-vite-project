import { Helmet } from "react-helmet-async";
import "../styles/NotFound.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Pages NotFound</title>
      </Helmet>
      <div className="notFoundWrapper">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="backToButton">
          {`<<< Go back to Home`}
        </Link>
      </div>
    </>
  );
}

export default NotFound;
