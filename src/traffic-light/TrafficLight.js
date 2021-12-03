import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  trafficLight: {
    textAlign: 'center',
    width: '250px',
    height: '650px',
    border: '5px solid black'
  },
  light: {
    width: '200px',
    height: '200px',
    border: '2px solid black',
    borderRadius: '50%',
    marginTop: '10px'
  }
})

const Light = ({
  color,
  classes,
  light,
  setLight
}) => {
  return (
    <div
      className={classes.light}
      style={{ background: color === light ? color : 'gray' }}
      onClick={() => setLight(color)}
    >
      {color}
    </div>
  )
};

const TrafficLight = ({ classes }) => {
  const colors = ['red', 'yellow', 'green'];
  const [light, setLight] = useState('gray');
  return (
    <div className={classes.trafficLight}>
      {colors.map(color => {
        return (
          <div>
            <Light
              color={color}
              classes={classes}
              light={light}
              setLight={setLight}
            />
          </div>
        )
      })}
    </div>
  )
};

export default withStyles(styles)(TrafficLight); 
