import { Typography } from "@material-ui/core";
import { useStyles } from "./styleClassicSection";
import ClassicDish from "./classicDish/ClassicDish";

const ClassicSection = ({ section }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {section.sectionName && (
        <div className={classes.sectionHeader}>
          <Typography variant="h5" className={classes.sectionTitle}>
            {section.sectionName}
          </Typography>
        </div>
      )}
      <div className={classes.sectionBody}>
        {section.items.length !== 0 &&
          section.items.map((dish) => (
            <ClassicDish key={dish.id} dish={dish} />
          ))}
      </div>
    </div>
  );
};

export default ClassicSection;
