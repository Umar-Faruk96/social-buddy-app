import { Button } from "@mui/material";
import React, { useState } from "react";

const ShortenText = ({ text, maxLength }) => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleText = () => setShowFullText(!showFullText);

  //? if text length is less than maximum length, return the text, else go down.
  if (text.length <= maxLength) return text;

  return (
    <>
      {/* if showFullText is false means the text is more than expected, shorten the text*/}
      {showFullText ? text : `${text.slice(0, maxLength)}...`}
      <Button
        onClick={toggleText}
        sx={{ textTransform: "capitalize", color: "grey.600" }}
        size="small"
      >
        {showFullText ? "Read Less" : "Read More"}
      </Button>
    </>
  );
};

export default ShortenText;
