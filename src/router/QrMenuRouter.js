import { BrowserRouter, Switch, Route } from "react-router-dom";
import IntroPage from "../components/introPage/IntroPage";
import LoginPage from "../components/loginPage/LoginPage";
import MenuManagerPage from "../components/menuManagerPage/MenuManagerPage";

const QrMenuRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MenuManagerPage} />
        <Route path="/intro" component={IntroPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default QrMenuRouter;
