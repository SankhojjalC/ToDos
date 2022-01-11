import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

import "./styles/login.css";

import { validatePassword } from "../utils/helper";

export const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = validatePassword(userName, password);
    if (response?.status === 200) {
      //login True
      console.log("RESPO is finally----->", response?.data);
      //show success toaster message
      // save user cred in localstorage and redux
    } else if (response?.status === 301) {
      //show toaster message that passowrd is wrong
    } else if (response?.status === 400) {
      //show toaster message user doesn;t exist and clear the username and password
    }
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        description="Username"
        placeholder="Enter your username"
        type="text"
        value={userName}
        handler={handleUserNameChange}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        handler={handlePasswordChange}
      />
      <FormButton title="Log in" />
    </form>
  );
};
