import { type IconButtonProps } from "@mui/material";
import { StyledIconButton } from "./IconButton.styles";

type Props = {
  variant?: "default" | "outlined";
} & IconButtonProps;

const Component = ({
  variant = "default",
  className,
  ...otherProps
}: Props) => {
  return (
    <StyledIconButton
      {...otherProps}
      className={`icon-button-${variant} ${className ?? ""}`}
      disableTouchRipple
    />
  );
};

export default Component;
