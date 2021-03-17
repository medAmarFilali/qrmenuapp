import { Typography } from "@material-ui/core";
import ClassicSection from "./classicSection/ClassicSection";
import { useStyles } from "./styleClassicTemplate";

const ClassicTemplate = ({ menuData, restoData }) => {
  const classes = useStyles();
  return (
    <div className={classes.classicContainer}>
      <div className={classes.classicHeader}>
        <Typography variant="h4">Restaurant {restoData.name}</Typography>
        <Typography variant="h6">{menuData.name}</Typography>
        <Typography variant="subtitle2">
          Plat du jour: {menuData.platdujour}
        </Typography>
      </div>
      <div className={classes.menuBody}>
        {menuData.dishes.map((section) => (
          <ClassicSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
};

export default ClassicTemplate;
