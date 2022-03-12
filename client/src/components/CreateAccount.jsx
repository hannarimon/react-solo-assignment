import React from "react";

function CreateAccount() {
  return (
    <div>
      <h1>Create an Account</h1>
      <form action="">
        <input placeholder="First name" type="text" /*required*/ />
        <input placeholder="Last name" type="text" /*required*/ />
        <input placeholder="Email" type="email" /*required*/ />
        <input placeholder="Password" type="password" /*required*/ />
        <button>Create Account</button>
      </form>
      {/* <p>
        Already have an account? <a href="./LoginComponent.jsx">Login</a>
      </p> */}
    </div>
  );
}

export default CreateAccount;
