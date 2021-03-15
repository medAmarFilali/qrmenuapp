import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import IntroPage from "../components/introPage/IntroPage";
import LoginPage from "../components/loginPage/LoginPage";

const QrMenuRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/intro" component={IntroPage} />
        <Route path="login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default QrMenuRouter;
