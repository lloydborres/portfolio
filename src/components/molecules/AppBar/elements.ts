import styled from "@emotion/styled";
import { AppBar, type Theme } from "@mui/material";
import { DEVICE_MEDIA_QUERIES, PAGE_MAX_WIDTH } from "../../../constants";

const StyledAppBar = styled(AppBar)<{ theme?: Theme }>`
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  .toolbar-icon {
    margin-right: 8px;
  }

  .toolbar-title {
    cursor: pointer;
  }

  @media ${DEVICE_MEDIA_QUERIES.desktops} {
    align-items: center;

    & .MuiToolbar-root {
      width: 100%;
      max-width: ${PAGE_MAX_WIDTH};
    }
  }
`;

export { StyledAppBar };
