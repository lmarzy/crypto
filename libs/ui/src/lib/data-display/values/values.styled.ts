import styled from 'styled-components';

import { theme } from '@crypto/styles';

export const StyledDl = styled.dl`
  width: 100%;
`;

export const StyledtDt = styled.dt`
  font-size: ${theme.fontSizes.tiny};
  text-transform: uppercase;
`;

export const StyledDd = styled.dd`
  font-size: ${theme.fontSizes.huge};
  color: ${theme.colors.black};
`;
