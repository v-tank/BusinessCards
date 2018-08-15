import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/MailOutline';
import Work from '@material-ui/icons/Work';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    maxWidth: 400,
  },
};

function SimpleCard(props) {

  return (
    <div>
      <Card style={{padding: 20}}>
        <CardContent>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Name" name="name" onChange={props.handleInputChange}/>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Work />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Company" name="company" onChange={props.handleInputChange}/>
            </Grid>
          </Grid>
        </CardContent>

        <CardContent>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <Email />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Email" name="email" onChange={props.handleInputChange}/>
            </Grid>
          </Grid>
        </CardContent>
        <div style={{textAlign: 'center'}}>
          <Button variant="contained" color="secondary" onClick={props.handleFormSubmit}>
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);
