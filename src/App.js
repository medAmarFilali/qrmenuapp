import Dashboard from "./components/dashboard/Dashboard";
import QrMenuRouter from "./router/QrMenuRouter";
import { useStyles } from "./stylesApp";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <Dashboard>
        <QrMenuRouter />
      </Dashboard>
    </div>
  );
}

export default App;
