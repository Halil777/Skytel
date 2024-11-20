import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  nextButtonStyle,
  prevButtonStyle,
} from "../../style/products/products.mjs";
import FirstActiveCard, { FirstPassiveCard } from "./FirstActiveCard.jsx";
import SecondCard, { SecondPassiveCard } from "./SecondCard.jsx";
import ThirdCard, { ThirdPassiveCard } from "./ThirdCard.jsx";
import { Box, Grid, IconButton, Stack } from "@mui/material";

const ProductsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  return (
    <>
      <Box>
        <Grid p={3} width="100%" container alignItems="center" spacing={3}>
          <Grid item lg={7}>
            {activeIndex === 0 ? (
              <FirstActiveCard />
            ) : activeIndex === 1 ? (
              <SecondCard />
            ) : (
              <ThirdCard />
            )}
          </Grid>
          <Grid item lg={5} width="100%">
            {activeIndex === 0 ? (
              <>
                <Stack direction="row" spacing={3} width="100%">
                  <SecondPassiveCard />
                  <ThirdPassiveCard />
                </Stack>
              </>
            ) : activeIndex === 1 ? (
              <>
                <Stack direction="row" spacing={3} width="100%">
                  <ThirdPassiveCard />
                  <FirstPassiveCard />
                </Stack>
              </>
            ) : (
              <>
                <Stack direction="row" spacing={3} width="100%">
                  <FirstPassiveCard />
                  <SecondPassiveCard />
                </Stack>
              </>
            )}
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mt={-30}
          mb={40}
          mr={2}
        >
          <IconButton sx={prevButtonStyle} onClick={handlePrevClick}>
            <ArrowBackIosIcon sx={{ fontSize: "10px" }} />
          </IconButton>
          <IconButton sx={nextButtonStyle} onClick={handleNextClick}>
            <ArrowForwardIosIcon sx={{ fontSize: "10px" }} />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

export default ProductsCarousel;
