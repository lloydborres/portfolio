import { type IconButtonProps } from "@mui/material";
import { StyledIconButton } from "./elements";

type Props = {
  variant?: "default" | "outlined";
} & IconButtonProps;

const Component = ({ variant = "default", ...otherProps }: Props) => {
  return (
    <StyledIconButton
      {...otherProps}
      className={`icon-button-${variant}`}
      disableTouchRipple
    />
  );
};

export default Component;
export type { Props };
