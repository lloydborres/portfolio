import styled from '@emotion/styled';
import { DEVICE_MEDIA_QUERIES } from '../../../constants';

const Container = styled.div`
  padding: 16px 0;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
  padding: 16px 0;

  @media ${DEVICE_MEDIA_QUERIES.phones} {
    flex-direction: column;
  }
`;

export { Container, CardsContainer };
