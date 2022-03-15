import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
// import image from (../pics/index.jpg)
// console.log(image)

function Profile() {
  const redirect = useNavigate();
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    redirect("/");
  };
  return (
    <div>
      <h1>Login successful, Welcome!</h1>
      <p>Hihi</p>
      {/* <img src="index.jpg" alt="hello" /> */}
      {/* <img src={image} alt="lmao" /> */}
      <button type="submit" onClick={logout}>
        Log out
      </button>
    </div>
  );
}

export default Profile;
