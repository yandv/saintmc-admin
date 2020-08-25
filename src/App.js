import React, { useState } from "react";
import "./style.css";

import { AuthContext } from "./components/auth/index";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainPage from "./pages/main/index";
import Report from "./pages/report/index";
import Login from "./pages/login/index";
import Ban from "./pages/ban/index";
import PlayerInfo from "./pages/player/index";

import api from "./components/admin/api";
import PrivateRoute from "./components/privateroute";

function App() {
  const [teste, setTeste] = useState(false);

  return (
    <AuthContext.Provider>
      <AuthContext.Consumer>
        {(value) => {
          return (
            <BrowserRouter>
              <Switch>
                <Route
                  path="/"
                  exact={true}
                  render={() => <MainPage {...value} />}
                />
                <Route path="/login" render={() => <Login {...value} />} />
                <Route path="/banimentos" render={() => <Ban {...value} />} />
                <PrivateRoute
                  path="/player/:playerName"
                  component={PlayerInfo}
                  {...value}
                />
                <PrivateRoute path="/report" component={Report} {...value} />
              </Switch>
            </BrowserRouter>
          );
        }}
      </AuthContext.Consumer>
    </AuthContext.Provider>
  );
}

export default App;
