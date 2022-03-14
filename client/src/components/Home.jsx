import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Login() {
  const redirect = useNavigate();
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
    console.log(data);
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
      console.log(response);
      if (response.status === 200) {
        redirect("/profile");
      } else {
        console.log("error");
      }
      // if (response.status === 201) {
      //   setMessage("User has been created!");
      // } else {
      //   setMessage("Something went wrong :(");
      // }
    } catch (err) {
      console.log(err);
    }
  };

  let navigate = useNavigate();
  return (
    <div>
      <h1>Welcome back!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", { required: "Email can't be blank." })}
          placeholder="Email"
          type="email"
        />
        <p>{errors.email?.message}</p>
        <input
          {...register("password", {
            required: "Password can't be blank",
            minLength: {
              value: 5,
              message: "Minimum length is 5",
            },
          })}
          placeholder="Password"
          type="password"
        />
        <p>{errors.password?.message}</p>
        <button type="submit">Login</button>
      </form>

      <button
        className="link-tag"
        onClick={() => {
          navigate("/create");
        }}
      >
        {"Create an Account"}
      </button>
    </div>
  );
}

export default Login;
