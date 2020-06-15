import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import { StateProvider } from "./components/context/context";
import Discover from "./components/Discover";
import ForgotPassword from "./components/ForgotPassword";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Register from "./components/Register";

function App() {
  const initialState = {
    user: { user: JSON.parse(localStorage.getItem("user")) },
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "userData":
        return {
          ...state,
          user: action.newUserdata,
        };

      default:
        return state;
    }
  };
  return (
    <div>
      <Switch>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/discover" component={Discover} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
        </StateProvider>
      </Switch>
    </div>
  );
}

export default App;
