import { BrowserRouter, Switch, Route } from "react-router-dom";
import IntroPage from "../components/introPage/IntroPage";
import LoginPage from "../components/loginPage/LoginPage";

const QrMenuRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/intro" component={IntroPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default QrMenuRouter;
