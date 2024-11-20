import { Select, TextField, styled } from "@mui/material";
import { Colors } from "../theme/theme.mjs";

export const prevButtonStyle = {
  background: "rgba(72, 72, 72, 0.5)",
  color: Colors.lightText,
  display: "flex",
  alignItems: "center",
  padding: 3,

  "&:hover": {
    background: "rgba(72, 72, 72, 0.5)",
  },
};

export const nextButtonStyle = {
  background: "rgba(72, 72, 72, 0.5)",
  color: Colors.lightText,
  display: "flex",
  alignItems: "center",
  padding: 3,

  "&:hover": {
    background: "rgba(72, 72, 72, 0.5)",
  },
};

export const activeCard = {
  height: "390px",
};

export const passiveText = {
  color: Colors.titleName,
  fontWeight: "400",
};

export const activeText = {
  color: Colors.lightText,
  fontWeight: "700",
  fontSize: "22px",
};

export const readMoreButton = {
  background: Colors.primary,
  borderRadius: 0,
  width: "260px",
  color: Colors.lightText,
  textTransform: "none",
  height: "62px",

  "&:hover": {
    background: Colors.primary,
  },
};

export const yupInputStyle = {
  background: Colors.PassiveButton,
  borderRadius: 0,
  color: Colors.lightText,
  "& fieldset": { border: "none" },
};

export const CustomTextField = styled(TextField)({
  "& fieldset": { border: "none" },
  borderRadius: 0,
  color: Colors.titleName,
  "& .MuiInputLabel-root": {
    color: Colors.titleName, // Placeholder color
  },
  "& .MuiInputBase-input": {
    color: Colors.titleName, // Text color
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: Colors.titleName, // Bottom underline color when not focused
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: Colors.titleName, // Bottom underline color when focused
  },
  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
    borderBottomColor: Colors.titleName, // Bottom underline color when hovered
  },
});

export const sendMessageButton = {
  background: Colors.primary,
  color: Colors.lightText,
  textTransform: "none",
  fontWeight: "400",
  borderRadius: "0",
  height: "50px",
  marginBottom: 5,

  "&:hover": { background: Colors.primary },
};

export const CustomSelect = styled(Select)({
  // Your custom styles for Select
  color: Colors.lightText,
  "& fieldset": { border: "none" },
  "& .MuiSelect-icon": {
    color: Colors.lightText, // Change the arrow color to #fff
  },
});
