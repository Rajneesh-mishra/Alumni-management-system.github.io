import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Navbar from "views/Landing/components/Navbar";
import Footer from "views/Landing/components/Footer";
import Results from "./Results";
import { Add, CloudUpload, PhotoCamera } from "@material-ui/icons";

export default function Story() {
  const [stories, setStories] = useState([]);

  const onUploadStory = (e) => {
    e.preventDefault();
    let ele = e.currentTarget.elements;
    let img = ele.image.files[0];
    let desc = ele.desc.value;
    var reader = new FileReader();
    reader.onload = function (e) {
      let base64 = e.target.result;
      let fd = new FormData();
      fd.append('image',base64);
      fd.append('description',desc)
      fd.append('userid',JSON.parse(localStorage.user).id)
      let url =
      process.env.React_APP_Api+"uploadStory";
        fetch(url,{body:fd,method:'post'}).then(()=>{window.location.reload()}).
        catch(()=>{alert('failed to save')});
    };
    reader.readAsDataURL(img);
  };
  const loadStories = async () => {
    let req = await fetch(process.env.React_APP_Api + "getStories");
    let data = await req.json();
    setStories(data);
  };
  useEffect(() => {
    if (stories.length == 0) loadStories();
  });
  return (
    <>
      <Navbar />
      <div style={{ marginTop: 20, marginLeft: 20 }}>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Box align="center" width={700}>
              <form onSubmit={onUploadStory}>
                <Grid container spacing={3}>
                  <Grid item md={4}>
                    {" "}
                    <TextField
                      fullWidth
                      variant="standard"
                      label="Write something..."
                      name="desc"
                      multiline
                    />{" "}
                  </Grid>{" "}
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    name="image"
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file" style={{ marginTop: 20 }}>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <label style={{ marginTop: 20 }}>
                    <IconButton
                      color="primary"
                      type="submit"
                      // aria-label="upload picture"
                      // component="span"
                    >
                      <Add />
                    </IconButton>
                  </label>
                </Grid>
              </form>
            </Box>
            <Divider />
          </Grid>
          {stories.map((story) => {
            return (
              <Grid item md={4} sm={6} xs={12}>
                <Results story={story} />
              </Grid>
            );
          })}
        </Grid>
      </div>
      <div style={{ marginTop: 100 }}>
        <Footer />
      </div>
    </>
  );
}
