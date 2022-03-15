import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const redirect = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    redirect("/");
  };
  return (
    <div>
      <Link className="error-btn" to="/">
        Home
      </Link>
      <h1>Login successful, Welcome!</h1>
      <p>Hihi</p>
      <button type="submit" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default Profile;
