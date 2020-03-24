import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/LoginPage";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={LoginPage} />
        <Route component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
