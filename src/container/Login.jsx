import { Form } from "../components/Form";
import { OtherMethods } from "../components/OtherMethods";

import "./styles/loginContainer.css";

export const Login = (props) => {
  return (
    <div id="body">
      <div id="loginform">
        <h2 id="headerTitle">Login</h2>
        <Form />
        <OtherMethods />
      </div>
    </div>
  );
};
