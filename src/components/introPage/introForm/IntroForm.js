import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button } from "@material-ui/core";
import { useStyles } from "./styleIntroForm";
import { restaurantData } from "../../../store/actions/dataAction";

const IntroForm = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const classes = useStyles();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    dispatch(restaurantData({ name, address, phone }));
  };

  console.log(data);

  return (
    <div className={classes.introFormContainer}>
      <TextField
        label="Nom du restaurant"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        className={classes.textField}
      />
      <TextField
        label="Addresse"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        className={classes.textField}
      />
      <TextField
        label="Numéro de téléphone"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        fullWidth
        className={classes.textField}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.textField}
        fullWidth
        onClick={handleSubmit}
      >
        Suivant
      </Button>
    </div>
  );
};

export default IntroForm;
