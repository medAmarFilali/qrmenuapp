import { CssBaseline } from "@material-ui/core";
import DashboardLayout from "./dashboardLayout/DashboardLayout";
import { useStyles } from "./styleDashboard";

const Dashboard = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.dashboardContainer}>
      <CssBaseline />
      <DashboardLayout />
      <div className={classes.contentContainer}>{children}</div>
    </div>
  );
};

export default Dashboard;
