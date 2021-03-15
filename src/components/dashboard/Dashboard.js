import { Typography, CssBaseline } from "@material-ui/core";
import DashboardLayout from "./dashboardLayout/DashboardLayout";
import { useStyles } from "./styleDashboard";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.dashboardContainer}>
      <CssBaseline />
      <DashboardLayout />
      <div className={classes.contentContainer}>
        <Typography variant="h1">This is the content</Typography>
      </div>
    </div>
  );
};

export default Dashboard;
