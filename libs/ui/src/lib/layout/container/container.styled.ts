import { theme } from '@crypto/styles';
import styled from 'styled-components';

export interface StyledContainerProps {
  $fullWidth?: boolean;
}

export const StyledContainer = styled.div<StyledContainerProps>`
  max-width: ${theme.layout.maxWidth};
  margin: 0 auto;
  padding-left: ${theme.spacings[2]};
  padding-right: ${theme.spacings[2]};
`;
