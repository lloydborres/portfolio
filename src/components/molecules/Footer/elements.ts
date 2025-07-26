import styled from "@emotion/styled";
import { Box, type Theme } from "@mui/material";
import { DEVICE_MEDIA_QUERIES } from "../../../constants";

const Container = styled(Box)<{ theme?: Theme }>`
  display: flex;
  justify-content: center;
  padding: 16px 0;
  background-color: ${({ theme }) => theme.palette.grey[900]};

  .footer-content {
    flex-direction: row;
  }

  .copyright-container {
    padding: 8px;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  @media ${DEVICE_MEDIA_QUERIES.tablets} {
    padding: 16px 20px;
  }

  @media ${DEVICE_MEDIA_QUERIES.phones} {
    padding: 16px 20px;

    .footer-content {
      flex-direction: column-reverse;
    }
  }
`;

export { Container };
