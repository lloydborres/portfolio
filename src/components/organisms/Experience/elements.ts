import styled from "@emotion/styled";
import type { Theme } from "@mui/material";

const Container = styled.div`
  padding: 16px 0;
`;

const ExperiencesContainer = styled.div<{ theme?: Theme }>`
  .experience-row-container {
    padding: 16px 0;
  }

  .experience-row-container:not(:first-of-type) {
    border-top: 1px solid gray;
  }

  .position-row-container {
    display: flex;
    flex-direction: row;
    position: relative;
  }

  .position-line-container::before {
    content: "•";
    font-size: 28px;
    color: ${({ theme }) => theme.palette.grey[500]};
    position: absolute;
    top: 10px;
    left: 6px;
  }

  .position-line-container {
    width: 1px;
    border-left: 1px solid ${({ theme }) => theme.palette.grey[500]};
    margin: 0 10px;
  }

  .position-row-container:nth-of-type(2):last-of-type
    > .position-line-container {
    visibility: hidden;
  }

  .position-row-container:nth-of-type(2) > .position-line-container {
    margin-top: 35px;
  }

  .position-row-container:last-of-type > .position-line-container {
    height: 18px;
  }

  .position-container {
    padding: 16px 0;
  }

  .position-title {
    font-weight: bold;
  }

  .position-description {
    white-space: pre-wrap;
    padding-top: 10px;
  }
`;

export { Container, ExperiencesContainer };
