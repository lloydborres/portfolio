import styled from "@emotion/styled";
import { Card, type Theme } from "@mui/material";
import { DEVICE_MEDIA_QUERIES } from "../../../constants";

const StyledCard = styled(Card)<{ theme?: Theme }>`
  height: 200px;
  display: flex;
  cursor: pointer;
  overflow: hidden;

  &.collapsed {
    width: 64px;
  }

  .collapsed-content {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    height: calc(100% - 39px);
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 7px;
    height: 186px;
  }

  .collapsed-content img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .expanded-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 100%;
    padding: 0;
    text-align: center;
    line-height: 22px;
    white-space: pre-wrap;
  }

  .expanded-content-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 16px;
  }

  .expanded-content-header img {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  .expanded-content-content {
    align-self: start;
    width: calc(100% - 32px);
    background-color: ${({ theme }) => theme.palette.grey["A200"]};
    padding: 10px 16px;
    flex: 1;
  }

  @media ${DEVICE_MEDIA_QUERIES.phones} {
    height: initial;
    align-items: center;

    &.collapsed {
      width: 100%;
    }

    &.expanded {
      justify-content: center;
      display: block;
    }

    & .expanded-content {
      width: 100%;
    }

    && .collapsed-content {
      writing-mode: initial;
      text-orientation: initial;
      height: initial;
      display: flex;
      gap: 10px;
      align-items: center;
      padding: 7px 7px 7px 30px;
    }
  }
`;

export { StyledCard };
