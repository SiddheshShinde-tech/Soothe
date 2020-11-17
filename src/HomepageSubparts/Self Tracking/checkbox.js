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

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    tedtalk: false,
    stroll: false,
    write: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { gilad, jason, antoine, tedtalk, stroll, write } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label=" Meditate"
          />
          <div className="helptext">
            <FormHelperText>1 Anxiety Credits</FormHelperText>
          </div>
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jog"
          />
          <div className="helptext">
            <FormHelperText>2 Anxiety Credits</FormHelperText>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={antoine}
                onChange={handleChange}
                name="antoine"
              />
            }
            label="Read"
          />
          <div className="helptext">
            <FormHelperText>2 Anxiety Credits</FormHelperText>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={tedtalk}
                onChange={handleChange}
                name="tedtalk"
              />
            }
            label="Watch a TED Talk"
          />
          <div className="helptext">
            <FormHelperText>1 Anxiety Credits</FormHelperText>
          </div>
          <FormControlLabel
            control={
              <Checkbox
                checked={stroll}
                onChange={handleChange}
                name="stroll"
              />
            }
            label="Stroll"
          />
          <div className="helptext">
            <FormHelperText>2 Anxiety Credits</FormHelperText>
          </div>
          <FormControlLabel
            control={
              <Checkbox checked={write} onChange={handleChange} name="write" />
            }
            label="Write"
          />
          <div className="helptext">
            <FormHelperText>3 Anxiety Credits</FormHelperText>
          </div>
        </FormGroup>
      </FormControl>
    </div>
  );
}
