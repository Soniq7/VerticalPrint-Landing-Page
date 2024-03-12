import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toMain } from "../roots";
import Navigation from "./Navigation";
import MainPage from "../../featured/MainPage"

export default () => (
  <HashRouter>
    <Navigation />
    <MainPage />
    <Switch>
      <Route path="/">
        <Redirect to={toMain()} />
      </Route>
    </Switch>
  </HashRouter>
);