import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
// const FileBase = require("react-file-base64");
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "actions/posts";
import { useSelector } from "react-redux";
//Get current id of post.

interface IpostData {
  creator: string;
  title: string;
  message: string;
}

export const Form = ({
  currentId,
  setCurrentId,
}: {
  currentId: any;
  setCurrentId: any;
}) => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
  });
  const post = useSelector((state: any) =>
    currentId ? state.posts.find((p: any) => p._id === currentId) : null
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const handleCreatorOnChange = (e: any) => {
    setPostData({ ...postData, creator: e.target.value });
  };

  const handleTitleOnChange = (e: any) => {
    setPostData({ ...postData, title: e.target.value });
  };

  const handleMessageOnChange = (e: any) => {
    setPostData({ ...postData, message: e.target.value });
  };

  // If we uploaded a file
  //   const handleFileBaseOnDone = (base64:any) =>{
  //     setPostData({...postData, selectedFile:base64})
  //   }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "editing" : "Creating"} a Feedback
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={handleCreatorOnChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleTitleOnChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={handleMessageOnChange}
        />
        {/* if we had file input
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64:any) => handleFileBaseOnDone(base64)}
          />
        </div> */}
        <Button
          className={classes.buttonSubmit}
          color="primary"
          size="large"
          type="submit"
          variant="contained"
        >
          submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
