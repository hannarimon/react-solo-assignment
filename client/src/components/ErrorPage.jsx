import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  // let navigate = useNavigate();
  return (
    <div>
      <h2>
        You do not have the rights for this page. Go to{" "}
        <Link className="error-btn" to="/">
          Home
        </Link>{" "}
        to login and try again.
      </h2>
      <p>Not Hihi :(</p>
    </div>
  );
}

export default ErrorPage;
