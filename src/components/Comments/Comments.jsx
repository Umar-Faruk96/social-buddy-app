import { Box, Link, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import Authors from "../Authors/Authors";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
    fetch(commentsUrl)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error.message));
  }, []);

  // console.log(comments);
  return (
    <>
      {/* Comments Section Heading */}

      <Typography
        gutterBottom
        variant="h5"
        component="h1"
        sx={{ textAlign: "center", color: "info.light", mt: 3 }}
      >
        Comments : ({comments.length})
      </Typography>
      {/* Comments Section Content */}
      {comments.map((comment) => (
        <Grid2
          container
          spacing={1}
          sx={{ border: 1, borderColor: "grey.400", borderRadius: 2, my: 2.5 }}
        >
          {/* Author Section */}
          <Grid2 lg={4}>
            <Authors commentId={comment.id} key={comment.id} />
          </Grid2>

          {/* Author Comment */}
          <Grid2 lg={8}>
            <Comment comment={comment} key={comment.id} />
          </Grid2>
        </Grid2>
      ))}
    </>
  );
};

const Comment = ({ comment }) => {
  const { name, email, body } = comment;
  return (
    <Box component="div" py={1.5} pr={2}>
      <Typography variant="subtitle2" component="h3" gutterBottom>
        Name : {name}
      </Typography>
      <Typography variant="caption" gutterBottom component="p">
        Email :{" "}
        <Link href={`mailto:${email}`} underline="hover">
          {email}
        </Link>
      </Typography>
      <Typography
        variant="body2"
        gutterBottom
        component="p"
        sx={{ textAlign: "justify" }}
      >
        Comment : {body}
      </Typography>
    </Box>
  );
};

export default Comments;
