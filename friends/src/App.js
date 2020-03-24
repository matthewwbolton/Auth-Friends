import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import AddFriendForm from "./components/AddFriendForm";
import LogoutSuccessful from "./components/LogoutSuccessful";

function App() {
  return (
    <div className="App">
      <ul>
        <Link to="/login">Login</Link>
        <br></br>
        <Link to="/protected">Friends List</Link>
        <br></br>
        <Link to="/logout">Logout</Link>
        <br></br>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={AddFriendForm} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutSuccessful} />
        <Route component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
