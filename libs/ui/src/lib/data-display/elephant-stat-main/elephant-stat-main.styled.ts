import styled from 'styled-components';

import { theme } from '@crypto/styles';

export const StyledStat = styled.section`
  position: relative;
  width: 100%;
  padding: ${theme.spacings[2]};
  background-color: ${theme.colors.blue};
  border-radius: ${theme.borderRadius.small};
  box-shadow: 0 0 10px rgb(0 0 0 / 0.1);
  overflow: hidden;

  /* &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    z-index: -1;
  }

  &::before {
    top: -100px;
    left: -100px;
    width: 500px;
    height: 500px;
    background-color: ${theme.colors.blue};
    opacity: 0.5;
  }

  &::after {
    bottom: -120px;
    right: -120px;
    width: 200px;
    height: 200px;
    border: 1px solid ${theme.colors.blue};
  } */
`;

export const StyledStatDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacings[4]};

  > div {
    width: 100%;
  }

  > div:first-child {
    border-right: 1px solid ${theme.colors.greyDark};
  }
`;

export const StyledStatDt = styled.dt`
  font-size: ${theme.fontSizes.tiny};
  text-transform: uppercase;
  line-height: 1;
`;

export const StyledStatDd = styled.dd`
  font-size: ${theme.fontSizes.huge};
  color: ${theme.colors.black};
  font-weight: ${theme.fontWeights.bold};
`;
