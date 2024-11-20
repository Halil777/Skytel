import React from "react";
import { useTheme } from "@mui/material/styles/";
import { Box, Stack, Typography, Button } from "@mui/material";
import {
  activeText,
  passiveText,
  readMoreButton,
} from "../../style/products/products.mjs";
import { text } from "../../style/titleName/title.mjs";

const MobItem = () => {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}>
        <Stack spacing={1}>
          <Typography sx={{ ...passiveText, pt: 2, pl: 2 }}>Q3 2023</Typography>
          <Typography sx={{ ...activeText, pl: 2 }}>Platform 4</Typography>
          <img
            src="/images/pngwing 11.png"
            style={{ width: "100%" }}
            alt="pngwing 11.png"
          />
        </Stack>
        <Stack mt={2} pb={2} p={2} spacing={2}>
          <img src="/images/22.png" style={{ width: "100%" }} alt="33" />
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ ...passiveText }}>Attitude</Typography>
            <Typography sx={text}>500-600 km</Typography>
          </Stack>
          <img src="/images/22.png" style={{ width: "100%" }} alt="33" />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography sx={{ ...passiveText }}>Type</Typography>
            <Typography sx={text}>SSO</Typography>
          </Stack>
          <img src="/images/22.png" style={{ width: "100%" }} alt="33" />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography sx={{ ...passiveText }}>Units available</Typography>
            <Typography sx={text}>9U</Typography>
          </Stack>
          <img src="/images/22.png" style={{ width: "100%" }} alt="33" />
          <Button variant="contained" sx={{ ...readMoreButton, width: "100%" }}>
            Read more
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default MobItem;
