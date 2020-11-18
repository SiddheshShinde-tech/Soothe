import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import "./tracking.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesReward() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    icecream: false,
    volunteer: false,
    personalpraise: false,
    mobilegame: false,
    buy: false,
    nap: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { icecream, volunteer, personalpraise, mobilegame, buy, nap } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={icecream} onChange={handleChange} name="icecream" />
            }
            label=" Ice Cream"
          />
          
          <FormControlLabel
            control={
              <Checkbox checked={volunteer} onChange={handleChange} name="volunteer" />
            }
            label="Volunteer"
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={personalpraise}
                onChange={handleChange}
                name="personalpraise"
              />
            }
            label="Personal Praise"
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={mobilegame}
                onChange={handleChange}
                name="mobilegame"
              />
            }
            label="Mobiule Game"
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={buy}
                onChange={handleChange}
                name="buy"
              />
            }
            label="Buy something nice"
          />
          
          <FormControlLabel
            control={
              <Checkbox checked={nap} onChange={handleChange} name="nap" />
            }
            label="Nap"
          />
          
        </FormGroup>
      </FormControl>
    </div>
  );
}
