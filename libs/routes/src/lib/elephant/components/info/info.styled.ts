import { theme } from '@crypto/styles';
import styled from 'styled-components';

export const StyledInfo = styled.ul`
  list-style-image: url('/assets/logo-bullet.svg');
  margin-left: ${theme.spacings[3]};

  li:not(:last-child) {
    margin-bottom: ${theme.spacings[3]};
  }
`;
