import type { DialogProps } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { IconButton } from "@components";
import { Container } from "./Previewer.styles";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
} & Omit<DialogProps, "onClose">;

const Component = ({ children, onClose, ...otherProps }: Props) => {
  return (
    <Container onClose={onClose} fullScreen {...otherProps}>
      <IconButton className="previewer-dialog-close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <div className="previewer-content">{children}</div>
    </Container>
  );
};

export default Component;
