import { StyledDl, StyledtDt, StyledDd } from './values.styled';

interface ValuesPropInterface {
  title1: string;
  title2: string;
  value1: number;
  value2: number;
}

export const Values = ({ title1, title2, value1, value2 }: ValuesPropInterface) => (
  <StyledDl>
    <StyledtDt>{title1}</StyledtDt>
    <StyledDd>{value1}</StyledDd>
    <StyledtDt>{title2}</StyledtDt>
    <StyledDd>{value2}</StyledDd>
  </StyledDl>
);
