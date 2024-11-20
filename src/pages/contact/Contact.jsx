import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { text, titleName } from "../../style/titleName/title.mjs";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  CustomTextField,
  passiveText,
  sendMessageButton,
} from "../../style/products/products.mjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles/";
import axios from "axios";
import { showError, showSuccess } from "../../components/alert/Alert";

const Contact = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChange1 = () => {
    setExpanded1(!expanded1);
  };

  const handleChange2 = () => {
    setExpanded2(!expanded2);
  };
  //   Yup form
  const validationSchema = Yup.object({
    fullName: Yup.string().required("required"),
    message: Yup.string().required("required"),
    email: Yup.string().required("required").email("Invalid email"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema, // shorthand used here
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });

  const handleSendMessage = () => {
    formik.handleSubmit(); // Run Formik's handleSubmit to trigger validation

    if (formik.isValidating || formik.isSubmitting) {
      return; // Prevent multiple submissions
    }

    axios
      .post("http://localhost:8080/send", {
        fullName: formik.values.fullName,
        email: formik.values.email,
        message: formik.values.message,
      })
      .then((response) => {
        showSuccess("Message sent successfully");
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
        showError("Error sending message");
      });
  };
  return (
    <div
      id="contactUs"
      style={{
        backgroundColor: theme.palette.background.paper,
        paddingTop: isSmallScreen ? "7vh" : "20vh",
      }}
    >
      <Box p={2} display={isSmallScreen ? "none" : ""}>
        <img
          src="/images/Dotted Shape.png"
          alt="Dotted Shape"
          style={{ width: "345px" }}
        />
      </Box>
      <Container>
        <Grid container mt={isSmallScreen ? 0 : -30} mb={6}>
          <Grid lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={isSmallScreen ? "center" : "flex-end"}
              spacing={2}
            >
              <img
                style={{ width: "90px" }}
                src="/images/Rectangle 1.png"
                alt="Rectangle 1.png"
              />
              <Typography sx={titleName}>Contact us</Typography>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" mt={1}>
              <Typography
                sx={{
                  ...text,
                  textAlign: isSmallScreen ? "center" : "end",
                  color: "customTheme.textColor",
                }}
              >
                Sky Telecom new hosted payload services introduces the easiest
                way to fly and operate your payload in orbit. The Shared
                Satellite Service eliminates the traditional legal, technologic
                and logistic and logistic complexity from your mission.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <form>
              <Stack spacing={1} mb={2}>
                <CustomTextField
                  sx={{
                    backgroundColor: theme.palette.customTheme.accordionBg,
                  }}
                  fullWidth
                  name="fullName"
                  label="Your full Name"
                  id="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.fullName && Boolean(formik.errors.fullName)
                  }
                  helperText={formik.touched.fullName && formik.errors.fullName}
                  placeholder="Your full Name"
                  type="text"
                />
                <CustomTextField
                  sx={{
                    backgroundColor: theme.palette.customTheme.accordionBg,
                  }}
                  fullWidth
                  name="email"
                  label="Your Email"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  placeholder="Your Email Address"
                  type="text"
                />
                <CustomTextField
                  sx={{
                    backgroundColor: theme.palette.customTheme.accordionBg,
                  }}
                  fullWidth
                  name="message"
                  label="Message"
                  id="message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.message && Boolean(formik.errors.message)
                  }
                  helperText={formik.touched.message && formik.errors.message}
                  placeholder="Message"
                  type="text"
                />
              </Stack>
              <Stack>
                <Button
                  fullWidth
                  onClick={handleSendMessage}
                  variant="contained"
                  sx={sendMessageButton}
                >
                  Send your message
                </Button>
              </Stack>
            </form>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={1}>
              <Typography sx={passiveText}>Address:</Typography>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                13th Floor, Burjuman Buisness Tower , <br /> Bur Dubai - UAE
              </Typography>
            </Stack>
            <Stack spacing={1} mt={3}>
              <Typography sx={passiveText}>Phone:</Typography>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                +971522605247
              </Typography>
            </Stack>
            <Stack spacing={1} mt={3}>
              <Typography sx={passiveText}>Email:</Typography>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                info@skytel.ae
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="center"
          mt={8}
          pb={3}
        >
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
          <Typography sx={titleName}>Contact us and leave a comment</Typography>
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
        </Stack>
        <Stack spacing={2.5} pb={isSmallScreen ? 7 : 15} mt={2}>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded}
            onChange={handleChange}
          >
            <AccordionSummary
              expandIcon={
                expanded ? (
                  <RemoveIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded1}
            onChange={handleChange1}
          >
            <AccordionSummary
              expandIcon={
                expanded1 ? (
                  <RemoveIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem Ipsum is simply dummy
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded2}
            onChange={handleChange2}
          >
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <RemoveIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                ) : (
                  <AddIcon
                    sx={{
                      backgroundColor:
                        theme.palette.customTheme.accordionIconBg,
                      color: "#fff",
                    }}
                  />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem Ipsum is simply dummy text of the printing and
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ ...text, color: "customTheme.textColor" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </div>
  );
};

export default Contact;
