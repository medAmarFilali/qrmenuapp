import QrMenuRouter from "./router/QrMenuRouter";
import { useStyles } from "./stylesApp";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.pageContainer}>
      <QrMenuRouter />
    </div>
  );
}

export default App;
