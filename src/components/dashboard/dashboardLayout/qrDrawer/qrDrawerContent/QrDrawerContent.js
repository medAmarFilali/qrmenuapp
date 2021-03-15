import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { useStyles } from "./styleQrDrawerContent";

import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";

const QrDrawerContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.drawerContentContainer}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <RestaurantMenuIcon className={classes.menuIcon} />
          </ListItemIcon>
          <ListItemText primary="Menu" />
        </ListItem>
      </List>
    </div>
  );
};

export default QrDrawerContent;
