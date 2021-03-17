import { Typography } from "@material-ui/core";
import { useStyles } from "./styleClassicDish";

const ClassicDish = ({ dish }) => {
  const classes = useStyles();
  return (
    <div className={classes.dishContainer}>
      <div>
        <Typography variant="subtitle1">{dish.dishName}</Typography>
        <Typography variant="subtitle2" className={classes.description}>
          {dish.dishDescription}
        </Typography>
      </div>
      <div>
        <Typography variant="h5">{dish.dishPrice}</Typography>
      </div>
    </div>
  );
};

export default ClassicDish;
