import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const Herobanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontsize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontsize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exerciese
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercies
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"></img>
    </Box>
  );
};

export default Herobanner;