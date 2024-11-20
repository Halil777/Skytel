import {
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { text, titleName } from "../../style/titleName/title.mjs";
import { useTheme } from "@mui/material/styles/";

const Compony = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="ourCompany"
      style={{
        backgroundColor: theme.palette.background.paper,
        paddingTop: isSmallScreen ? "6vh" : "20vh",
      }}
    >
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={isSmallScreen ? "center" : ""}
          spacing={2}
        >
          <Typography sx={titleName}>our company</Typography>
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
        </Stack>
        <br />
        <Grid container spacing={4}>
          <Grid item md={6} lg={6} sm={12} xs={12}>
            <Stack spacing={2}>
              <Typography
                sx={{
                  ...text,
                  color: "customTheme.textColor",
                }}
              >
                The National Aeronautics and Space Administration is America’s
                civil space program and the global leader in space exploration.
                The agency has a diverse workforce of just under 18,000 civil
                servants, and works with many more U.S. contractors, academia,
                and international and commercial partners to explore, discover,
                and expand knowledge for the benefit of humanity. With an annual
                budget of $23.2 billion in Fiscal Year 2021, which is less than
                0.5% of the overall U.S. federal budget, NASA supports more than
                312,000 jobs across the United States, generating more than
                $64.3 billion in total economic output (Fiscal Year 2019).
              </Typography>
              <Typography
                sx={{
                  ...text,
                  color: "customTheme.textColor",
                }}
              >
                At its 20 centers and facilities across the country – and the
                only National Laboratory in space – NASA studies Earth,
                including its climate, our Sun, and our solar system and beyond.
                We conduct research, testing, and development to advance
                aeronautics, including electric propulsion and supersonic
                flight. We develop and fund space technologies that will enable
                future exploration and benefit life on Earth.
              </Typography>
              <Typography
                sx={{
                  ...text,
                  color: "customTheme.textColor",
                }}
              >
                NASA also leads a Moon to Mars exploration approach, which
                includes working with U.S. industry, international partners, and
                academia to develop new technology, and send science research
                and soon humans to explore the Moon on Artemis missions that
                will help prepare for human exploration of the Red Planet. In
                addition to those major missions, the agency shares what it
                learns so that its information can make life better for people
                worldwide. For example, companies use NASA discoveries and
                technologies to create new products for the public. To ensure
                future success for the agency and the nation, NASA also supports
                education efforts in STEM with an emphasis on increasing
                diversity in our future workforce.
              </Typography>
            </Stack>
          </Grid>
          <Grid item md={6} lg={6} sm={12} xs={12}>
            <Stack
              direction="row"
              justifyContent={{ md: "flex-end", sm: "center", xs: "center" }}
            >
              <img
                style={{ width: "90%" }}
                src="/images/Group 1 (3).png"
                alt="imagee.png"
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Compony;
