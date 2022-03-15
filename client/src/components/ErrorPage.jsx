import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  // let navigate = useNavigate();
  return (
    <div>
      <p>You do not have the rights for this page. Login and try again.</p>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}

export default ErrorPage;
