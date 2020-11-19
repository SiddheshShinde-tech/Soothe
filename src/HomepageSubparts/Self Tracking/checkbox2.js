import React, { useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
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

// const [Store, setStore] = useState(0);
var temp=0;

function CheckboxesReward() {
  const classes = useStyles();
  
  const [Store, setStore] = useState(0);
  temp=Store;
  const [state, setState] = useState({
    icecream: false,
    volunteer: false,
    personalpraise: false,
    mobilegame: false,
    buy: false,
    nap: false
  });

  const handleChange = (event) => {
    setStore(event.target.value);
    setState({ ...state, [event.target.name]: event.target.checked });
    // temp=Store;
  };

  const { icecream, volunteer, personalpraise, mobilegame, buy, nap } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={icecream} onChange={handleChange} name="icecream" value={1} />
            }
            label=" Ice Cream"
          />
          

          <FormControlLabel
            control={
              <Checkbox checked={volunteer} onChange={handleChange} name="volunteer" value={2}/>
            }
            label="Volunteer"
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={personalpraise}
                onChange={handleChange}
                name="personalpraise"
                value={3}
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
                value={4}
              />
            }
            label="Mobile Game"
          />
          
          <FormControlLabel
            control={
              <Checkbox
                checked={buy}
                onChange={handleChange}
                name="buy"
                value={5}
              />
            }
            label="Buy something nice"
          />
          
          <FormControlLabel
            control={
              <Checkbox checked={nap} onChange={handleChange} name="nap" value={6} />
            }
            label="Nap"
          />
          
        </FormGroup>
      </FormControl>
    </div>
  );
}


export default CheckboxesReward;
export {temp};
