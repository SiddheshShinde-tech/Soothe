import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  }
})(Slider);

function handleThe(event)
{
  console.log("Hey there");
}

export default function CustoizedSlider() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      {/* <Typography className="sliderLevel" gutterBottom>How anxious are you ?</Typography> */}
      <p className="slidertexttttttttttt">Please rate your anxiety levels after having spent your anxiety credits</p>
      <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={2}
        step={1}
        min={1}
        max={10}
        onChange={handleThe}
      />

    </div>
  );
}
