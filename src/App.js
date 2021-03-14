import LoginPage from "./components/loginPage/LoginPage";
import { useStyles } from "./stylesApp";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <LoginPage />
    </div>
  );
}

export default App;
