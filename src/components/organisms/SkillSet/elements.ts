import styled from "@emotion/styled";
import { DEVICE_MEDIA_QUERIES } from "../../../constants";

const Container = styled.div`
  padding: 16px 0;
`;

const CardsContainer = styled.div<{ $cols?: number }>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 16px 40px;

  & .MuiCard-root {
    padding: 10px 0 0;
    width: calc(
      (100% - (20px * ${({ $cols }) => $cols})) / ${({ $cols }) => $cols}
    );
  }

  @media ${DEVICE_MEDIA_QUERIES.phones} {
    flex-direction: column;

    & .MuiCard-root {
      width: calc(100% - 20px);
    }
  }
`;

export { Container, CardsContainer };
