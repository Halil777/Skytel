import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import { text } from "../../style/titleName/title.mjs";

const ServerComponent = () => {
  return (
    <>
      <Grid container pt={3} spacing={4}>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Stack spacing={2}>
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              The National Aeronautics and Space Administration is America’s
              civil space program and the global leader in space exploration.
              The agency has a diverse workforce of just under 18,000 civil
              servants, and works with many more U.S. contractors, academia, and
              international and commercial partners to explore, discover, and
              expand knowledge for the benefit of humanity. With an annual
              budget of $23.2 billion in Fiscal Year 2021, which is less than
              0.5% of the overall U.S. federal budget, NASA supports more than
              312,000 jobs across the United States, generating more than $64.3
              billion in total economic output (Fiscal Year 2019).
            </Typography>
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              At its 20 centers and facilities across the country – and the only
              National Laboratory in space – NASA studies Earth, including its
              climate, our Sun, and our solar system and beyond. We conduct
              research, testing, and development to advance aeronautics,
              including electric propulsion and supersonic flight. We develop
              and fund space technologies that will enable future exploration
              and benefit life on Earth.
            </Typography>
            <Typography sx={{ ...text, color: "customTheme.textColor" }}>
              NASA also leads a Moon to Mars exploration approach, which
              includes working with U.S. industry, international partners, and
              academia to develop new technology, and send science research and
              soon humans to explore the Moon
            </Typography>
          </Stack>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img
            src="/images/image.png"
            alt="imagepng"
            style={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <Stack mt={2}>
        <Typography sx={{ color: "customTheme.textColor", fontWeight: "700" }}>
          NASA also leads a Moon to Mars exploration approach
        </Typography>
        <br />
        <Typography sx={{ ...text, color: "customTheme.textColor" }}>
          The National Aeronautics and Space Administration is America’s civil
          space program and the global leader in space exploration. The agency
          has a diverse workforce of just under 18,000 civil servants, and works
          with many more U.S.
        </Typography>
      </Stack>
    </>
  );
};

export default ServerComponent;
