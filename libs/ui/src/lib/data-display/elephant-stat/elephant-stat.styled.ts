import { theme } from '@crypto/styles';
import styled from 'styled-components';

export const StyledStat = styled.section`
  width: 100%;
  padding: ${theme.spacings[2]};
  background-color: ${theme.colors.orange};
  border-radius: ${theme.borderRadius.small};
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
`;

export const StyledStatDt = styled.dt`
  font-size: ${theme.fontSizes.tiny};
  text-transform: uppercase;
`;

export const StyledStatDd = styled.dd`
  font-size: ${theme.fontSizes.huge};
  color: ${theme.colors.black};
`;
