import { Typography, Paper } from "@material-ui/core";
import { useStyles } from "./styleIntroPage";
import IntroForm from "./introForm/IntroForm";

const IntroPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.introContainer}>
      <Paper elevation={3} className={classes.paperContainer}>
        <Typography variant="h4">Infomations Restaurant</Typography>
        <IntroForm />
      </Paper>
    </div>
  );
};

export default IntroPage;
