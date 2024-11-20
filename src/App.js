import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Compony from "./pages/company/Compony";
import Contact from "./pages/contact/Contact";
// import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Services from "./pages/services/Services";
import { Colors } from "./style/theme/theme.mjs";
import React, { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import LazyLoadComponent from "./components/lazyload/LazyLoadComponent";

const Home = React.lazy(() => import("./pages/home/Home"));

const lightTheme = createTheme({
  typography: {
    fontFamily: "AppRegular",
  },
  palette: {
    mode: "light",
    primary: {
      main: Colors.primary,
      light: Colors.lightText,
      dark: Colors.darkText,
      darker: Colors.primaryDark,
      lighter: Colors.titleName,
      passiveButton: Colors.PassiveButton,
    },
    background: {
      paper: Colors.lightText,
      default: Colors.darkText,
    },
    customTheme: {
      accordionBg: "#f1f1f1",
      textColor: Colors.darkText,
      accordionIconBg: Colors.titleName,
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: "AppRegular",
  },
  palette: {
    mode: "dark",
    primary: {
      main: Colors.primary,
      light: Colors.lightText,
      dark: Colors.darkText,
      darker: Colors.primaryDark,
      lighter: Colors.titleName,
      passiveButton: Colors.PassiveButton,
    },
    background: {
      paper: Colors.darkText,
      default: Colors.PassiveButton,
    },
    customTheme: {
      accordionBg: Colors.PassiveButton,
      textColor: Colors.lightText,
      accordionIconBg: Colors.darkText,
    },
  },
});

function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => !prevIsDark);
  };
  console.clear();
  return (
    <>
      <Suspense fallback={<LazyLoadComponent />}>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Navbar isDark={isDark} toggleTheme={toggleTheme} />
          <Home />
          <Products />
          <Compony />
          <Services />
          <Contact />
          <Footer />
          <ToastContainer />
        </ThemeProvider>
      </Suspense>
    </>
  );
}

export default App;
