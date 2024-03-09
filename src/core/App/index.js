import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import { toMain } from "../roots";
import { Navigation } from "./Navigation";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/">
        <Redirect to={toMain()} />
      </Route>
    </Switch>
  </HashRouter>
);