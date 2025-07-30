import styled from "@emotion/styled";
import { Card, type Theme } from "@mui/material";

const StyledCard = styled(Card)<{ theme?: Theme }>`
  & .MuiCardMedia-root {
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    background-size: contain;
  }

  & .MuiCardContent-root {
    padding: 10px;
    background: ${({ theme }) => theme.palette.grey["A200"]};
  }

  & .MuiCardContent-root:last-child {
    padding-bottom: 10px;
  }
`;

export { StyledCard };
