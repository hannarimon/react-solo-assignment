import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();
  return (
    <div>
      <p>ERROR: PAGE NOT FOUND. RETURN TO</p>
      <button
        className="link-tag"
        onClick={() => {
          navigate("/");
        }}
      >
        {"HOME-PAGE"}
      </button>
    </div>
  );
}

export default ErrorPage;
