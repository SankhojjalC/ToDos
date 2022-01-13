import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

import { logIn } from "../store/logedInReducer";
import { useState } from "react";
import { FormInput } from "./FormInput";
import { FormButton } from "./FormButton";

import { validatePassword } from "../utils/helper";

import "./styles/login.css";

export const Form = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const response = validatePassword(userName, password);
    if (response?.status === 200) {
      //show success toaster message
      localStorage.setItem("userDetails", JSON.stringify(response?.data));
      dispatch(logIn(response?.data));
      toast.success("Login Successful !");
      history.push("/profile");
    } else if (response?.status === 301) {
      //show toaster message that passowrd is wrong
      setPassword("");
      toast.warn("Your Password is wrong");
    } else if (response?.status === 400) {
      //show toaster message user doesn;t exist and clear the username and password
      setUserName("");
      setPassword("");
      toast.error("User doesn't exist");
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
