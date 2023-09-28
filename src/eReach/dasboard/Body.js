import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography, Button } from '@material-ui/core';
import { AccessAlarm, DirectionsBike, EmojiFoodBeverage, LocalHospital } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    width: '100%',
    height: '100%',
  },
  media: {
    height: '100px',
    width: '100px',
    backgroundColor: '#32C5FF',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: '#32C5FF',
    textTransform: 'none',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    fontSize: '18px',
    width: '250px'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', 
    gridGap: theme.spacing(3), 
    gap: theme.spacing(2), 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
}));

const Body = () => {
  const classes = useStyles();

  return (
    <div style={{ width: '60%', marginLeft: '30%', marginTop: "2%" }}>
      <div className={classes.cardGrid}>
        <Card className={classes.root}>
          <CardMedia className={classes.media}>
            <AccessAlarm fontSize="large" style={{ color: 'white' }} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.text}>
              Patients
            </Typography>
            <Button variant="contained" color="#FFFFFF" className={classes.button} textTransform= 'none'>
              Add new patient
            </Button>
          </CardContent>
        </Card>

        <Card className={classes.root}>
          <CardMedia className={classes.media}>
            <DirectionsBike fontSize="large" style={{ color: 'white' }} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.text}>
              Practitioner
            </Typography>
            <Button variant="contained" color="#FFFFFF" textTransform= 'none' className={classes.button}>
              Add new practitioner
            </Button>
          </CardContent>
        </Card>


        <Card className={classes.root}>
          <CardMedia className={classes.media}>
            <EmojiFoodBeverage fontSize="large" style={{ color: 'white' }} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.text}>
              Hospital
            </Typography>
            <Button variant="contained" color="#FFFFFF" textTransform= 'none' className={classes.button}>
              Add new hospital
            </Button>
          </CardContent>
        </Card>

        
        <Card className={classes.root}>
          <CardMedia className={classes.media}>
            <EmojiFoodBeverage fontSize="large" style={{ color: 'white' }} />
          </CardMedia>
          <CardContent>
            <Typography variant="h6" className={classes.text}>
              Profile
            </Typography>
            <Button variant="contained" color="#FFFFFF" textTransform= 'none' className={classes.button}>
              Add new profile
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Body;
