import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  IconButton,
  MenuItem,
  Stack,
  Typography,
  Drawer,
} from "@mui/material";
import { navbarItems } from "../../data/navbarItems/items.mjs";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import { CustomSelect } from "../../style/products/products.mjs";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors } from "../../style/theme/theme.mjs";

const Navbar = (props) => {
  const { t, i18n } = useTranslation();
  const [selectedOption, setSelectedOption] = useState(i18n.language);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (event) => {
    const selectedLanguage = event.target.value;
    setSelectedOption(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  const handleThemeToggle = () => {
    props.toggleTheme();
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  // ...

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 10,
          backgroundColor:
            scrollPosition === 0
              ? "transparent"
              : props.isDark
              ? "rgba(255, 255, 255, 0.1)" // Lighter color for dark mode
              : "rgba(0, 0, 0, 0.2)", // Darker color for light mode
          transition: "background-color 0.5s",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          backdropFilter: scrollPosition === 0 ? "" : "blur(5px)", // Add blur effect
          filter: scrollPosition === 0 ? "" : "brightness(90%)", // Add filter effect
        }}
      >
        <Box>
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pt={2}
            >
              <img
                src="/images/Logo.png"
                style={{ width: "138px", height: "71px", cursor: "pointer" }}
                alt="Logo"
              />
              <Stack direction="row" alignItems="center" spacing={5}>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  sx={{
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  {navbarItems.map((item, i) => (
                    <Link
                      key={`navbar_items${i}`}
                      activeClass="active"
                      spy={true}
                      to={item.link}
                      smooth={true}
                      duration={1000}
                      className="scroll-link"
                    >
                      <Typography sx={{ color: Colors.lightText }}>
                        {t(item.title)}
                      </Typography>
                    </Link>
                  ))}
                  <CustomSelect
                    labelId="select-label"
                    MenuProps={{ disableScrollLock: true }}
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <MenuItem value="en">ENG</MenuItem>
                    <MenuItem value="ru">RU</MenuItem>
                  </CustomSelect>
                  <IconButton onClick={handleThemeToggle}>
                    {props.isDark ? (
                      <LightModeIcon sx={{ color: Colors.lightText }} />
                    ) : (
                      <ModeNightIcon sx={{ color: Colors.lightText }} />
                    )}
                  </IconButton>
                </Stack>
                <IconButton
                  onClick={toggleMobileMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    color: "#FFFFFF",
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              width: "240px",
            },
          }}
        >
          <Box
            className="mobile-menu"
            sx={{
              bg: "#fff",
              height: "100%",
              padding: "16px",
            }}
          >
            <Stack spacing={2} pt={3} alignItems="center">
              <>
                {navbarItems.map((item, i) => (
                  <Link
                    key={`navbar_items_mobile${i}`}
                    activeClass="active"
                    spy={true}
                    to={item.link}
                    smooth={true}
                    duration={1000}
                    className="scroll-link"
                    onClick={toggleMobileMenu}
                  >
                    <Typography
                      sx={{
                        textAlign: "start",
                        color: "customTheme.textColor",
                      }}
                    >
                      {t(item.title)}
                    </Typography>
                  </Link>
                ))}
                <Stack direction="row" spacing={3}>
                  <CustomSelect
                    sx={{
                      width: "100px",
                      color: "customTheme.textColor",
                      "& fieldset": { border: "none" },
                      "& .MuiSelect-icon": {
                        color: "customTheme.textColor", // Change the arrow color to #fff
                      },
                    }}
                    labelId="select-label"
                    MenuProps={{ disableScrollLock: true }}
                    value={selectedOption}
                    onChange={handleChange}
                  >
                    <MenuItem value="en">ENG</MenuItem>
                    <MenuItem value="ru">RU</MenuItem>
                  </CustomSelect>
                  <IconButton
                    sx={{ width: "50px" }}
                    onClick={handleThemeToggle}
                  >
                    {props.isDark ? (
                      <LightModeIcon sx={{ color: "customTheme.textColor" }} />
                    ) : (
                      <ModeNightIcon sx={{ color: "customTheme.textColor" }} />
                    )}
                  </IconButton>
                </Stack>
              </>
            </Stack>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
