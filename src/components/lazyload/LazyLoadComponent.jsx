import React from "react";
import { Box, CircularProgress, Stack } from "@mui/material";

const LazyLoadComponent = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: 0,
          margin: 0,
          background: "#080912",
        }}
      >
        <img
          src="/images/react-suspense.png"
          alt="suspense"
          style={{ width: "100%", height: "100vh" }}
        />
        <Stack alignItems="center" justifyContent="center" mt={-50}>
          <CircularProgress sx={{ color: "#fff" }} />
        </Stack>
      </Box>
    </>
  );
};

export default LazyLoadComponent;
