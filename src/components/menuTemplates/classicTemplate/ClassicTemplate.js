import { Typography } from "@material-ui/core";
import { useStyles } from "./styleClassicTemplate";

const ClassicTemplate = ({ menuData }) => {
  const classes = useStyles();
  return (
    <div className={classes.classicContainer}>
      <div className={classes.classicHeader}>
        {/* <Typography variant="h4">{data.name}</Typography> */}
        <Typography variant="subtitle2">{menuData.name}</Typography>
        <Typography variant="subtitle2">{menuData.platdujour}</Typography>
      </div>
    </div>
  );
};

export default ClassicTemplate;
