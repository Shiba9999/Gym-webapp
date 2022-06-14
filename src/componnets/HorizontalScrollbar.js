import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import uniqid from "uniqid";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };

  return (
    <ScrollMenu  RightArrow={RightArrow} LeftArrow={LeftArrow}>
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
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
