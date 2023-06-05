import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

//? comment author component
const Authors = ({ commentId }) => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const authorsUrl = "https://randomuser.me/api/?results=105";
    fetch(authorsUrl)
      .then((response) => response.json())
      .then((data) => setAuthors(data.results))
      .catch((error) => console.error(error.message));
  }, []);

  // console.log(commentId);
  // console.log(authors);

  try {
    const pictures = authors.map((author) => author.picture.large);
    const names = authors.map((author) => {
      const titles = author.name.title;
      const firstNames = author.name.first;
      const lastNames = author.name.last;
      return `${titles} ${firstNames} ${lastNames}`;
    });
    // console.log(pictures);

    return (
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 2,
        }}
      >
        <img
          src={pictures[commentId]}
          alt={names[commentId]}
          width="100%"
          style={{ borderRadius: "50%" }}
        />
      </Box>
    );
  } catch (error) {
    console.error(error);
  }
};

export default Authors;
