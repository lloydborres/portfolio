import { styled, IconButton } from "@mui/material";

const StyledIconButton = styled(IconButton)(() => ({
  "&.icon-button-outlined": {
    border: "1px solid",
    borderRadius: 8,
  },
}));

export { StyledIconButton };
