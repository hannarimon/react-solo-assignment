import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import "./uniformStyle.css";
function Login() {
  const redirect = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8081", {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        localStorage.setItem("isAuthenticated", true);
        redirect("/profile");
      } else if (response.status === 401) {
        setMessage("Incorrect email or password.");
      } else {
        setMessage("Something went wrong, couldn't log in.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="center">
      <Link className="home-btn" to="/">
        Home
      </Link>
      <h1>Welcome!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>{errors.email?.message}</p>
        <div className="inputbox">
          <input
            {...register("email", { required: "Email can't be blank." })}
            placeholder="Email"
            type="email"
            autoComplete="off"
          />
        </div>
        <p>{errors.password?.message}</p>
        <div className="inputbox">
          <input
            {...register("password", {
              required: "Password can't be blank.",
              minLength: {
                value: 5,
                message: "Minimum length is 5.",
              },
            })}
            placeholder="Password"
            type="password"
          />
        </div>

        <div>{message} </div>
        <button className="inputbox login-btn" type="submit">
          Login
        </button>
      </form>

      <button
        className="signIn-btn"
        onClick={() => {
          redirect("/create");
        }}
      >
        {"Create an Account"}
      </button>
    </div>
  );
}

export default Login;
