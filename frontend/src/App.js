import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import SpotsIndexPage from "./components/SpotsIndexPage";



function App() {
    let match = useRouteMatch("/signup")
    return (
        <>
          {!match && <Navigation />}
          <Switch>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
            <Route path="/signin">
              <LoginFormPage />
            </Route>
            <Route path="/spots">
              <SpotsIndexPage />
            </Route>
          </Switch>
        </>
    );
  }
  
  export default App;
  