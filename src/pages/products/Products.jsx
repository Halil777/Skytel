import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { text, titleName } from "../../style/titleName/title.mjs";
import ProductsCarousel from "./ProductsCarousel.jsx";
import { useTheme } from "@mui/material/styles/";
import MobileProductCarousel from "./MobileProductCarousel.jsx";

const Products = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="products"
      style={{
        backgroundColor: theme.palette.background.paper,
        paddingTop: isSmallScreen ? "2vh" : "15vh",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={isSmallScreen ? "center" : "flex-end"}
          alignItems={"center"}
          spacing={2}
        >
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
          <Typography sx={titleName}>products</Typography>
        </Stack>
        <Stack
          direction={isSmallScreen ? "column-reverse" : "row"}
          justifyContent={isSmallScreen ? "center" : "flex-end"}
          mt={1}
        >
          <Typography
            sx={{
              ...text,
              width: isSmallScreen ? "100%" : "50%",
              textAlign: isSmallScreen ? "center" : "end",
              color: "customTheme.textColor",
            }}
          >
            Sky Telecom new hosted payload services introduces the easiest way
            to fly and operate your payload in orbit. The Shared Satellite
            Service eliminates the traditional legal, technologic and logistic
            and logistic complexity from your mission.
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
          {isSmallScreen && (
            <Stack>
              <MobileProductCarousel />
            </Stack>
          )}
          {!isSmallScreen && (
            <Stack>
              <ProductsCarousel />
            </Stack>
          )}
        </Box>
      </Container>
    </div>
  );
};

export default Products;
