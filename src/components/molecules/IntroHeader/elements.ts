import styled from "@emotion/styled";
import { Box, type Theme } from "@mui/material";

const Container = styled(Box)<{ theme?: Theme }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 85px 0 16px;
  background-color: ${({ theme }) => theme.palette.grey[900]};

  .intro-container {
    flex: 1;
    white-space: pre-wrap;
    text-align: center;
    color: ${({ theme }) => theme.palette.text.primary};
  }

  .intro-description {
    margin-top: 10px;
  }

  .profile-picture-container {
    height: 100px;
    width: 100px;
    border-radius: 100px;
    background-color: gray;
    border: 4px solid white;
  }

  .profile-picture-container img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100px;
  }
`;

export { Container };
