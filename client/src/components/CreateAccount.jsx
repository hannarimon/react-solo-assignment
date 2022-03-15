import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import "./CreateAccount.css";

function CreateAccount() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // },
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const password = useRef({});
  password.current = watch("password", "");
  const [message, setMessage] = useState("");

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:8081/create", {
        method: "POST",
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      await response.json();
      if (response.status === 201) {
        setMessage("User has been created!");
      } else {
        setMessage("Something went wrong :(");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="center">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <h1>Create an Account</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputbox">
          <input
            {...register("firstName", {
              required: "First name can't be blank.",
            })}
            placeholder="First name"
            type="text"
          />
        </div>
        <p>{errors.firstName?.message}</p>
        <div className="inputbox">
          <input
            {...register("lastName", { required: "Last name can't be blank." })}
            placeholder="Last name"
            type="text"
          />
        </div>
        <p>{errors.lastName?.message}</p>
        <div className="inputbox">
          <input
            {...register("email", { required: "Email can't be blank." })}
            placeholder="Email"
            type="email"
          />
        </div>
        <p>{errors.email?.message}</p>
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

        <p>{errors.password?.message}</p>
        <div className="inputbox">
          <input
            {...register("confirmPassword", {
              required: "Confirm your password.",
              validate: (value) =>
                value === password.current || "The passwords do not match.",
            })}
            placeholder="Confirm Password"
            type="password"
          />
        </div>
        <p>{errors.confirmPassword?.message}</p>

        <button className="inputbox login-btn" type="submit">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
