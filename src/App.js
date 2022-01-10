import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Headers } from "./components/Headers";
import { FormComponent } from "./components/Login";

function App() {
  return (
    <>
      <Headers />
      <FormComponent />
    </>
  );
}

export default App;
