import { Box, Container, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../Comments/Comments";

const SinglePost = () => {
  const { postId } = useParams();
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setSinglePost(data))
      .catch((error) => console.error(error.message));
  }, []);

  const { title, body } = singlePost;

  // console.log(singlePost);

  return (
    <Container maxWidth="md lg" component="main" sx={{ my: 3 }}>
      <Grid2 container spacing={3.5} component="section">
        {/* Posts Section */}
        <Grid2 item component="article" lg={7}>
          {/* Section Heading */}
          <Typography
            gutterBottom
            variant="h4"
            component="h2"
            sx={{ textAlign: "center", color: "primary.main" }}
          >
            Posts Shown : ({postId})
          </Typography>
          {/* Section Content */}
          <Box
            component="div"
            p={3}
            sx={{ border: 1, borderColor: "grey.400", borderRadius: 1.5 }}
          >
            {/* Post Title */}
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color={"primary.main"}
              sx={{ textTransform: "capitalize" }}
            >
              {title}
            </Typography>
            {/* Post Description */}
            <Typography variant="body1" sx={{ textAlign: "justify" }}>
              {body}
            </Typography>
          </Box>
        </Grid2>

        {/* Comments Section */}
        <Grid2 item component="aside" lg={5}>
          <Comments postId={postId} />
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default SinglePost;
