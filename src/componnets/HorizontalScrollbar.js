import { Box } from "@mui/material";
import React from "react";
import uniqid from "uniqid";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={uniqid() || item}
          itemId={uniqid() || item}
          title={item}
          m="0 40px"
        >
          {" "}
          <BodyPart
            item={item}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />{" "}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
