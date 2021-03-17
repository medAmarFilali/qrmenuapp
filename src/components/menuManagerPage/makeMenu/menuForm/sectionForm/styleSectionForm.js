import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
  sectionContainer: {
    // marginBottom: theme.spacing(2),
    "& .MuiPaper-root": {
      padding: 0,
    },
    "& .MuiPaper-elevation1": {
      boxShadow: "none",
    },
  },
  sectionHeader: {
    // margin: theme.spacing(2, 0, 2, 0),
    "& .MuiAccordionSummary-content": {
      backgroundColor: grey[300],
      borderRadius: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 2),
      width: "100%",
    },
  },
  addDishButton: {
    marginTop: theme.spacing(1),
  },
  sectionHeadTitle: {
    padding: theme.spacing(1, 0),
    color: grey[800],
  },
  deleteIconContainer: {
    display: "flex",
    alignItems: "center",
  },
  accordionDetails: {
    display: "flex",
    flexDirection: "column",
  },
}));
