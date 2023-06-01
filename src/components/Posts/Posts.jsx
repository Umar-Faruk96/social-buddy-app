import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ShortenText from "../../utilities/ShortenText/ShortenText";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    fetch(postUrl)
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error.message));
  }, []);

  const postsPublished = posts.slice(0, 21);

  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="h1"
        sx={{ textAlign: "center", color: "info.main" }}
      >
        Posts Published : ({postsPublished.length})
      </Typography>
      <Grid container spacing={3}>
        {postsPublished.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </Grid>
    </>
  );
};

const Post = ({ post }) => {
  // console.log(post);

  const { id, title, body } = post;

  return (
    <Grid item container lg={4}>
      <Card sx={{ width: 1, border: 1, borderColor: "grey.300" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            color={"primary.light"}
            sx={{ textTransform: "capitalize" }}
          >
            <ShortenText text={title} maxLength={50} />
          </Typography>
          <Typography variant="body2">
            <ShortenText text={body} maxLength={150} />
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={`/posts/${id}`}>
            <Button variant="outlined" color="secondary">
              See Detail
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Posts;
