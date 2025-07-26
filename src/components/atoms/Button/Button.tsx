import { Button, type ButtonProps } from "@mui/material";

type Props = {} & ButtonProps;

const Component = ({ ...otherProps }: Props) => {
  return <Button {...otherProps} disableTouchRipple />;
};

export default Component;
