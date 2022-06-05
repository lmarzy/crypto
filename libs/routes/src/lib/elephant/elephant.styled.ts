import { theme } from '@crypto/styles';
import styled from 'styled-components';

export const StyledPageLayout = styled.div`
  display: grid;
  gap: ${theme.spacings[2]};
  grid-template-columns: 20% 50% 30%;
`;
