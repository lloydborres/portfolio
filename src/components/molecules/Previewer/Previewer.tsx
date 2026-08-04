import type { DialogProps } from "@mui/material";
import {
  Close as CloseIcon,
  ArrowBackIos as ArrowBackIosNew,
  ArrowForwardIos as ArrowForwardIosIcon,
} from "@mui/icons-material";
import { IconButton } from "@components";
import { Container } from "./Previewer.styles";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
} & Omit<DialogProps, "onClose">;

const Component = ({
  children,
  onClose,
  onPrevious,
  onNext,
  ...otherProps
}: Props) => {
  return (
    <Container onClose={onClose} fullScreen {...otherProps}>
      <IconButton className="previewer-dialog-close" onClick={onClose}>
        <CloseIcon />
      </IconButton>
      <div className="previewer-content">
        {!!onPrevious && (
          <IconButton
            className="previewer-dialog-navigation previewer-dialog-previous"
            onClick={onPrevious}
            disableRipple
          >
            <ArrowBackIosNew />
          </IconButton>
        )}
        {children}
        {!!onNext && (
          <IconButton
            className="previewer-dialog-navigation previewer-dialog-next"
            onClick={onNext}
            disableRipple
          >
            <ArrowForwardIosIcon />
          </IconButton>
        )}
      </div>
    </Container>
  );
};

export default Component;
