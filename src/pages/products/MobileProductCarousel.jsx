import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Box, Stack } from "@mui/material";
import MobItem from "../../components/productCarousel/MobItem";
import MobItemSecond from "../../components/productCarousel/MobItemSecond";
import MobItemThird from "../../components/productCarousel/MobItemThird";
const MobileProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const transition = {
    duration: 0.7,
    ease: "easeInOut",
  };

  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "100%",
          width: "100%",
        }}
      >
        <AnimatePresence mode="wait">
          {activeIndex === 0 ? (
            <motion.div
              key={0}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <MobItem />
            </motion.div>
          ) : activeIndex === 1 ? (
            <motion.div
              key={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <MobItemSecond />
            </motion.div>
          ) : (
            <motion.div
              key={2}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              <MobItemThird />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
      <Stack direction="row" justifyContent="center" mt={2}>
        {[0, 1, 2].map((index) => (
          <Box
            key={index}
            sx={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: index === activeIndex ? "#00349A" : "#FFFFFF",
              mx: 1,
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MobileProductCarousel;
