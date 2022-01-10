// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Login } from "./container/Login";
import { Profile } from "./container/Profile";
import { AddEdit } from "./container/AddEdit";
import { Headers } from "./components/Headers";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Headers />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/add" component={AddEdit} />
        <Route path="/edit/:profileId" component={AddEdit} />
      </Switch>
    </>
  );
}

export default App;
