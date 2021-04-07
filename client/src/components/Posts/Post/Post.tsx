import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import { deletePost } from "actions/posts";

export const Post = ({
  post,
  setCurrentId,
}: {
  post: any;
  setCurrentId: any;
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile") || "");
  //I DONT USE THIS BUUT LOOK IT'S A WAY TO FIND THE GOOGLE ID!!! FROM USER
  // const Likes = () => {
  //   if (post.likes.length > 0) {
  //     return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
  //       ? (
  //         <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
  //       ) : (
  //         <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
  //       );
  //   }

  //   return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  // };

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={post.title} />
      <Typography variant="h6">{post.name}</Typography>
      <Typography variant="body2">
        {moment(post.createdAt).fromNow()}
      </Typography>
      {(user?.result?.googleId === post?.creator ||
        user?.result?._id === post?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(post._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      {/* if we had a title
      <Typography className={classes.title} variant="h5" gutterBottom>
        {post.title}
      </Typography> */}
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon fontSize="small">Delete</DeleteIcon>
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
