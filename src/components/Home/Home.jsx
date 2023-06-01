import React from "react";
import Posts from "../Posts/Posts";
import { Container } from "@mui/material";

const Home = () => {
  return (
    //~ Material UI Container
    <Container maxWidth="xs sm md lg" sx={{ my: 3 }}>
      {/* all posts component */}
      <Posts />
    </Container>
  );
};

export default Home;
