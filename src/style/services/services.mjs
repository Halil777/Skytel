import { Colors } from "../theme/theme.mjs";

export const servicesActiveButton = {
  background: Colors.primary,
  color: Colors.lightText,
  textTransform: "capitalize",
  borderRadius: "0",
  width: "140px",
};

export const servicesPassiveButton = {
  background: Colors.PassiveButton,
  color: Colors.lightText,
  textTransform: "capitalize",
  width: "140px",
  borderRadius: "0",

  "&:hover": {
    background: Colors.PassiveButton,
  },
};
