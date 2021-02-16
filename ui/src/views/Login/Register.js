import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import Navbar from 'views/Landing/components/Navbar';
import Footer from 'views/Landing/components/Footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const onSubmit = (e) => {
    e.preventDefault();
    let ele = e.currentTarget.elements;
    // debugger
    
      let fd = new FormData();
      fd.append('fname',ele.fname.value);
      fd.append('lname',ele.lname.value)
      fd.append('address',ele.address.value)
      fd.append('email',ele.email.value)
      fd.append('number',ele.number.value)
      fd.append('course',ele.course.value)
      fd.append('yrofpassing',ele.passingYr.value)
      fd.append('acctype',ele.role.value)
      let url =
        "http://localhost:8080//saveuser";
        fetch(url,{body:fd,method:'post'}).then(()=>{alert('New User Created ')}).
        catch(()=>{alert('failed to save')});
  };
  return (
    <>
      <Navbar />
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New User
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="fname"
                variant="outlined"
                required
                fullWidth
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Last Name"
                name="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Address"
                name="address"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type='number'
                label="Contact No."
                name="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
        <Select
          defaultValue={10}
          variant="outlined"
          defaultValue={1}
          name="course"
          fullWidth
        >
          <MenuItem value={1}>Course</MenuItem>
          <MenuItem value="BCA">BCA</MenuItem>
          <MenuItem value="BBA">BBA</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12} sm={6}>
            <Select
          variant="outlined"
          defaultValue={1}
          name="passingYr"
          fullWidth
        >
          <MenuItem value={1}>Year Of Passing</MenuItem>
          <MenuItem value="2020">2020</MenuItem>
          <MenuItem value="2019">2019</MenuItem>
          <MenuItem value="2018">2018</MenuItem>
        </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
            <Select
          variant="outlined"
          defaultValue={1}
          name="role"
          fullWidth
        >
          <MenuItem value={1}>Role</MenuItem>
          <MenuItem value="Staff">Staff</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add New User
          </Button>
          {/* <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={5}>
        {/* <Copyright /> */}
      </Box>
    </Container>
    <Footer/>
    </>
  );
}