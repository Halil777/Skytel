import React from "react";
import { useMediaQuery, Stack, Typography, Grid, Box } from "@mui/material";
import { text } from "../../style/titleName/title.mjs";

const ServicesCarousel = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div style={{ marginBottom: "50px" }}>
      <Grid
        container
        alignItems="center"
        spacing={isMobile ? 5 : 20}
        width="100%"
      >
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/6502 [Converted] 1.png"
            />
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              Server
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={6}>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/Group 1.png"
            />
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              Network
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: isMobile ? "50%" : "100%" }}
              src="/images/pngwing 3.png"
            />
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              Satellite
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesCarousel;
