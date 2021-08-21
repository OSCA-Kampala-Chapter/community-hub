import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
