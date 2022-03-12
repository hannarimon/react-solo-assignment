import { React, useState } from "react";

function CreateAccount() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [message, setMessage] = useState("");
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Username is required";
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //
  //     if (password != confirmPassword) {
  //       setMessage("Passwords do not match.");
  //       throw new Error();
  //     }
  //     if (password < 5) {
  //       setMessage("Minimum password length is 5 characters.");
  //       throw new Error();
  //     }
  //     try {
  //       const response = await fetch("http://localhost:8081/create", {
  //         method: "POST",
  //         body: JSON.stringify({
  //           firstName: firstName,
  //           lastName: lastName,
  //           email: email,
  //           password: password,
  //           confirmPassword: confirmPassword,
  //         }),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //       let resJson = await response.json();
  //
  //       if (response.status === 201) {
  //         setFirstName("");
  //         setLastName("");
  //         setEmail("");
  //         setPassword("");
  //         setConfirmPassword("");
  //         setMessage("User has been created!");
  //       } else {
  //         setMessage("Something went wrong :(");
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div>
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit} /*onSubmit={handleSubmit}*/>
        <input
          placeholder="First name"
          // value={firstName}
          value={formValues.firstName}
          onChange={handleChange}
          // onChange={(e) => setFirstName(e.target.value)}
          type="text" /*required*/
        />
        <input
          placeholder="Last name"
          value={formValues.lastName}
          onChange={handleChange}
          // onChange={(e) => setLastName(e.target.value)}
          type="text" /*required*/
        />
        <input
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
          // onChange={(e) => setEmail(e.target.value)}
          type="email" /*required*/
        />
        <input
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
          // onChange={(e) => setPassword(e.target.value)}
          type="password" /*required*/
        />
        <input
          placeholder="Confirm Password"
          value={formValues.confirmPassword}
          onChange={handleChange}
          // onChange={(e) => setConfirmPassword(e.target.value)}
          type="password" /*required*/
        />
        <button>Create Account</button>
        {/* <div>{message ? <p>{message}</p> : null}</div> */}
      </form>
      {/* <p>
        Already have an account? <a href="./LoginComponent.jsx">Login</a>
      </p> */}
    </div>
  );
}

export default CreateAccount;
