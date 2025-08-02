import { alpha, Backdrop, LinearProgress, useTheme } from "@mui/material";

type Props = {
  progress?: number;
};

const Component = ({ progress = 0 }: Props) => {
  const theme = useTheme();

  const rgbaBackground = alpha(theme.palette.grey["900"], 0.9);

  return (
    <Backdrop sx={{ background: rgbaBackground }} open={progress < 100}>
      <LinearProgress
        sx={{ width: "80%" }}
        variant={progress ? "determinate" : "indeterminate"}
        value={progress}
      />
    </Backdrop>
  );
};

export default Component;
