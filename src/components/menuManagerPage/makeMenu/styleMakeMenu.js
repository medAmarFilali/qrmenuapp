import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  makeMenuContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  formContainer: (mobile) => {
    console.log(mobile);
    return {
      width: mobile ? "100%" : "45%",
    };
  },
  previewContainer: {
    width: "55%",
  },
}));
