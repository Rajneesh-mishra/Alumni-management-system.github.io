import { Box, Divider, Grid, IconButton, TextField } from "@material-ui/core";
import { Add, PhotoCamera } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import Footer from "views/Landing/components/Footer";
import Navbar from "views/Landing/components/Navbar";
import JobCard from "./JobCard";

const data = [
  {
    post: " Software Developer",
    cmp: "Tata Consultancy Services",
    require: "Bachelor Dgree or Equivalent Experience",
  }
];
export default function Job() {
  const [jobs, setJobs] = useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    let ele = e.currentTarget.elements;
      let fd = new FormData();
      fd.append('company',ele.cmp.value);
      fd.append('description',ele.req.value)
      fd.append('last_date',ele.ldate.value)
      fd.append('designation',ele.dsg.value)
      let url =
      process.env.React_APP_Api+"uploadJob";
        fetch(url,{body:fd,method:'post'}).then(()=>{window.location.reload()}).
        catch(()=>{alert('failed to save')});
  };
  const loadJobs = async () => {
    let req = await fetch(process.env.React_APP_Api + "getJobs");
    let data = await req.json();
    setJobs(data);
  };
  useEffect(() => {
    if (jobs.length == 0) loadJobs();
  });
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <Grid item md={12}>
          <Box>
            <form onSubmit={onSubmit}>
              <Grid container spacing={3}>
                <Grid item md={3} xs={12} sm={6}>
                  {" "}
                  <TextField
                    //   fullWidth
                    variant="standard"
                    label="Designation"
                    name="dsg"
                    multiline
                  />{" "}
                </Grid>{" "}
                <Grid item md={3} xs={12} sm={6}>
                  {" "}
                  <TextField
                    //   fullWidth
                    variant="standard"
                    label="Company"
                    name="cmp"
                    multiline
                  />{" "}
                </Grid>{" "}
                <Grid item md={3} xs={12} sm={6}>
                  {" "}
                  <TextField
                    //   fullWidth
                    variant="standard"
                    label="Rquirement"
                    name="req"
                    multiline
                  />{" "}
                </Grid>{" "}
                <Grid item md={3} xs={12} sm={6}>
                  {" "}
                  <TextField
                    //   fullWidth
                    variant="standard"
                    type='date'
                    label="Last Date"
                    name="ldate"
                    defaultValue={new Date().toISOString().substr(0,10)}
                  />{" "}
                  <label>
                    <IconButton
                      color="primary"
                      type="submit"
                      // aria-label="upload picture"
                      // component="span"
                    >
                      <Add />
                    </IconButton>
                  </label>
                </Grid>{" "}
              </Grid>
            </form>
          </Box>
          <Divider />
        </Grid>
        <Box margin={5}>
          <Grid container spacing={3}>
            {jobs.map((job) => {
              return (
                <Grid item md={3}>
                  <JobCard job={job} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <div style={{ marginTop: 100 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}
