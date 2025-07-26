import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { DEVICE_MEDIA_QUERIES, PAGE_MAX_WIDTH } from "../../../constants";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
`;

const Content = styled(Box)`
  flex: 1;
  align-self: center;
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    padding-left: calc((100% - ${PAGE_MAX_WIDTH}) / 2);
    padding-right: calc((100% - ${PAGE_MAX_WIDTH}) / 2);
  }

  @media ${DEVICE_MEDIA_QUERIES.phones}, ${DEVICE_MEDIA_QUERIES.tablets} {
    & > div {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
`;

export { Container, Content };
